#!/usr/bin/env node
/**
 * refactor-md.js — Single-file refactor for bilingual Markdown
 * Usage:
 *   node tools/refactor-md.js "<FILE_PATH>" [--mode all|headings|tables|paragraphs|mermaid|card]
 *
 * Notes:
 * - يعالج ملف واحد فقط في كل تشغيل.
 * - ينشئ نسخة احتياطية: <FILE_PATH>.bak
 * - لا يطبع محتوى الملف بعد التعديل — يكتب مباشرةً على الملف.
 */

const fs = require('fs');
const path = require('path');

const file = process.argv[2];
const mode = (process.argv[3] || '--mode=all').split('=')[1] || 'all';
if (!file) {
  console.error('ERROR: Provide a file path, e.g. node tools/refactor-md.js "docs/01-vision/01-vision.md"');
  process.exit(1);
}
if (!fs.existsSync(file)) {
  console.error('ERROR: File not found:', file);
  process.exit(1);
}

let src = fs.readFileSync(file, 'utf8');
const bakPath = file + '.bak';
fs.writeFileSync(bakPath, src); // backup

// ---------- Utilities ----------
const ensureUnixNL = s => s.replace(/\r\n/g, '\n');
const trimLines = s => s.split('\n').map(l => l.replace(/[ \t]+$/,'')).join('\n');
const uniqBlankInsideBlockquotes = s =>
  s.replace(/\n> *\n>/g, '\n>'); // لا أسطر فارغة داخل blockquotes

function replaceBlockAtTopWithCard(s) {
  // ابحث عن بطاقة قديمة (blockquote أو div أو table) في أول ~80 سطر واستبدلها ببطاقة موحّدة
  const lines = s.split('\n');
  const head = lines.slice(0, 80).join('\n');
  const tail = lines.slice(80).join('\n');

  // التقط بعض القيم (اسم المنتج/المالك/التاريخ) إن وُجدت في أول الملف
  const productAr = (head.match(/منصة.*?\*\*(.+?)\*\*/)?.[1]) || 'CA Admin';
  const productEn = (head.match(/CA Admin.*?Mediation Platform/i)?.[0]) || 'CA Admin Shopping Mediation Platform';
  const ownerEn   = (head.match(/Owner:\s*\*\*(.+?)\*\*/i)?.[1]) || (head.match(/Owner:\s*([A-Za-z ]+)/)?.[1]) || 'Abdullah Alshaif';
  const lastDate  = (head.match(/Last Updated:\s*\*\*([0-9-]+)\*\*/i)?.[1]) || (head.match(/Last Updated:\s*([0-9-]+)/i)?.[1]) || new Date().toISOString().slice(0,10);
  const versionEn = (head.match(/Version\s+([0-9.()A-Za-z -]+)/)?.[1]) || '0.1 (Vision)';

  const card = [
    `> **🗂️ المشروع | Project**`,
    `> منصة الوساطة الشرائية **${productAr}**`,
    `> ${productEn}`,
    `>`,
    `> **🧰 المكدس التقني | Tech Stack**`,
    `> 🔹 Flutter | فلاتر`,
    `> 🔹 Firebase | فايربيس (Firestore, Auth, Storage, Functions)`,
    `>`,
    `> **🏷️ الإصدار | Version**`,
    `> ${versionEn} — Owner: **${ownerEn}** — Last Updated: **${lastDate}**`,
    ``,
    `---`
  ].join('\n');

  // احذف أي بطاقة/جدول تعريفية قديمة أعلى الملف (blockquote/div/table) بشكل محافظ
  let newHead = head
    .replace(/^> .*?\n(?:>.*\n)*(\n|---|$)/m, '')            // blockquote card
    .replace(/^(<div[\s\S]*?<\/div>\s*)/m, '')               // div card
    .replace(/^(<table[\s\S]*?<\/table>\s*)/m, '')           // table card
    .replace(/^\s*---\s*\n/, '');                            // فاصل قديم

  newHead = newHead.replace(/^\s+$/gm, ''); // تنظيف فراغات أسطر

  return card + '\n' + newHead + '\n' + tail;
}

// العناوين: "## 1. ℹ️ مقدمة  | Introduction" مع ترقيم
function renumberHeadings(s) {
  const lines = s.split('\n');
  const counters = [0,0,0,0,0,0]; // حتى h6
  return lines.map(line => {
    const m = line.match(/^(#{2,6})\s*(?:\d+(?:\.\d+)*)?\.?\s*(.+?)\s*(?:\|\s*(.+))?\s*$/);
    if (!m) return line;
    const hashes = m[1];
    const level = hashes.length; // h2..h6
    // لا نرقم H1
    if (level < 2) return line;
    // صفّر الأدنى
    for (let i = level-1; i < counters.length; i++) counters[i]=0;
    counters[level-2]++;
    const idx = counters.slice(0, level-1).join('.') + (level>2?'.':'') + counters[level-2];
    // افصل AR | EN
    let body = m[2];
    let en = m[3];
    if (!en) {
      // حاول استنتاج EN كسطر التالي إذا كان مجرد ترجمة؟ (نتجاهله هنا لتفادي أخطاء)
    }
    // تأكد وجود " | "
    let titled = body.includes('|') ? body : `${body}  | ${en || ''}`.replace(/\s+\|\s+$/, ' | ');
    return `${hashes} ${idx}. ${titled}`.replace(/ \| $/, ''); // إزالة " | " الفارغ
  }).join('\n');
}

// فقرات/بنود ثنائية اللغة (سطر عربي يليه سطر إنجليزي): لف داخل div.ar / div.en
function wrapBilingualParagraphs(s) {
  const lines = s.split('\n');
  const out = [];
  for (let i=0; i<lines.length; i++) {
    const a = lines[i];
    const b = lines[i+1];
    const isAr = a && /[\u0600-\u06FF]/.test(a) && !a.trim().startsWith('>') && !a.trim().startsWith('#') && !a.trim().startsWith('- ') && !a.trim().startsWith('* ');
    const isEn = b && /[A-Za-z]/.test(b) && !b.trim().startsWith('>') && !b.trim().startsWith('#') && !b.trim().startsWith('- ') && !b.trim().startsWith('* ');
    if (isAr && isEn) {
      out.push(`<div class="ar">${a.trim()}</div>`);
      out.push(`<div class="en"><i>${b.trim()}</i></div>`);
      i++; // قفزنا سطرين
    } else {
      out.push(a);
    }
  }
  return out.join('\n');
}

// الجداول (Markdown → HTML .doc-table)
function convertMarkdownTablesToHtml(s) {
  // يلتقط كتل الجداول البسيطة (| hdr | hdr | …)
  return s.replace(
    /(^\|[^\n]+\|\s*\n\|[ :\-|]+\|\s*(\n(?:\|[^\n]+\|\s*\n)+))/gm,
    (block) => {
      const lines = block.trim().split('\n');
      const header = lines[0].split('|').slice(1,-1).map(h=>h.trim());
      const rows   = lines.slice(2).map(r => r.split('|').slice(1,-1).map(c=>c.trim()));

      const ths = header.map(h => {
        const [ar,en] = h.split('<br>');
        return `      <th><span class="ar">${(ar||'').trim()}</span><br><span class="en"><i>${(en||'').trim()}</i></span></th>`;
      }).join('\n');

      const tds = rows.map((cols, rIdx) => {
        const tdsOneRow = cols.map((c, cIdx) => {
          // أول عمود غالبًا Label — نخليه في الوسط
          const cls = (cIdx===0) ? ` class="center"` : '';
          const [ar,en] = c.split('<br>');
          return `      <td${cls}><div class="ar">${(ar||'').trim()}</div><div class="en"><i>${(en||'').trim()}</i></div></td>`;
        }).join('\n');
        return `    <tr>\n${tdsOneRow}\n    </tr>`;
      }).join('\n');

      return [
        `<table class="doc-table">`,
        `  <thead>`,
        `    <tr>`,
        ths,
        `    </tr>`,
        `  </thead>`,
        `  <tbody>`,
        tds,
        `  </tbody>`,
        `</table>`
      ].join('\n');
    }
  );
}

// HTML tables → تنظيف + class="doc-table" + لف عربي/إنجليزي
function normalizeHtmlTables(s) {
  // أزل style= من table/th/td
  s = s.replace(/<table\b([^>]*)>/g, (m,attr) => `<table class="doc-table">`);
  s = s.replace(/\sstyle="[^"]*"/g, '');
  // رؤوس: استبدل العربية<br>English إلى span.ar + span.en
  s = s.replace(/<th>([\s\S]*?)<\/th>/g, (m, inner) => {
    const parts = inner.split(/<br\s*\/?>/i);
    if (parts.length===2) {
      return `<th><span class="ar">${parts[0].trim()}</span><br><span class="en"><i>${parts[1].trim()}</i></span></th>`;
    }
    return m;
  });
  // خلايا: Arabic<br>English → div.ar + div.en
  s = s.replace(/<td([^>]*)>([\s\S]*?)<\/td>/g, (m, attrs, inner) => {
    const parts = inner.split(/<br\s*\/?>/i);
    if (parts.length===2) {
      return `<td${attrs}><div class="ar">${parts[0].trim()}</div><div class="en"><i>${parts[1].trim()}</i></div></td>`;
    }
    return `<td${attrs}>${inner}</td>`;
  });
  return s;
}

// Mermaid: استبدال <br> داخل التسميات بـ \n (عربي ثم إنجليزي)
function fixMermaidLabels(s) {
  // "نص<br>Text" أو ["نص<br>Text"]
  s = s.replace(/"([^"\n]*?)<br\s*\/?>([^"\n]*?)"/g, (_m, a, b) => `"${a.trim()}\\n${b.trim()}"`);
  s = s.replace(/\[([^\]\n]*?)<br\s*\/?>([^\]\n]*?)\]/g, (_m, a, b) => `[${a.trim()}\\n${b.trim()}]`);
  return s;
}

// إزالة تكرارات حدثت أثناء التحويل
function dedupeSimple(s) {
  return s.replace(/\n{3,}/g, '\n\n');
}

// ---------- Pipeline ----------
src = ensureUnixNL(src);

if (mode==='all' || mode==='card') {
  src = replaceBlockAtTopWithCard(src);
}
if (mode==='all' || mode==='headings') {
  src = renumberHeadings(src);
}
if (mode==='all' || mode==='paragraphs') {
  src = wrapBilingualParagraphs(src);
}
if (mode==='all' || mode==='tables') {
  src = convertMarkdownTablesToHtml(src);
  src = normalizeHtmlTables(src);
}
if (mode==='all' || mode==='mermaid') {
  src = fixMermaidLabels(src);
}

src = uniqBlankInsideBlockquotes(trimLines(dedupeSimple(src)));
fs.writeFileSync(file, src, 'utf8');
console.log(`✔ Updated: ${file}\n   Backup: ${bakPath}\n   Mode: ${mode}`);
