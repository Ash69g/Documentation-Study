# 🤝 تحليل أصحاب المصلحة | Stakeholder Analysis

> **🗂️ المشروع | Project**
>
> <div dir="rtl">منصة الوساطة الشرائية <b>CA Admin</b></div>
> <div dir="ltr"><em>CA Admin Shopping Mediation Platform</em></div>
>
> **🧰 المكدس التقني | Tech Stack**
> 🔹 Flutter | <span dir="rtl">فلاتر</span><br>
> 🔹 Firebase (Firestore, Auth, Storage, Functions) | <span dir="rtl">فايربيس (Firestore, Auth, Storage, Functions)</span>
>
> **🏷️ الإصدار | Version**
>
> <div dir="ltr"><b>0.1 (Vision)</b> — Owner: <b>Abdullah Alshaif</b> — Last Updated: <b>2025-09-29</b></div>

---

## 🎯 نظرة مركّزة | Focused Insight

- يقدم الملف تصورًا موحدًا لتوقعات أصحاب المصلحة ويوجه القرارات اليومية نحو أولوياتهم.  
  The document delivers a unified view of stakeholder expectations and steers day-to-day decisions toward their priorities.

## 🧭 قيمة تطبيقية | Applied Value

- يوضح المسار التشغيلي لتحديث بيانات الأطراف ويسهّل إعداد موجزات الإدارة والحوكمة.  
  It clarifies the operational path for updating stakeholder data and streamlines the preparation of management and governance briefs.

---

## 1. 🔍 نظرة عامة على التحليل | Analysis Overview

> 📖 **المنهجية | Methodology**
>
> <p dir="rtl">يشرح القسم منهجية تحديد الأطراف المؤثرة استنادًا إلى قوتهم واهتمامهم، وكيفية دمج النتائج في خارطة الطريق.</p>
> <p dir="ltr"><em>It explains the methodology for mapping influential parties by power and interest, and shows how findings feed the roadmap.</em></p>

---

> 🔄 **التحديث المستمر | Continuous Refresh**
>
> <p dir="rtl">يركز التحليل على التحديث المستمر باستخدام جلسات مراجعة ربع سنوية مع قادة الأعمال والفرق التقنية.</p>
> <p dir="ltr"><em>The analysis relies on continuous refresh through quarterly review sessions with business leaders and technical squads.</em></p>

---

## 1.1 🔗 مشهد التفاعل | Interaction Landscape

**📌 الهدف | Purpose**

<p dir="rtl">يرسم المخطط تتابع التفاعل بين الفرق الرئيسية ويوضح نقاط التسليم الحرجة لكل مسار.</p>
<p dir="ltr"><em>Purpose: The diagram traces interactions among key teams and exposes critical hand-off points for each stream.</em></p>

```mermaid
flowchart LR

  %% ========= Nodes & Lanes =========
  subgraph L1[🟦 العملاء والدعم\\nCustomers & Support]
    CUST["👥 العملاء\\nCustomers"]:::actor
    CS["🎧 دعم العملاء\\nCustomer Service"]:::stage
  end

  subgraph L2[🟨 العمليات واللوجستيات\\nOperations & Logistics]
    OPS["🏭 العمليات\\nOperations"]:::stage
    LOG["🚚 اللوجستيات\\nLogistics"]:::stage
    TECH["🛠️ الدعم التقني\\nTech Support"]:::stage
  end

  subgraph L3[🟩 المالية والقيادة\\nFinance & Leadership]
    FIN["💰 المالية\\nFinance"]:::stage
    LEAD["🏆 القيادة\\nLeadership"]:::stake
  end

  subgraph L4[🟪 الشركاء التجاريون\\nCommercial Partners]
    PART["🤝 الشركاء التجاريون\\nCommercial Partners"]:::stage
  end

  %% ========= Flows =========
  CUST -->|🆕 طلب جديد\\nPlace Order| CS
  CS -->|🧾 تسجيل الطلب\\nRecord Order| OPS

  OPS -->|📦 تحديث الشحنة\\nUpdate Shipment| LOG
  OPS -->|💳 مراجعة مالية\\nFinance Review| FIN
  OPS -. 🧰 بلاغ تقني\\nTech Ticket .-> TECH

  FIN -. 📈 تقارير الأداء\\nPerformance Reports .-> LEAD
  LEAD -. 🧭 توجيهات تجارية\\nCommercial Directives .-> PART
  PART -->|🎯 عروض محدّثة\\nUpdate Offers| OPS

  %% ========= Styles =========
  classDef actor fill:#e0f2fe,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,rx:14,ry:14;
  classDef stage fill:#f8fafc,stroke:#94a3b8,stroke-width:1.5px,color:#0f172a,rx:12,ry:12;
  classDef stake fill:#ede9fe,stroke:#7c3aed,stroke-width:1.5px,color:#3b0764,rx:14,ry:14;

  style L1 fill:#eff6ff,stroke:#3b82f6,stroke-width:1px,color:#1e3a8a
  style L2 fill:#fffbeb,stroke:#f59e0b,stroke-width:1px,color:#7c2d12
  style L3 fill:#ecfdf5,stroke:#10b981,stroke-width:1px,color:#064e3b
  style L4 fill:#f5f3ff,stroke:#8b5cf6,stroke-width:1px,color:#5b21b6

  %% خطوط المعلومات منقّطة ومميّزة
  linkStyle default stroke:#64748b,stroke-width:1.5px
  linkStyle 5,6,7 stroke:#7c3aed,stroke-dasharray:4 2,stroke-width:1.6px
```

- 🔄 يوضح انتقال الطلب من خدمة العملاء إلى العمليات مع تمييز العتبات الزمنية لكل خطوة.
  It clarifies how orders move from customer service to operations while flagging timing thresholds for every step.
- 🧮 يبرز دور المالية في ضبط المدخلات وتحويلها إلى مؤشرات تنفيذية للقيادة العليا.
  It highlights finance's role in converting inputs into executive indicators for leadership.
- 🛡️ يضمن وجود مسار تصعيد تقني لتقليل الأعطال وإغلاق البلاغات خلال مستوى الخدمة المتفق عليه.
  It ensures a technical escalation lane that reduces outages and closes tickets within the agreed SLA.
- 🤝 يربط الشركاء التجاريين بخط التدفقات لضمان تزامن العروض وتسعير المنتجات مع حالة العمليات.
  It connects commercial partners to the flow so promotions and pricing stay synchronized with operational status.

## 1.2 🧭 تصنيف أصحاب المصلحة | Stakeholder Classification

**📌 الهدف | Purpose**

<p dir="rtl">يجمع التصنيف أصحاب المصلحة في مجموعات واضحة تساعد على مواءمة قنوات الاتصال ومسارات الاعتماد.</p>
<p dir="ltr"><em>Purpose: The classification groups stakeholders clearly, enabling aligned communication channels and approval paths.</em></p>

```mermaid
%%{init: { "theme":"base", "themeVariables":{
  "fontFamily":"Tahoma, Arial, 'Noto Sans Arabic', sans-serif",
  "fontSize":"15px"
}}}%%
mindmap
  root((🤝 أصحاب المصلحة\\nStakeholders))

    🏠 داخليون\\nInternal
      🎧 دعم العملاء\\nCustomer Service
      🏭 العمليات\\nOperations
      💰 المالية\\nFinance
      🛠️ الدعم التقني\\nTech Support

    🌐 خارجيون\\nExternal
      🤝 الشركاء التجاريون\\nCommercial Partners
      🚚 مقدمو الخدمات اللوجستية\\nLogistics Providers
      🛒 العملاء الأفراد\\nRetail Customers

    🛡️ رقابيّون\\nOversight
      🏆 القيادة التنفيذية\\nExecutive Leadership
      📋 المدققون الخارجيون\\nExternal Auditors
      💼 المستثمرون\\nInvestors
```

- 📌 يسهل المخطط تحديد المسؤوليات المشتركة وتوزيع الموارد بما يتناسب مع قوة كل فئة.
  The map streamlines how shared responsibilities are identified and resources are allocated to match each group's influence.
- 🧱 يوفر نظرة بصرية تساعد الفرق الجديدة على فهم البيئة التنظيمية خلال جلسات الإعداد الأولى.
  It offers a visual snapshot that assists new teams in grasping the organizational landscape during onboarding.
- 📈 يدعم قرارات التوسع عبر ربط المستويات الرقابية بالشرائح التشغيلية لضمان الحوكمة المستمرة.
  It supports expansion decisions by linking oversight bodies to operational tiers, securing ongoing governance.

---

## 2. 📚 سجل أصحاب المصلحة | Stakeholder Catalogue

**📌 الهدف | Purpose**

<p dir="rtl">يقدم الجدول توصيفًا موجزًا للأدوار والتوقعات لضمان توحيد الرسائل والنتائج المطلوبة.</p>
<p dir="ltr"><em>Purpose: The table delivers concise role and expectation definitions to unify messaging and desired outcomes.</em></p>

<table class="doc-table">
  <thead>
    <tr>
      <th><span dir="rtl">📌 الفئة</span><br><span dir="ltr"><i>Category</i></span></th>
      <th><span dir="rtl">🎭 الدور الرئيسي</span><br><span dir="ltr"><i>Primary Role</i></span></th>
      <th><span dir="rtl">🎯 التوقع المحوري</span><br><span dir="ltr"><i>Key Expectation</i></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><div dir="rtl"><strong>👥 العملاء</strong></div><div dir="ltr"><em>Customers</em></div></td>
      <td><div dir="rtl">تقديم الطلبات ومتابعة حالتها عبر القنوات الرقمية والهاتفية</div><div dir="ltr"><em>Submit orders and track their status through digital and phone channels</em></div></td>
      <td><div dir="rtl">رحلة واضحة ثنائية اللغة مع تسعير شفاف وإشعارات آنية بكل تغيير</div><div dir="ltr"><em>A clear bilingual journey with transparent pricing and real-time change alerts</em></div></td>
    </tr>
    <tr>
      <td><div dir="rtl"><strong>🎧 فريق خدمة العملاء</strong></div><div dir="ltr"><em>Customer Service Team</em></div></td>
      <td><div dir="rtl">التحقق من بيانات الطلبات والرد على الاستفسارات وإدارة شكاوى المستخدمين</div><div dir="ltr"><em>Validate order data, handle questions, and manage customer complaints</em></div></td>
      <td><div dir="rtl">واجهة موحدة وسجلات تفاعل قابلة للبحث مع قوالب رد جاهزة</div><div dir="ltr"><em>A unified interface and searchable interaction history with ready-to-use response templates</em></div></td>
    </tr>
    <tr>
      <td><div dir="rtl"><strong>🏭 فريق العمليات</strong></div><div dir="ltr"><em>Operations Team</em></div></td>
      <td><div dir="rtl">تنسيق المشتريات وإدارة المخزون والمتابعة مع الشحن والموردين</div><div dir="ltr"><em>Coordinate procurement, manage inventory, and liaise with shipping and suppliers</em></div></td>
      <td><div dir="rtl">لوحة تحكم تنبؤية تقلل العمل اليدوي وتنبه مبكرًا لأي تأخير أو نقص</div><div dir="ltr"><em>A predictive dashboard that reduces manual steps and raises early alerts for delays or shortages</em></div></td>
    </tr>
    <tr>
      <td><div dir="rtl"><strong>💰 فريق المالية</strong></div><div dir="ltr"><em>Finance Team</em></div></td>
      <td><div dir="rtl">مطابقة المدفوعات، إدارة الأرصدة، وإصدار التقارير الدورية</div><div dir="ltr"><em>Reconcile payments, manage balances, and produce periodic governance reports</em></div></td>
      <td><div dir="rtl">بيانات دقيقة متعددة العملات وجاهزية فورية للتدقيق</div><div dir="ltr"><em>Accurate multi-currency data with instant audit readiness</em></div></td>
    </tr>
    <tr>
      <td><div dir="rtl"><strong>🏆 القيادة التنفيذية</strong></div><div dir="ltr"><em>Executive Leadership</em></div></td>
      <td><div dir="rtl">وضع الأولويات، اعتماد الميزانيات، ومراقبة الأداء الاستراتيجي</div><div dir="ltr"><em>Set priorities, approve budgets, and monitor strategic performance</em></div></td>
      <td><div dir="rtl">مؤشرات أداء موجزة ونماذج مخاطر شفافة لدعم قرارات النمو</div><div dir="ltr"><em>Concise KPIs and transparent risk models to back growth decisions</em></div></td>
    </tr>
    <tr>
      <td><div dir="rtl"><strong>🛠️ الدعم التقني</strong></div><div dir="ltr"><em>Tech Support</em></div></td>
      <td><div dir="rtl">إدارة الصلاحيات، مراقبة سلامة النظام، ومعالجة الأعطال</div><div dir="ltr"><em>Manage permissions, monitor system health, and resolve technical incidents</em></div></td>
      <td><div dir="rtl">سجلات أخطاء دقيقة وأدوات مراقبة لحظية مع اختبارات أمن متكررة</div><div dir="ltr"><em>Precise error logs, real-time monitoring tools, and recurring security tests</em></div></td>
    </tr>
    <tr>
      <td><div dir="rtl"><strong>🤝 الشركاء التجاريون</strong></div><div dir="ltr"><em>Commercial Partners</em></div></td>
      <td><div dir="rtl">تحديث الأسعار وتوفير التوافر وتنسيق الحملات المشتركة</div><div dir="ltr"><em>Update pricing, secure availability, and coordinate joint campaigns</em></div></td>
      <td><div dir="rtl">تكاملات API مستقرة وتقارير عمولات موثوقة مع رؤية زمنية للطلبات</div><div dir="ltr"><em>Stable API integrations, reliable commission reports, and timely order visibility</em></div></td>
    </tr>
    <tr>
      <td><div dir="rtl"><strong>🚚 مقدمو الخدمات اللوجستية</strong></div><div dir="ltr"><em>Logistics Providers</em></div></td>
      <td><div dir="rtl">استلام الشحنات ونقلها وتوثيق التسليم ضمن الإطارات الزمنية</div><div dir="ltr"><em>Receive, transport, and confirm deliveries within agreed timeframes</em></div></td>
      <td><div dir="rtl">جداول دقيقة، إثباتات تسليم رقمية، ونظام لإدارة الاستثناءات</div><div dir="ltr"><em>Accurate schedules, digital proof of delivery, and easy exception management</em></div></td>
    </tr>
    <tr>
      <td><div dir="rtl"><strong>📋 المدققون الخارجيون</strong></div><div dir="ltr"><em>External Auditors</em></div></td>
      <td><div dir="rtl">التحقق من الامتثال المالي والتشغيلي باستخدام سجلات موثوقة</div><div dir="ltr"><em>Validate financial and operational compliance through authoritative records</em></div></td>
      <td><div dir="rtl">وصول مضبوط للبيانات وسجلات كاملة لكل معاملة وتقارير مراجعة معتمدة</div><div dir="ltr"><em>Controlled data access, full per-transaction logs, and certified audit reports</em></div></td>
    </tr>
    <tr>
      <td><div dir="rtl"><strong>💼 المستثمرون</strong></div><div dir="ltr"><em>Investors</em></div></td>
      <td><div dir="rtl">متابعة العوائد، فهم خارطة الطريق، ومراقبة مستويات المخاطر</div><div dir="ltr"><em>Track returns, understand the roadmap, and observe risk levels</em></div></td>
      <td><div dir="rtl">تقارير مختصرة وتوقعات نمو مدعومة ببيانات موثوقة</div><div dir="ltr"><em>Concise governance reports and growth forecasts backed by trustworthy data</em></div></td>
    </tr>
  </tbody>
</table>

---

## 3. 💡 الاحتياجات الجوهرية | Core Needs

**📌 الهدف | Purpose**

<p dir="rtl">تحدد النقاط التالية المتطلبات الأساسية التي تحافظ على نجاح المنصة لجميع الأطراف.</p>
<p dir="ltr"><em>Purpose: The following points capture the essential requirements that keep the platform successful for every group.</em></p>

- 🧭 وضوح رحلة العميل من الطلب إلى التسليم يقلل التصعيدات ويعزز الثقة.
  Customer journey clarity from order to delivery lowers escalations and boosts trust.
- ⚙️ كفاءة العمليات الداخلية تعتمد على أدوار وصلاحيات متسقة تمنع الازدواجية.
  Internal efficiency depends on consistent roles and permissions that prevent duplication.
- 🧾 صرامة السجلات المالية توحد مصادر البيانات وتوفر تتبعًا كاملاً لكل معاملة.
  Financial record rigor unifies data sources and provides complete traceability for each transaction.
- 📊 رؤى قيادية استراتيجية توفر مؤشرات أداء وتنبؤات توسّع موثوقة.
  Strategic leadership insight supplies dependable KPIs and expansion forecasts.

---

## 4. 🤝 استراتيجيات التفاعل | Engagement Strategies

**📌 الهدف | Purpose**

<p dir="rtl">توفر النقاط أدناه أساليب ثابتة للتواصل والمتابعة تحفظ الشراكة الفعالة.</p>
<p dir="ltr"><em>Purpose: The items below outline consistent communication and follow-up practices that secure effective partnerships.</em></p>

- 📡 اختيار القناة المناسبة لكل فئة بين لوحات البيانات والبريد والاجتماعات المشتركة.
  Assign the optimal channel to each group, balancing dashboards, email, and joint workshops.
- 🗓️ نشر تقارير تشغيل أسبوعية ومراجعات استراتيجية شهرية دون انقطاع.
  Publish weekly operational reports and monthly strategic reviews without interruption.
- ⏱️ تحديد حدود زمنية واضحة للردود الداخلية والخارجية مع مسار تصعيد موثق.
  Define explicit turnaround thresholds for internal and external responses with a documented escalation route.
- 🧑‍🤝‍🧑 عقد جلسات تطوير ربع سنوية مع الشركاء والموردين لبناء الثقة واكتشاف فرص التحسين.
  Hold quarterly improvement sessions with partners and providers to build trust and surface enhancement opportunities.

---

## 5. 🔄 دورة التغذية الراجعة | Feedback Cycle

**📌 الهدف | Purpose**

<p dir="rtl">يبين المخطط كيفية جمع الملاحظات وتحويلها إلى تحسينات مستمرة قابلة للقياس.</p>
<p dir="ltr"><em>Purpose: The diagram shows how feedback is captured and turned into measurable continuous improvements.</em></p>

```mermaid
flowchart TD
  %% ====== Nodes ======
  TRG["🎯 حدث العميل\\nCustomer Event"]:::start
  CAP["📝 التقاط الرأي\\nCapture Feedback"]:::stage
  TRI["🧮 فرز الأولويات\\nTriage"]:::stage
  ACT["🛠️ خطة الإجراء\\nAction Plan"]:::action
  NTF["📣 إبلاغ أصحاب المصلحة\\nCommunicate"]:::stage
  MES["📊 قياس الأثر\\nMeasure Impact"]:::stage
  ARC["📚 الأرشفة والتعلم\\nArchive & Learn"]:::terminal
  LEAD["🏆 تقارير القيادة\\nLeadership Reports"]:::stake

  %% ====== Flows ======
  TRG --> CAP --> TRI --> ACT --> NTF --> MES --> ARC --> TRG
  MES -.-> LEAD

  %% ====== Styles ======
  classDef start fill:#e0f2fe,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,rx:14,ry:14;
  classDef stage fill:#f8fafc,stroke:#94a3b8,stroke-width:1.5px,color:#0f172a,rx:12,ry:12;
  classDef action fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#064e3b,rx:12,ry:12;
  classDef terminal fill:#fef9c3,stroke:#eab308,stroke-width:1.5px,color:#713f12,rx:12,ry:12;
  classDef stake fill:#ede9fe,stroke:#7c3aed,stroke-width:1.5px,color:#3b0764,rx:12,ry:12;

  linkStyle default stroke:#64748b,stroke-width:1.5px
  %% مثال لتلوين روابط معيّنة (اختياري): linkStyle 7 stroke:#7c3aed,stroke-dasharray:4 2,stroke-width:1.5px
```

- 🧾 تحويل كل ملاحظة إلى تذكرة محددة المسؤول والموعد النهائي يحافظ على المساءلة.
  Converting every comment into a ticket with an owner and due date preserves accountability.
- 📞 ربط القنوات الأمامية بفريق الدعم يمنع فقدان الرسائل ويضمن المتابعة الكاملة.
  Linking front-line channels to the support team prevents message loss and ensures full follow-through.
- 🧠 أرشفة النتائج بشكل دوري توسع قاعدة المعرفة وتدعم التدريب المتكرر.
  Periodic archiving expands the knowledge base and supports recurring enablement.

---

## 6. 🗂️ مصفوفة المسؤوليات (RACI) | Responsibility Matrix (RACI)

**📌 الهدف | Purpose**

<p dir="rtl">يوزع الجدول أدوار RACI للأنشطة المحورية حتى تبقى الخطوط الوظيفية واضحة وفعّالة.</p>
<p dir="ltr"><em>Purpose: The table assigns RACI roles to critical activities, keeping functional boundaries clear and effective.</em></p>

<table class="doc-table">
  <thead>
    <tr>
      <th><span dir="rtl">📌 النشاط</span><br><span dir="ltr"><i>Activity</i></span></th>
      <th><span dir="rtl">👷 المسؤول</span><br><span dir="ltr"><i>Responsible (R)</i></span></th>
      <th><span dir="rtl">🧑‍💼 المُحاسَب</span><br><span dir="ltr"><i>Accountable (A)</i></span></th>
      <th><span dir="rtl">👥 المستشارون</span><br><span dir="ltr"><i>Consulted (C)</i></span></th>
      <th><span dir="rtl">📢 الجهات المُخطَرة</span><br><span dir="ltr"><i>Informed (I)</i></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><div dir="rtl"><strong>📨 استقبال الطلبات الجديدة</strong></div><div dir="ltr"><em>New Order Intake</em></div></td>
      <td><div dir="rtl">🎧 دعم العملاء</div><div dir="ltr"><em>Customer Service</em></div></td>
      <td><div dir="rtl">🏭 العمليات</div><div dir="ltr"><em>Operations</em></div></td>
      <td><div dir="rtl">🛠️ الدعم التقني، 💰 المالية</div><div dir="ltr"><em>Tech Support, Finance</em></div></td>
      <td><div dir="rtl">🏆 القيادة</div><div dir="ltr"><em>Leadership</em></div></td>
    </tr>
    <tr>
      <td><div dir="rtl"><strong>🚚 تحديث حالة الشحن</strong></div><div dir="ltr"><em>Update Shipment Status</em></div></td>
      <td><div dir="rtl">🏭 العمليات</div><div dir="ltr"><em>Operations</em></div></td>
      <td><div dir="rtl">💰 المالية</div><div dir="ltr"><em>Finance</em></div></td>
      <td><div dir="rtl">🚚 مقدمو الخدمات اللوجستية</div><div dir="ltr"><em>Logistics Providers</em></div></td>
      <td><div dir="rtl">🎧 دعم العملاء</div><div dir="ltr"><em>Customer Service</em></div></td>
    </tr>
    <tr>
      <td><div dir="rtl"><strong>💳 مطابقة الدفعات</strong></div><div dir="ltr"><em>Payment Reconciliation</em></div></td>
      <td><div dir="rtl">💰 المالية</div><div dir="ltr"><em>Finance</em></div></td>
      <td><div dir="rtl">🏆 القيادة</div><div dir="ltr"><em>Leadership</em></div></td>
      <td><div dir="rtl">🏭 العمليات</div><div dir="ltr"><em>Operations</em></div></td>
      <td><div dir="rtl">🤝 الشركاء، 📋 المدققون</div><div dir="ltr"><em>Partners, Auditors</em></div></td>
    </tr>
    <tr>
      <td><div dir="rtl"><strong>🚀 إطلاق ميزة جديدة</strong></div><div dir="ltr"><em>Launch New Feature</em></div></td>
      <td><div dir="rtl">🛠️ الدعم التقني</div><div dir="ltr"><em>Tech Support</em></div></td>
      <td><div dir="rtl">🏆 القيادة</div><div dir="ltr"><em>Leadership</em></div></td>
      <td><div dir="rtl">🎧 خدمة العملاء، 💰 المالية</div><div dir="ltr"><em>Customer Service, Finance</em></div></td>
      <td><div dir="rtl">📢 جميع أصحاب المصلحة المتأثرين</div><div dir="ltr"><em>All impacted stakeholders</em></div></td>
    </tr>
  </tbody>
</table>

---

## 7. 📈 مؤشرات المتابعة | Monitoring Indicators

**📌 الهدف | Purpose**

<p dir="rtl">تساعد المؤشرات على قياس تأثير إدارة أصحاب المصلحة وتوجيه التحسين المستمر.</p>
<p dir="ltr"><em>The indicators measure the impact of stakeholder management and guide continuous improvement.</em></p>

**⏱️ معدل الاستجابة للشكاوى | Complaint Response Rate**

- يختبر الالتزام بمستويات الخدمة ويسلط الضوء على الاختناقات.  
  _Tests SLA compliance and exposes emerging bottlenecks._

**💸 زمن إغلاق الدورة المالية | Financial Cycle Closure Time**

- يتتبع المدة من المعاملة حتى التسوية لتوجيه قرارات الاستثمار والتدقيق.  
  _Tracks the span from transaction to reconciliation to guide investment and audit decisions._

**🤝 مؤشر رضا الشركاء | Partner Satisfaction Index**

- يقيس جودة التكامل والدعم ويحمي الحصة السوقية مع توسيع شبكة الموردين.  
  _Gauges integration quality and support, protecting market share while expanding the supplier network._
