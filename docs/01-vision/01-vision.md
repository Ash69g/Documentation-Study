# 📝 وثيقة الرؤية | Vision Document

> <b>🗂️ المشروع | Project</b>  
> منصة الوساطة الشرائية CA Admin  
> CA Admin Shopping Mediation Platform
>
> <b>🧰 المكدس التقني | Tech Stack</b>  
> 🔹 Flutter | فلاتر  
> 🔹 Firebase (Firestore, Auth, Storage, Functions) | فايربيس
>
> <b>🏷️ الإصدار | Version</b>  
> 0.1 (رؤية | Vision) — Owner: عبدالله الشايف | Abdullah Alshaif — Last Updated: 2025-09-20

<div class="ar">ℹ️ <b>النظرة العامة:</b> تقدم الوثيقة رؤية شاملة للمنصة، أهدافها، وأساسها التقني لضمان وضوح القيمة لجميع الأطراف.</div>
<div class="en">ℹ️ <b>Overview:</b> The document provides a comprehensive view of the platform, its goals, and technology foundation to clarify value for every stakeholder.</div>

<table class="doc-table">
  <thead>
    <tr>
      <th>🏷️ <span class="ar"><b>العنصر</b></span> | <span class="en"><b>element</b></span></th>
      <th>ℹ️ <span class="ar"><b>التفاصيل</b></span> | <span class="en"><b>details</b></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
  <div class="ar">🏢 <b>التسمية:</b> المؤسسة</div>
  <div class="en">🏢 <b>Label:</b> <i>Institution</i></div>
      </td>
      <td>
  <div class="ar">ℹ️ <b>القيمة:</b> الإدارة العامة CA Admin DmG Headquarters</div>
  <div class="en">ℹ️ <b>Value:</b> <i>CA Admin DmG Headquarters</i></div>
      </td>
    </tr>
    <tr>
      <td>
  <div class="ar">🧭 <b>التسمية:</b> نطاق الحل</div>
  <div class="en">🧭 <b>Label:</b> <i>Solution Scope</i></div>
      </td>
      <td>
  <div class="ar">🌐 <b>القيمة:</b> منصة وساطة للتسوق عبر الحدود تخدم اليمن والسعودية مع ربط رقمي متكامل</div>
  <div class="en">🌐 <b>Value:</b> <i>A cross-border shopping mediation platform serving Yemen and Saudi Arabia with integrated digital linkages</i></div>
      </td>
    </tr>
    <tr>
      <td>
  <div class="ar">🎯 <b>التسمية:</b> الرؤية الإدارية</div>
  <div class="en">🎯 <b>Label:</b> <i>Executive Vision</i></div>
      </td>
      <td>
  <div class="ar">⚡ <b>القيمة:</b> تسريع الطلبات، الشحن، والمدفوعات عبر مسار رقمي واحد وشفاف</div>
  <div class="en">⚡ <b>Value:</b> <i>Accelerate orders, shipping, and payments through a single transparent digital lane</i></div>
      </td>
    </tr>
    <tr>
      <td>
  <div class="ar">👥 <b>التسمية:</b> الجمهور الأساسي</div>
  <div class="en">👥 <b>Label:</b> <i>Primary Audience</i></div>
      </td>
      <td>
  <div class="ar">🤝 <b>القيمة:</b> المتسوقون، العمليات، المالية، الشركاء، القيادة التنفيذية</div>
  <div class="en">🤝 <b>Value:</b> <i>Shoppers, operations teams, finance, partners, executive leadership</i></div>
      </td>
    </tr>
  </tbody>
</table>

---

## 1. ℹ️ مقدمة | Introduction

### 1.1 👁️ نظرة بصرية عامة | Visual Overview

<div class="ar">ℹ️ <b>الوصف:</b> يوضح المخطط رحلة الطلب من إنشاء العميل حتى تسليم الشحنة مع إبراز نقاط التفاعل المالية والتحليلية.</div>
<div class="en">ℹ️ <b>Description:</b> The diagram shows the order journey from customer initiation to delivery while flagging finance and analytics touchpoints.</div>

```mermaid
flowchart TD
  %% ========== Nodes ==========
  C((👤 العميل<br>Customer)):::start

  subgraph S1[🟦 الاستلام والمعالجة<br>Intake & Processing]
    IN["📝 استلام الطلب<br>Order Intake"]:::stage
    GP["🌐 المشتريات العالمية<br>Global Procurement"]:::stage
  end

  subgraph S2[🟨 الشحن والمراكز<br>Shipping & Hubs]
    KSA["🇸🇦 مركز المملكة العربية السعودية<br>KSA Hub"]:::hub
    YEM["🇾🇪 مركز اليمن<br>Yemen Hub"]:::hub
    LMD["🚚 التسليم النهائي<br>Last Mile Delivery"]:::stage
    DC["✅ تأكيد الاستلام<br>Delivery Confirmation"]:::milestone
  end

  subgraph S3[🟩 المالية والتحليلات<br>Finance & Insights]
    FIN["💰 عمليات المالية<br>Finance Ops"]:::stage
    ANA["📊 تحليلات الأعمال<br>Analytics"]:::stage
    SR["🧭 تقارير استراتيجية<br>Strategic Reports"]:::milestone
    LDR["🏛️ القيادة التنفيذية<br>Leadership"]:::stake
    SUP["🎧 دعم العملاء<br>Customer Support"]:::stage
  end

  %% ========== Flows ==========
  C -->|"🆕 طلب جديد<br>New Order"| IN
  IN -->|"🛒 شراء عالمي<br>Global Procurement"| GP
  GP -->|"🛳️ شحن إلى المملكة<br>Ship to KSA"| KSA
  KSA -->|"📦 تحويل إلى اليمن<br>Forward to Yemen"| YEM
  YEM -->|"🚚 التسليم الأخير<br>Last Mile"| LMD
  LMD -->|"✅ تأكيد الاستلام<br>Delivery Confirmation"| DC
  DC -->|"🔔 إشعار للعميل<br>Notify"| C

  IN -. "💳 إدخال مالي<br>Finance Entry" .-> FIN
  FIN -. "📈 مشاركة الرؤى<br>Share Insights" .-> ANA
  ANA -. "📝 تقارير<br>Reports" .-> SR
  SR -. "🗳️ قرار وتنفيذ<br>Decision" .-> LDR
  FIN -. "⚠️ تصعيد الحالات<br>Case Escalation" .-> SUP

  %% ========== Styles ==========
  classDef start fill:#e0f2fe,stroke:#0284c7,stroke-width:2px,color:#0c4a6e,rx:16,ry:16;
  classDef stage fill:#f8fafc,stroke:#94a3b8,stroke-width:1.5px,color:#0f172a,rx:12,ry:12;
  classDef hub fill:#fff7ed,stroke:#f59e0b,stroke-width:1.8px,color:#7c2d12,rx:12,ry:12;
  classDef milestone fill:#ecfdf5,stroke:#10b981,stroke-width:1.8px,color:#064e3b,rx:14,ry:14;
  classDef stake fill:#ede9fe,stroke:#7c3aed,stroke-width:1.8px,color:#3b0764,rx:14,ry:14;

  %% تلوين عناوين الـ subgraph
  style S1 fill:#eff6ff,stroke:#3b82f6,stroke-width:1px,color:#1e3a8a
  style S2 fill:#fffbeb,stroke:#f59e0b,stroke-width:1px,color:#7c2d12
  style S3 fill:#ecfdf5,stroke:#10b981,stroke-width:1px,color:#064e3b

  %% تطبيق الأنماط على العقد
  class C start;
  class IN,GP,LMD,FIN,ANA,SUP stage;
  class KSA,YEM hub;
  class DC,SR milestone;
  class LDR stake;

  %% ========== Link Styling ==========
  linkStyle default stroke:#64748b,stroke-width:1.5px
  %% الروابط التحليلية منقطة ولون مختلف
  linkStyle 7,8,9,10,11 stroke:#7c3aed,stroke-dasharray:4 2,stroke-width:1.5px

  %% أسطورة صغيرة (اختيارية)
  %% note right of SR: الخط المنقط = مسار معلوماتي (تحليلات/قرارات)\nDotted links indicate informational flows
```

### 1.2 🧭 رحلة القيمة المبسطة | Simplified Value Journey

<div class="ar">ℹ️ <b>الوصف:</b> يبيّن المخطط دور كل طرف في كل مرحلة لضمان وضوح المسؤوليات وسرعة التسليم.</div>
<div class="en">ℹ️ <b>Description:</b> The chart clarifies how each party contributes at every stage to keep responsibilities clear and delivery timely.</div>

```mermaid
%%{init: {
  "theme": "base",
  "themeVariables": {
    "primaryColor":   "#e0f2fe",
    "primaryTextColor":"#0c4a6e",
    "primaryBorderColor":"#0284c7",

    "secondaryColor": "#fff7ed",
    "secondaryTextColor":"#7c2d12",
    "secondaryBorderColor":"#d97706",

    "tertiaryColor":  "#ecfdf5",
    "tertiaryTextColor":"#064e3b",
    "tertiaryBorderColor":"#10b981",

    "lineColor": "#64748b",
    "textColor":"#0f172a",
    "fontSize":"15px",
    "fontFamily":"Tahoma, Arial, 'Noto Sans Arabic', sans-serif"
  }
}}%%
journey
  title 🌟 رحلة القيمة لمنصة CA Admin / CA Admin Value Journey

  section 👥 العملاء / Customers
    🆕 طلب جديد / New Order: 5: 👤 العميل / Customer
    📊 تتبع الحالة / Track Status: 4: 👤 العميل / Customer
    💳 سداد الفاتورة / Pay Invoice: 4: 👤 العميل / Customer

  section 🛠️ العمليات / Operations
  ✅ التحقق من الطلب / Validate Order: 5: 🧑 المشغل / Operator
  🚚 تنسيق الشحن / Coordinate Shipment: 4: 🧑 المشغل / Operator
  🔄 تحديث الحالة / Update Status: 4: 🧑 المشغل / Operator

  section 💰 المالية / Finance
    💵 تسوية المدفوعات / Reconcile Payments: 5: 💼 المالية / Finance
    📑 نشر التقارير / Publish Reports: 3: 💼 المالية / Finance
```

### 1.3 🏁 سياق المنصة | Platform Context

<div class="ar">ℹ️ <b>الوصف:</b> يلخص هذا الجزء رسالة المنصة، الشرائح المستفيدة، والمبادئ التصميمية لضمان الاتساق.</div>
<div class="en">ℹ️ <b>Description:</b> This section outlines the platform mission, beneficiary segments, and design principles to keep the experience consistent.</div>

- <div class="ar"><b>🎯 المهمة الأساسية:</b> تقديم مركز عمليات موحد لإدارة الطلبات، الشحن، والمدفوعات عبر الحدود بسهولة وشفافية.</div>
  <div class="en"><b>🎯 Core Mission:</b> Deliver a unified operations hub that manages cross-border orders, shipping, and payments with ease and transparency.</div>
- <div class="ar"><b>🧭 وصف المنصة:</b> حل متكامل يربط إنشاء الطلب بوثائق الشحن والسجلات المالية دون ازدواجية بيانات.</div>
  <div class="en"><b>🧭 Platform Definition:</b> An integrated solution linking order creation with shipping documents and financial records without data duplication.</div>
- <div class="ar"><b>🛠️ الوظيفة الرئيسية:</b> تنسيق تدفق العمل من الاستلام حتى الإغلاق مع أدوات رقابة وتقارير وأتمتة للمهام الحرجة.</div>
  <div class="en"><b>🛠️ Primary Function:</b> Orchestrate workflow from intake to closure with controls, reporting, and automation for critical tasks.</div>
- <div class="ar"><b>🏆 المنفعة المتوقعة:</b> خفض العمل اليدوي ورفع رضا العملاء عبر مصدر موحد للحقيقة وإشعارات فورية.</div>
  <div class="en"><b>🏆 Expected Benefit:</b> Reduce manual effort and raise customer satisfaction through a single source of truth and instant notifications.</div>
- <div class="ar"><b>👥 شرائح الخدمة:</b> المتسوقون، خدمة العملاء، مشغلو العمليات، فرق المالية، القيادة التنفيذية.</div>
  <div class="en"><b>👥 Target Segments:</b> Shoppers, customer service teams, operations operators, finance teams, executive leadership.</div>
- <div class="ar"><b>✨ مبدأ التجربة:</b> كل رحلة يجب أن تكون قابلة للتتبع، ثنائية اللغة، وقادرة على العمل دون اتصال لضمان التبني.</div>
  <div class="en"><b>✨ Experience Principle:</b> Every journey must be traceable, bilingual, and offline-ready to ensure adoption.</div>

---

## 2. 🚀 لماذا الآن | Why Now

- <div class="ar"><b>📈 تسارع التجارة العابرة للحدود:</b> تنمو احتياجات الشراء الدولي في اليمن بنسبة 35٪ سنويًا رغم تحديات البنية التحتية.</div>
  <div class="en"><b>📈 Cross-border Commerce Acceleration:</b> International shopping needs in Yemen grow by 35% annually despite infrastructure hurdles.</div>
  - <div class="ar"><b>🧩 الفائدة:</b> يبرر الاستثمار الفوري في منصة قابلة للتوسع تستوعب النمو وتقدم تجربة موحدة.</div>
    <div class="en"><b>🧩 Benefit:</b> Justifies immediate investment in a scalable platform that absorbs growth and keeps the experience unified.</div>
- <div class="ar"><b>🗂️ تشتت العمليات اليدوية:</b> تتكرر الطلبات في جداول ومحادثات متفرقة مما يهدر الوقت ويصعّب التدقيق.</div>
  <div class="en"><b>🗂️ Manual Fragmentation:</b> Orders repeat across scattered sheets and chats, wasting time and complicating audits.</div>
  - <div class="ar"><b>🧩 الفائدة:</b> يؤكد ضرورة الأتمتة المركزية لتقليل الأخطاء وتسريع المتابعة التشغيلية.</div>
    <div class="en"><b>🧩 Benefit:</b> Underlines the need for centralized automation to cut errors and speed operational follow-up.</div>
- <div class="ar"><b>🛡️ توقعات الثقة والامتثال:</b> يتطلب العملاء والشركاء إيصالات رقمية متوافقة مع اللوائح السعودية واليمنية منذ البداية.</div>
  <div class="en"><b>🛡️ Trust & Compliance Expectations:</b> Customers and partners demand digital receipts aligned with Saudi and Yemeni regulations from day one.</div>
  - <div class="ar"><b>🧩 الفائدة:</b> يدفع لتجهيز ضوابط الحوكمة المبكرة لضمان الامتثال وتقوية سمعة العلامة.</div>
    <div class="en"><b>🧩 Benefit:</b> Drives early governance controls to ensure compliance and reinforce brand reputation.</div>

---

## 3. 🧩 التحديات المحورية | Core Challenges

```mermaid
%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontFamily": "Tahoma, Arial, 'Noto Sans Arabic', sans-serif",
    "fontSize": "15px",
    "primaryColor": "#fef2f2",
    "primaryBorderColor": "#ef4444",
    "primaryTextColor": "#991b1b",
    "lineColor": "#64748b"
  }
}}%%

flowchart LR
  Legacy["📂 سجلات مجزأة / Fragmented Records"]:::issue --> Errors["❌ أخطاء بيانات / Data Errors"]:::critical
  Errors --> Delays["⏳ تأخيرات الشحن / Shipping Delays"]:::result
  Delays --> Claims["📢 شكاوى العملاء / Customer Claims"]:::impact

  Finance["💰 مالية غير مسوية / Unreconciled Finance"]:::issue --> Delays
  Policies["📜 سياسات مفقودة / Missing Policies"]:::issue --> Errors
  Skills["🎓 مهارات محدودة / Limited Training"]:::issue --> Errors

  classDef issue fill:#fef9c3,stroke:#eab308,stroke-width:1.5px,color:#713f12;
  classDef critical fill:#fee2e2,stroke:#ef4444,stroke-width:2px,color:#991b1b;
  classDef result fill:#dbeafe,stroke:#2563eb,stroke-width:1.5px,color:#1e3a8a;
  classDef impact fill:#dcfce7,stroke:#16a34a,stroke-width:1.5px,color:#065f46;
```

- <div class="ar"><b>🔍 عمى تشغيلي:</b> لا يمكن ربط حالة الشحنة بالطلب أو العميل من خلال مصدر واحد مما يؤخر القرارات.</div>
  <div class="en"><b>🔍 Operational Blind Spots:</b> Shipment status cannot be tied to an order or customer within a single source, delaying decisions.</div>
  - <div class="ar"><b>🧩 الفائدة:</b> يحفز بناء لوحة متابعة موحدة ودمج الحالة عبر الأنظمة.</div>
    <div class="en"><b>🧩 Benefit:</b> Encourages building a unified monitoring dashboard and integrating status across systems.</div>
- <div class="ar"><b>💸 اختلال السجلات المالية:</b> التسويات اليدوية وتعدد العملات تؤدي إلى فروقات في الأرصدة وتقارير متعارضة.</div>
  <div class="en"><b>💸 Financial Record Confusion:</b> Manual reconciliations and currency switches create balance gaps and conflicting reports.</div>
  - <div class="ar"><b>🧩 الفائدة:</b> يبرز ضرورة وجود محرك تسوية خفيف يحافظ على التوافق بين الطلبات والمدفوعات.</div>
    <div class="en"><b>🧩 Benefit:</b> Highlights the need for a lightweight reconciliation engine that keeps orders and payments aligned.</div>
- <div class="ar"><b>🧠 فجوات المعرفة والإجراءات:</b> غياب أدلة موحدة يعرقل الإحلال ويخلق تفاوتًا في جودة الخدمة بين المناطق.</div>
  <div class="en"><b>🧠 Knowledge & Process Gaps:</b> Missing playbooks hinder handovers and create uneven service quality across regions.</div>
  - <div class="ar"><b>🧩 الفائدة:</b> يدعم إنشاء أدلة رقمية مدمجة وتدريب متسق داخل النظام.</div>
    <div class="en"><b>🧩 Benefit:</b> Supports building embedded digital playbooks and consistent in-app training.</div>

### 3.1 🎯 الحالة الحالية والمستهدفة | Current vs Target State

<table class="doc-table">
  <thead>
    <tr>
      <th>🧭 <span class="ar"><b>البعد</b></span> | <span class="en"><b>aspect</b></span></th>
      <th>⏳ <span class="ar"><b>الحالة الحالية</b></span> | <span class="en"><b>current state</b></span></th>
      <th>🚀 <span class="ar"><b>الحالة المستهدفة</b></span> | <span class="en"><b>target state</b></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="ar">📦 <b>التسمية:</b> الطلبات</div>
        <div class="en">📦 <b>Label:</b> <i>Orders</i></div>
      </td>
      <td>
        <div class="ar">⏳ <b>الوصف:</b> إدخال يدوي مع اعتماد متأخر يؤدي إلى بطء التنفيذ</div>
        <div class="en">⏳ <b>Description:</b> <i>Manual entry with delayed approvals that slow execution</i></div>
      </td>
      <td>
        <div class="ar">🚀 <b>الوصف:</b> تدفق رقمي كامل مع إشعارات فورية ومسار تدقيق واضح</div>
        <div class="en">🚀 <b>Description:</b> <i>Fully digital flow with instant notifications and a clear audit trail</i></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="ar">🚚 <b>التسمية:</b> الشحن</div>
        <div class="en">🚚 <b>Label:</b> <i>Shipping</i></div>
      </td>
      <td>
        <div class="ar">⏳ <b>الوصف:</b> تحديثات متقطعة بدون أدلة مما يرفع التصعيدات</div>
        <div class="en">⏳ <b>Description:</b> <i>Irregular updates without evidence escalating disputes</i></div>
      </td>
      <td>
        <div class="ar">🚀 <b>الوصف:</b> تتبع لحظي مع صور إثبات وتأكيد تسليم موحد</div>
        <div class="en">🚀 <b>Description:</b> <i>Real-time tracking with proof images and unified delivery confirmation</i></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="ar">💰 <b>التسمية:</b> المالية</div>
        <div class="en">💰 <b>Label:</b> <i>Finance</i></div>
      </td>
      <td>
        <div class="ar">⏳ <b>الوصف:</b> دفاتر متباينة عبر العملات تعرقل التسوية الدقيقة</div>
        <div class="en">⏳ <b>Description:</b> <i>Disparate ledgers across currencies blocking accurate reconciliation</i></div>
      </td>
      <td>
        <div class="ar">🚀 <b>الوصف:</b> تسويات مؤتمتة وتحويلات فورية عبر القنوات المعتمدة</div>
        <div class="en">🚀 <b>Description:</b> <i>Automated reconciliations with instant transfers across approved channels</i></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="ar">📊 <b>التسمية:</b> التقارير</div>
        <div class="en">📊 <b>Label:</b> <i>Reporting</i></div>
      </td>
      <td>
        <div class="ar">⏳ <b>الوصف:</b> تقارير أسبوعية في جداول Excel تحد من الرؤية اللحظية</div>
        <div class="en">⏳ <b>Description:</b> <i>Weekly Excel reports limiting real-time visibility</i></div>
      </td>
      <td>
        <div class="ar">🚀 <b>الوصف:</b> لوحات تحليل مباشرة قابلة للتنقيب تدعم القرار السريع</div>
        <div class="en">🚀 <b>Description:</b> <i>Live drill-down dashboards supporting rapid decision-making</i></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="ar">📈 <b>التسمية:</b> القابلية للتوسع</div>
        <div class="en">📈 <b>Label:</b> <i>Scalability</i></div>
      </td>
      <td>
  <div class="ar">⏳ <b>الوصف:</b> اعتماد على أفراد محددين يهدد الاستمرارية التشغيلية</div>
        <div class="en">⏳ <b>Description:</b> <i>Dependence on key individuals risking operational continuity</i></div>
      </td>
      <td>
        <div class="ar">🚀 <b>الوصف:</b> عمليات موثقة قابلة للتكرار مع توزيع أدوار واضح</div>
        <div class="en">🚀 <b>Description:</b> <i>Documented repeatable processes with clear role distribution</i></div>
      </td>
    </tr>
  </tbody>
</table>

---

## 4. 💡 الرؤية والقيمة | Vision & Value

```mermaid
flowchart LR
  ROOT["🚀 CA Admin | منصة CA Admin"]

  ROOT --> CUST["👥 قيمة العملاء<br>Customer Value"]
  ROOT --> TEAM["🤝 قيمة الفرق<br>Team Value"]
  ROOT --> BIZ["🏢 قيمة الأعمال<br>Business Value"]
  ROOT --> PART["🌍 قيمة الشركاء<br>Partner Value"]

  CUST --> T1["📡 تتبع لحظي<br>Real-time Tracking"]
  CUST --> T2["💳 مدفوعات مرنة<br>Flexible Payments"]

  TEAM --> T3["📴 تشغيل دون اتصال<br>Offline-first Ops"]
  TEAM --> T4["📑 قوالب موحدة<br>Standard Templates"]

  BIZ --> T5["📊 تقارير مباشرة<br>Live Reporting"]
  BIZ --> T6["📈 قابلية التوسع<br>Scalable Expansion"]

  PART --> T7["💰 عمولات واضحة<br>Clear Commissions"]
  PART --> T8["🔗 تكامل سهل<br>Easy Integrations"]

  classDef root fill:#f1f5f9,stroke:#0ea5e9,stroke-width:2px,color:#0f172a;
  classDef cust fill:#dbeafe,stroke:#2563eb,stroke-width:1.5px,color:#1e3a8a;
  classDef team fill:#fef9c3,stroke:#eab308,stroke-width:1.5px,color:#713f12;
  classDef biz fill:#dcfce7,stroke:#16a34a,stroke-width:1.5px,color:#065f46;
  classDef part fill:#fee2e2,stroke:#ef4444,stroke-width:1.5px,color:#991b1b;

  class ROOT root;
  class CUST,T1,T2 cust;
  class TEAM,T3,T4 team;
  class BIZ,T5,T6 biz;
  class PART,T7,T8 part;
```

- <div class="ar"><b>👥 قيمة العملاء:</b> ضمان مسار واضح من الاستفسار إلى التسليم مع تحديثات لحظية تعزز الثقة والولاء.</div>
  <div class="en"><b>👥 Customer Value:</b> Provide a visible journey from inquiry to delivery with real-time updates that boost trust and loyalty.</div>
- <div class="ar"><b>� قيمة فريق العمليات:</b> مسار عمل موحد يقلل الجهد المكرر ويجعل تدوير الأفراد أكثر سلاسة.</div>
  <div class="en"><b>� Operations Team Value:</b> A unified workflow that removes duplicated effort and smooths staff rotations.</div>
- <div class="ar"><b>💼 قيمة الأعمال:</b> تحويل البيانات التشغيلية إلى لوحات قرار موثوقة تمكّن الإدارة من التوسع بثقة.</div>
  <div class="en"><b>💼 Business Value:</b> Turn operational data into trustworthy decision dashboards enabling confident expansion.</div>
- <div class="ar"><b>🤝 قيمة الشركاء:</b> عمولات واضحة وتكاملات سريعة تعزز الشفافية وتخفض المخاطر المشتركة.</div>
  <div class="en"><b>🤝 Partner Value:</b> Transparent commissions and rapid integrations that enhance transparency and reduce shared risk.</div>

---

## 5. 🎯 الأهداف الاستراتيجية | Strategic Objectives

- <div class="ar"><b>💰 توسيع الإيرادات:</b> رفع متوسط قيمة الطلب بنسبة 20٪ عبر الباقات والاشتراكات لدعم الاستثمار المستمر.</div>
  <div class="en"><b>💰 Revenue Expansion:</b> Increase average order value by 20% through bundles and subscriptions to sustain ongoing investment.</div>
  - <div class="ar"><b>🧩 الفائدة:</b> يتيح إطلاق خدمات ملحقة ويعزز هوامش الربح المستهدفة.</div>
    <div class="en"><b>🧩 Benefit:</b> Enables ancillary services and strengthens target profit margins.</div>
- <div class="ar"><b>⚙️ التميز التشغيلي:</b> خفض زمن معالجة الطلب إلى أقل من 60 ثانية عند الاستلام بفضل الأتمتة والتدريب المركز.</div>
  <div class="en"><b>⚙️ Operational Excellence:</b> Cut order processing time below 60 seconds at intake via automation and focused training.</div>
  - <div class="ar"><b>🧩 الفائدة:</b> يحسّن تجربة العميل ويخفض تكاليف التشغيل اليومية.</div>
    <div class="en"><b>🧩 Benefit:</b> Improves customer experience and lowers daily operating costs.</div>
- <div class="ar"><b>🛡️ الحوكمة والامتثال:</b> فرض سياسات أدوار دقيقة وسجل تدقيق لكل معاملة مالية لحماية المنصة.</div>
  <div class="en"><b>🛡️ Governance & Compliance:</b> Enforce precise role policies and audit trails for each financial transaction to protect the platform.</div>
  - <div class="ar"><b>🧩 الفائدة:</b> يقلل التعرض القانوني ويرفع ثقة المنظمين والشركاء.</div>
    <div class="en"><b>🧩 Benefit:</b> Reduces legal exposure and increases regulator and partner confidence.</div>

---

## 6. 🛠️ نطاق الإصدار الأولي | MVP Scope

- <div class="ar"><b>📝 وحدة الطلبات:</b> إنشاء، تقسيم، وربط الطلبات بمكتبة العملاء والمرفقات لضمان اكتمال البيانات وتاريخها.</div>
  <div class="en"><b>📝 Orders Module:</b> Create, split, and link orders with the customer library and attachments to ensure complete data and history.</div>
  - <div class="ar"><b>🧩 الفائدة:</b> يوفر سجلًا موحدًا يسهل الرجوع إليه ويقلل فقدان المعلومات.</div>
    <div class="en"><b>🧩 Benefit:</b> Provides a unified record that is easy to reference and prevents information loss.</div>
- <div class="ar"><b>🚚 متابعة الشحن:</b> تتبع متعدد المراحل من الشراء حتى التسليم مع طوابع زمنية وأدلة مرفقة للمراجعة.</div>
  <div class="en"><b>🚚 Shipment Tracking:</b> Multi-stage tracking from purchase to delivery with timestamps and evidence attachments for review.</div>
  - <div class="ar"><b>🧩 الفائدة:</b> يقلل الاتصالات المتكررة ويضبط توقعات العملاء.</div>
    <div class="en"><b>🧩 Benefit:</b> Reduces repeated inquiries and aligns customer expectations.</div>
- <div class="ar"><b>💳 إدارة المالية:</b> أرصدة، مدفوعات، تحويلات، وبطاقات هدايا مع سجل تدقيق شامل عبر المواقع.</div>
  <div class="en"><b>💳 Finance Management:</b> Balances, payments, transfers, and gift cards with a comprehensive cross-site audit log.</div>
  - <div class="ar"><b>🧩 الفائدة:</b> يضمن تطابق الأرقام بين المتاجر والبنوك والمستخدمين بشكل فوري.</div>
    <div class="en"><b>🧩 Benefit:</b> Ensures numbers match instantly across stores, banks, and users.</div>

---

## 7. 📊 مؤشرات النجاح (KPIs) | Success Metrics (KPIs)

<table class="doc-table">
  <thead>
    <tr>
      <th>🎯 <span class="ar"><b>المؤشر</b></span> | <span class="en"><b>kpi</b></span></th>
      <th>📉 <span class="ar"><b>خط الأساس</b></span> | <span class="en"><b>baseline</b></span></th>
      <th>🏁 <span class="ar"><b>الهدف</b></span> | <span class="en"><b>target</b></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="ar">⏱️ <b>التسمية:</b> زمن استلام الطلب</div>
        <div class="en">⏱️ <b>Label:</b> <i>Order Intake Time</i></div>
      </td>
      <td>
        <div class="ar">📉 <b>القيمة:</b> 180 ثانية</div>
        <div class="en">📉 <b>Value:</b> <i>180 seconds</i></div>
      </td>
      <td>
  <div class="ar">🏁 <b>القيمة:</b> ≤ 60 ثانية (المئين 90)</div>
        <div class="en">🏁 <b>Value:</b> <i>≤ 60 seconds (P90)</i></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="ar">🚚 <b>التسمية:</b> حداثة حالة الشحن</div>
        <div class="en">🚚 <b>Label:</b> <i>Shipment Status Freshness</i></div>
      </td>
      <td>
        <div class="ar">📉 <b>القيمة:</b> تحديث كل 8 ساعات</div>
        <div class="en">📉 <b>Value:</b> <i>Updates every 8 hours</i></div>
      </td>
      <td>
        <div class="ar">🏁 <b>القيمة:</b> تحديث كل ساعة</div>
        <div class="en">🏁 <b>Value:</b> <i>Hourly updates</i></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="ar">💰 <b>التسمية:</b> دقة التسوية المالية</div>
        <div class="en">💰 <b>Label:</b> <i>Financial Reconciliation Accuracy</i></div>
      </td>
      <td>
  <div class="ar">📉 <b>القيمة:</b> 92٪</div>
        <div class="en">📉 <b>Value:</b> <i>92%</i></div>
      </td>
      <td>
  <div class="ar">🏁 <b>القيمة:</b> ≥ 99٪</div>
        <div class="en">🏁 <b>Value:</b> <i>≥ 99%</i></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="ar">📑 <b>التسمية:</b> زمن إعداد التقارير</div>
        <div class="en">📑 <b>Label:</b> <i>Report Preparation Time</i></div>
      </td>
      <td>
        <div class="ar">📉 <b>القيمة:</b> يوم عمل واحد</div>
        <div class="en">📉 <b>Value:</b> <i>1 business day</i></div>
      </td>
      <td>
        <div class="ar">🏁 <b>القيمة:</b> ≤ 5 دقائق</div>
        <div class="en">🏁 <b>Value:</b> <i>≤ 5 minutes</i></div>
      </td>
    </tr>
  </tbody>
</table>

---

## 8. 🗺️ خارطة الإصدارات | Release Roadmap

```mermaid
timeline

  2024-09-01 : 🚀 المرحلة الأولى – الطلبات، الشحن، المالية، والعمل دون اتصال / Phase 1 - Orders, Shipping, Finance, Offline-first
  2024-10-15 : 📊 المرحلة الثانية – بطاقات الهدايا، لوحات الأداء، وبوابات الدفع / Phase 2 - Gift Cards, Dashboards, Payment Gateways
  2024-12-01 : 🌐 المرحلة الثالثة – البوابة الويب، تكامل واجهات الشركاء، والتحليلات التنبؤية / Phase 3 - Web Portal, Partner APIs, Predictive Analytics
```

---

## 9. ⚠️ المخاطر وخطط التخفيف | Risks & Mitigations

<table class="doc-table">
  <thead>
    <tr>
      <th>⚠️ <span class="ar"><b>الخطر</b></span> | <span class="en"><b>risk</b></span></th>
      <th>💥 <span class="ar"><b>التأثير</b></span> | <span class="en"><b>impact</b></span></th>
      <th>🛡️ <span class="ar"><b>خطة التخفيف</b></span> | <span class="en"><b>mitigation</b></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="ar">🔄 <b>التسمية:</b> تعارض البيانات أثناء المزامنة</div>
        <div class="en">🔄 <b>Label:</b> <i>Data conflicts during sync</i></div>
      </td>
      <td>
        <div class="ar">💥 <b>الوصف:</b> أرصدة غير صحيحة وتعطل التقارير التحليلية</div>
        <div class="en">💥 <b>Description:</b> <i>Incorrect balances and disrupted analytics reports</i></div>
      </td>
      <td>
        <div class="ar">🛡️ <b>الإجراء:</b> تطبيق تنافس متفائل مع سجل تدقيق مركزي يوفر استرجاعًا دقيقًا للإصدارات</div>
        <div class="en">🛡️ <b>Action:</b> <i>Apply optimistic concurrency with a central audit log to recover accurate versions</i></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="ar">🗂️ <b>التسمية:</b> حدود فهارس Firestore</div>
        <div class="en">🗂️ <b>Label:</b> <i>Firestore index limits</i></div>
      </td>
      <td>
        <div class="ar">💥 <b>الوصف:</b> استعلامات بطيئة تؤثر على أداء المنصة</div>
        <div class="en">💥 <b>Description:</b> <i>Slow queries impacting platform performance</i></div>
      </td>
      <td>
        <div class="ar">🛡️ <b>الإجراء:</b> تصميم فهارس مركبة مسبقًا وتقسيم البيانات مبكرًا لتوزيع الحمل</div>
        <div class="en">🛡️ <b>Action:</b> <i>Pre-design composite indexes and shard data early to distribute load</i></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="ar">🔐 <b>التسمية:</b> أدوار غير مضبوطة</div>
        <div class="en">🔐 <b>Label:</b> <i>Misconfigured roles</i></div>
      </td>
      <td>
        <div class="ar">💥 <b>الوصف:</b> كشف بيانات حساسة أو تنفيذ عمليات غير مصرح بها</div>
        <div class="en">💥 <b>Description:</b> <i>Sensitive data exposure or unauthorized operations</i></div>
      </td>
      <td>
        <div class="ar">🛡️ <b>الإجراء:</b> إنشاء مصفوفة صلاحيات مدققة مع اختبارات قواعد مستمرة وآلية تنبيه فوري</div>
        <div class="en">🛡️ <b>Action:</b> <i>Create an audited RBAC matrix with continuous rule tests and instant alerting</i></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="ar">👥 <b>التسمية:</b> الاعتماد على أفراد محددين</div>
        <div class="en">👥 <b>Label:</b> <i>Dependency on key staff</i></div>
      </td>
      <td>
        <div class="ar">💥 <b>الوصف:</b> توقف العمليات عند الغياب أو تبدل الأدوار الحرجة</div>
        <div class="en">💥 <b>Description:</b> <i>Operational halt when critical roles are absent or swapped</i></div>
      </td>
      <td>
        <div class="ar">🛡️ <b>الإجراء:</b> توثيق الإجراءات، تعيين بدلاء، وتدوير المهام وفق جدول واضح</div>
        <div class="en">🛡️ <b>Action:</b> <i>Document procedures, assign backups, and rotate duties on a defined schedule</i></div>
      </td>
    </tr>
  </tbody>
</table>

---

## 10. 🧾 مسرد المصطلحات | Glossary

<table class="doc-table">
  <thead>
    <tr>
      <th>🗣️ <span class="ar"><b>المصطلح العربي</b></span> | <span class="en"><b>arabic term</b></span></th>
      <th>💬 <span class="ar"><b>المصطلح الإنجليزي</b></span> | <span class="en"><b>english term</b></span></th>
      <th>📘 <span class="ar"><b>التعريف (عربي)</b></span> | <span class="en"><b>definition (ar)</b></span></th>
      <th>📙 <span class="ar"><b>التعريف (إنجليزي)</b></span> | <span class="en"><b>definition (en)</b></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="ar">🔢 <b>التسمية:</b> رقم الطلب</div>
        <div class="en">🔢 <b>Label:</b> <i>Order Number</i></div>
      </td>
      <td>
        <div class="ar">🔢 <b>المكافئ:</b> Order Number</div>
        <div class="en">🔢 <b>Equivalent:</b> <i>Order Number</i></div>
      </td>
      <td>
        <div class="ar">📘 <b>الوصف:</b> معرف فريد يربط جميع معاملات الطلب داخل النظام لضمان تتبع موحد</div>
        <div class="en">📘 <b>Description:</b> <i>A unique identifier linking every order transaction in the system for unified tracking</i></div>
      </td>
      <td>
        <div class="ar">📙 <b>الوصف:</b> Unique identifier linking each order transaction in the system to keep tracking consistent</div>
        <div class="en">📙 <b>Description:</b> <i>Unique identifier linking each order transaction in the system to keep tracking consistent</i></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="ar">📦 <b>التسمية:</b> توحيد الشحنات</div>
        <div class="en">📦 <b>Label:</b> <i>Shipment Consolidation</i></div>
      </td>
      <td>
        <div class="ar">📦 <b>المكافئ:</b> Shipment Consolidation</div>
        <div class="en">📦 <b>Equivalent:</b> <i>Shipment Consolidation</i></div>
      </td>
      <td>
        <div class="ar">📘 <b>الوصف:</b> دمج عدة طلبات في شحنة واحدة لخفض التكلفة وتسريع المعالجة التشغيلية</div>
        <div class="en">📘 <b>Description:</b> <i>Combining multiple orders into one shipment to reduce cost and speed operations</i></div>
      </td>
      <td>
        <div class="ar">📙 <b>الوصف:</b> Merging multiple orders into a single shipment to reduce cost and accelerate processing</div>
        <div class="en">📙 <b>Description:</b> <i>Merging multiple orders into a single shipment to reduce cost and accelerate processing</i></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="ar">⚖️ <b>التسمية:</b> محرك التسوية</div>
        <div class="en">⚖️ <b>Label:</b> <i>Reconciliation Engine</i></div>
      </td>
      <td>
  <div class="ar">⚖️ <b>المكافئ:</b> Reconciliation Engine</div>
        <div class="en">⚖️ <b>Equivalent:</b> <i>Reconciliation Engine</i></div>
      </td>
      <td>
        <div class="ar">📘 <b>الوصف:</b> طبقة منطقية تقارن المدفوعات بالطلبات والمخزون لاكتشاف الفروقات الرسمية</div>
        <div class="en">📘 <b>Description:</b> <i>A logic layer comparing payments to orders and inventory to detect official variances</i></div>
      </td>
      <td>
        <div class="ar">📙 <b>الوصف:</b> Logic layer comparing payments to orders and inventory to detect discrepancies</div>
        <div class="en">📙 <b>Description:</b> <i>Logic layer comparing payments to orders and inventory to detect discrepancies</i></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="ar">✅ <b>التسمية:</b> المطابقة المزدوجة</div>
        <div class="en">✅ <b>Label:</b> <i>Dual Matching</i></div>
      </td>
      <td>
        <div class="ar">✅ <b>المكافئ:</b> Dual Matching</div>
        <div class="en">✅ <b>Equivalent:</b> <i>Dual Matching</i></div>
      </td>
      <td>
        <div class="ar">📘 <b>الوصف:</b> خطوة تحقق مشتركة بين مركزي السعودية واليمن قبل التسليم النهائي لضمان التوافق الكامل</div>
        <div class="en">📘 <b>Description:</b> <i>A joint verification step between the KSA and Yemen hubs before final delivery to ensure full alignment</i></div>
      </td>
      <td>
        <div class="ar">📙 <b>الوصف:</b> Verification step between the KSA and Yemen hubs before final delivery to guarantee alignment</div>
        <div class="en">📙 <b>Description:</b> <i>Verification step between the KSA and Yemen hubs before final delivery to guarantee alignment</i></div>
      </td>
    </tr>
  </tbody>
</table>

---

## 11. 🔗 جدول المواءمة بين الأهداف والقيمة | Objectives vs Value Table

<div class="ar">ℹ️ <b>الوصف:</b> يوضح الجدول كيفية ارتباط الأهداف الاستراتيجية بالقيمة المتحققة لكل فئة لضمان اتساق القرارات الاستثمارية.</div>
<div class="en">ℹ️ <b>Description:</b> The table shows how strategic objectives translate into value for each group to keep investment decisions aligned.</div>

<table class="doc-table">
  <thead>
    <tr>
      <th>🎯 <span class="ar"><b>الهدف الاستراتيجي</b></span> | <span class="en"><b>strategic objective</b></span></th>
      <th>👥 <span class="ar"><b>قيمة العملاء</b></span> | <span class="en"><b>customer value</b></span></th>
  <th>👥 <span class="ar"><b>قيمة الفريق</b></span> | <span class="en"><b>team value</b></span></th>
      <th>💼 <span class="ar"><b>قيمة الأعمال</b></span> | <span class="en"><b>business value</b></span></th>
      <th>🤝 <span class="ar"><b>قيمة الشركاء</b></span> | <span class="en"><b>partner value</b></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="ar">🎯 <b>التسمية:</b> توسيع الإيرادات</div>
        <div class="en">🎯 <b>Label:</b> <i>Revenue Expansion</i></div>
      </td>
      <td>
        <div class="ar">👥 <b>الوصف:</b> عروض مجمعة وخيارات دفع مرنة تزيد الولاء وتكرار الشراء</div>
        <div class="en">👥 <b>Description:</b> <i>Bundle offers and flexible payments that grow loyalty and repeat purchases</i></div>
      </td>
      <td>
        <div class="ar">🧑‍🤝‍🧑 <b>الوصف:</b> أدوات تحصيل مبسطة تربط الطلب بالمخزون وتقلل الأخطاء المحاسبية</div>
        <div class="en">🧑‍🤝‍🧑 <b>Description:</b> <i>Simplified collection tools linking orders to inventory that reduce accounting errors</i></div>
      </td>
      <td>
        <div class="ar">💼 <b>الوصف:</b> نمو الربحية عبر سلال أعلى ومبيعات متكررة مع رؤية أوضح للهوامش</div>
        <div class="en">💼 <b>Description:</b> <i>Profit growth through higher baskets and repeat sales with clearer margin visibility</i></div>
      </td>
      <td>
  <div class="ar">🤝 <b>الوصف:</b> عمولات واضحة وتقارير مشتركة تعزز ثقة الوسطاء وتسرّع التسويات</div>
        <div class="en">🤝 <b>Description:</b> <i>Transparent commissions and shared reports that strengthen partner trust and speed settlements</i></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="ar">🎯 <b>التسمية:</b> التميز التشغيلي</div>
        <div class="en">🎯 <b>Label:</b> <i>Operational Excellence</i></div>
      </td>
      <td>
        <div class="ar">👥 <b>الوصف:</b> خدمة أسرع مع تحديثات حالة فورية تقلل قلق العملاء وتعزز رضاهم</div>
        <div class="en">👥 <b>Description:</b> <i>Faster service with real-time updates reducing customer anxiety and boosting satisfaction</i></div>
      </td>
      <td>
        <div class="ar">🧑‍🤝‍🧑 <b>الوصف:</b> مسار عمل موحد يقلل الجهد المكرر ويعجّل دمج الموظفين الجدد</div>
        <div class="en">🧑‍🤝‍🧑 <b>Description:</b> <i>Unified workflow removing duplicate effort and accelerating onboarding</i></div>
      </td>
      <td>
        <div class="ar">💼 <b>الوصف:</b> خفض التكاليف عبر أتمتة المهام الروتينية وتحسين الإنتاجية اليومية</div>
        <div class="en">💼 <b>Description:</b> <i>Cost reduction by automating routine tasks and improving daily productivity</i></div>
      </td>
      <td>
        <div class="ar">🤝 <b>الوصف:</b> تكامل أسهل وخفض الحاجة إلى المتابعة اليدوية المكلفة في المشاريع المشتركة</div>
        <div class="en">🤝 <b>Description:</b> <i>Streamlined integrations with less costly manual follow-up in joint projects</i></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="ar">🎯 <b>التسمية:</b> الحوكمة والامتثال</div>
        <div class="en">🎯 <b>Label:</b> <i>Governance &amp; Compliance</i></div>
      </td>
      <td>
        <div class="ar">👥 <b>الوصف:</b> شفافية كاملة في حقوق العميل وإشعاراته مما يعزز الثقة والاحتفاظ</div>
        <div class="en">👥 <b>Description:</b> <i>Full transparency on customer rights and notifications that improve trust and retention</i></div>
      </td>
      <td>
  <div class="ar">👥 <b>الوصف:</b> سياسات دقيقة تقلل الأخطاء البشرية وتوضح مسؤوليات كل فريق</div>
  <div class="en">👥 <b>Description:</b> <i>Precise policies reducing human error and clarifying each team’s responsibilities</i></div>
      </td>
      <td>
        <div class="ar">💼 <b>الوصف:</b> حماية قانونية وتقارير تدقيق جاهزة تدعم القرارات السريعة والاستثمارات الجديدة</div>
        <div class="en">💼 <b>Description:</b> <i>Legal protection and audit-ready reports supporting rapid decisions and new investments</i></div>
      </td>
      <td>
        <div class="ar">🤝 <b>الوصف:</b> ثقة أعلى لدى الشركاء والجهات المنظمة بفضل الالتزام الموثق والرقابة المستمرة</div>
        <div class="en">🤝 <b>Description:</b> <i>Greater trust from partners and regulators through documented compliance and continuous oversight</i></div>
      </td>
    </tr>
  </tbody>
</table>
