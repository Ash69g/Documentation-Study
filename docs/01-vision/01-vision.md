# **📝 وثيقة الرؤية | Vision Document**

---

> <div class="ar">🗂️ <strong>المشروع:</strong> منصة الوساطة الشرائية CA Admin</div>
> <div class="en"><i>🗂️ <strong>Project:</strong> CA Admin Shopping Mediation Platform</i></div>
> <div class="ar">🧰 <strong>المكدس التقني:</strong> Flutter، Firebase (Firestore، Auth، Storage، Functions)</div>
> <div class="en"><i>🧰 <strong>Tech Stack:</strong> Flutter, Firebase (Firestore, Auth, Storage, Functions)</i></div>
> <div class="ar">🏷️ <strong>الإصدار:</strong> 0.1 (رؤية) – المالك: عبدالله الشائف – آخر تحديث: 2025-09-20</div>
> <div class="en"><i>🏷️ <strong>Version:</strong> 0.1 (Vision) – Owner: Abdullah Alshaif – Last Updated: 2025-09-20</i></div>

<div class="ar"><strong>النظرة العامة:</strong></div>
<div class="ar">تقدم الوثيقة رؤية شاملة للمنصة، أهدافها، وأساسها التقني لضمان وضوح القيمة لجميع الأطراف.</div>
<div class="en"><i><strong>Overview:</strong></i></div>
<div class="en"><i>The document provides a comprehensive view of the platform, its goals, and technology foundation to clarify value for every stakeholder.</i></div>

<table class="doc-table">
  <thead>
    <tr>
      <th class="center"><span class="ar">العنصر</span><br><span class="en"><i>Element</i></span></th>
      <th><span class="ar">التفاصيل</span><br><span class="en"><i>Details</i></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="center"><div class="ar">المؤسسة</div><div class="en"><i>Organization</i></div></td>
      <td><div class="ar">الإدارة العامة CA Admin DmG Headquarters</div><div class="en"><i>CA Admin DmG Headquarters</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">نطاق الحل</div><div class="en"><i>Solution Scope</i></div></td>
      <td><div class="ar">منصة وساطة للتسوق عبر الحدود تخدم اليمن والسعودية مع ربط رقمي متكامل</div><div class="en"><i>A cross-border shopping mediation platform serving Yemen and Saudi Arabia with integrated digital linkages</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">الرؤية الإدارية</div><div class="en"><i>Management Vision</i></div></td>
      <td><div class="ar">تسريع الطلبات، الشحن، والمدفوعات عبر مسار رقمي واحد وشفاف</div><div class="en"><i>Accelerate orders, shipping, and payments through a single transparent digital lane</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">الجمهور الأساسي</div><div class="en"><i>Primary Audience</i></div></td>
      <td><div class="ar">المتسوقون، العمليات، المالية، الشركاء، القيادة التنفيذية</div><div class="en"><i>Shoppers, operations teams, finance, partners, executive leadership</i></div></td>
    </tr>
  </tbody>
</table>

---

## **1. ℹ️ مقدمة | Introduction**

### **1.1 👁️ نظرة بصرية عامة | Visual Overview**

<div class="ar"><strong>الوصف:</strong></div>
<div class="ar">يوضح المخطط رحلة الطلب من إنشاء العميل حتى تسليم الشحنة مع إبراز نقاط التفاعل المالية والتحليلية.</div>
<div class="en"><i><strong>Description:</strong></i></div>
<div class="en"><i>The diagram shows the order journey from customer initiation to delivery while flagging finance and analytics touchpoints.</i></div>

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

### **1.2 🧭 رحلة القيمة المبسطة | Simplified Value Journey**

<div class="ar"><strong>الوصف:</strong></div>
<div class="ar">يبيّن المخطط دور كل طرف في كل مرحلة لضمان وضوح المسؤوليات وسرعة التسليم.</div>
<div class="en"><i><strong>Description:</strong></i></div>
<div class="en"><i>The chart clarifies how each party contributes at every stage to keep responsibilities clear and delivery timely.</i></div>

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
    ✅ التحقق من الطلب / Validate Order: 5: 🧑‍💻 المشغل / Operator
    🚚 تنسيق الشحن / Coordinate Shipment: 4: 🧑‍💻 المشغل / Operator
    🔄 تحديث الحالة / Update Status: 4: 🧑‍💻 المشغل / Operator

  section 💰 المالية / Finance
    💵 تسوية المدفوعات / Reconcile Payments: 5: 💼 المالية / Finance
    📑 نشر التقارير / Publish Reports: 3: 💼 المالية / Finance
```

### **1.3 🏁 سياق المنصة | Platform Context**

<div class="ar"><strong>الوصف:</strong></div>
<div class="ar">يلخص هذا الجزء رسالة المنصة، الشرائح المستفيدة، والمبادئ التصميمية لضمان الاتساق.</div>
<div class="en"><i><strong>Description:</strong></i></div>
<div class="en"><i>This section outlines the platform mission, beneficiary segments, and design principles to keep the experience consistent.</i></div>

- <div class="ar">🎯 <strong>المهمة الأساسية:</strong> تقديم مركز عمليات موحد لإدارة الطلبات، الشحن، والمدفوعات عبر الحدود بسهولة وشفافية.</div>
  <div class="en"><i>🎯 <strong>Core Mission:</strong> Deliver a unified operations hub that manages cross-border orders, shipping, and payments with ease and transparency.</i></div>
- <div class="ar">🧭 <strong>وصف المنصة:</strong> حل متكامل يربط إنشاء الطلب بوثائق الشحن والسجلات المالية دون ازدواجية بيانات.</div>
  <div class="en"><i>🧭 <strong>Platform Definition:</strong> An integrated solution linking order creation with shipping documents and financial records without data duplication.</i></div>
- <div class="ar">🛠️ <strong>الوظيفة الرئيسية:</strong> تنسيق تدفق العمل من الاستلام حتى الإغلاق مع أدوات رقابة وتقارير وأتمتة للمهام الحرجة.</div>
  <div class="en"><i>🛠️ <strong>Primary Function:</strong> Orchestrate workflow from intake to closure with controls, reporting, and automation for critical tasks.</i></div>
- <div class="ar">🏆 <strong>المنفعة المتوقعة:</strong> خفض العمل اليدوي ورفع رضا العملاء عبر مصدر موحد للحقيقة وإشعارات فورية.</div>
  <div class="en"><i>🏆 <strong>Expected Benefit:</strong> Reduce manual effort and raise customer satisfaction through a single source of truth and instant notifications.</i></div>
- <div class="ar">👥 <strong>شرائح الخدمة:</strong> المتسوقون، خدمة العملاء، مشغلو العمليات، فرق المالية، القيادة التنفيذية.</div>
  <div class="en"><i>👥 <strong>Target Segments:</strong> Shoppers, customer service teams, operations operators, finance teams, executive leadership.</i></div>
- <div class="ar">✨ <strong>مبدأ التجربة:</strong> كل رحلة يجب أن تكون قابلة للتتبع، ثنائية اللغة، وقادرة على العمل دون اتصال لضمان التبني.</div>
  <div class="en"><i>✨ <strong>Experience Principle:</strong> Every journey must be traceable, bilingual, and offline-ready to ensure adoption.</i></div>

---

## **2. 🚀 لماذا الآن | Why Now**

- <div class="ar">📈 <strong>تسارع التجارة العابرة للحدود:</strong> تنمو احتياجات الشراء الدولي في اليمن بنسبة ‎35٪‎ سنويًا رغم تحديات البنية التحتية.</div>
  <div class="en"><i>📈 <strong>Cross-border Commerce Acceleration:</strong> International shopping needs in Yemen grow by 35% annually despite infrastructure hurdles.</i></div>
  - <div class="ar">🧩 <strong>الفائدة:</strong> يبرر الاستثمار الفوري في منصة قابلة للتوسع تستوعب النمو وتقدم تجربة موحدة.</div>
    <div class="en"><i>🧩 <strong>Benefit:</strong> Justifies immediate investment in a scalable platform that absorbs growth and keeps the experience unified.</i></div>
- <div class="ar">🗂️ <strong>تشتت العمليات اليدوية:</strong> تتكرر الطلبات في جداول ومحادثات متفرقة مما يهدر الوقت ويصعّب التدقيق.</div>
  <div class="en"><i>🗂️ <strong>Manual Fragmentation:</strong> Orders repeat across scattered sheets and chats, wasting time and complicating audits.</i></div>
  - <div class="ar">🧩 <strong>الفائدة:</strong> يؤكد ضرورة الأتمتة المركزية لتقليل الأخطاء وتسريع المتابعة التشغيلية.</div>
    <div class="en"><i>🧩 <strong>Benefit:</strong> Underlines the need for centralized automation to cut errors and speed operational follow-up.</i></div>
- <div class="ar">🛡️ <strong>توقعات الثقة والامتثال:</strong> يتطلب العملاء والشركاء إيصالات رقمية متوافقة مع اللوائح السعودية واليمنية منذ البداية.</div>
  <div class="en"><i>🛡️ <strong>Trust &amp; Compliance Expectations:</strong> Customers and partners demand digital receipts aligned with Saudi and Yemeni regulations from day one.</i></div>
  - <div class="ar">🧩 <strong>الفائدة:</strong> يدفع لتجهيز ضوابط الحوكمة المبكرة لضمان الامتثال وتقوية سمعة العلامة.</div>
    <div class="en"><i>🧩 <strong>Benefit:</strong> Drives early governance controls to ensure compliance and reinforce brand reputation.</i></div>

---

## **3. 🧩 التحديات المحورية | Core Challenges**

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

- <div class="ar">🔍 <strong>عمى تشغيلي:</strong> لا يمكن ربط حالة الشحنة بالطلب أو العميل من خلال مصدر واحد مما يؤخر القرارات.</div>
  <div class="en"><i>🔍 <strong>Operational Blind Spots:</strong> Shipment status cannot be tied to an order or customer within a single source, delaying decisions.</i></div>
  - <div class="ar">🧩 <strong>الفائدة:</strong> يحفز بناء لوحة متابعة موحدة ودمج الحالة عبر الأنظمة.</div>
    <div class="en"><i>🧩 <strong>Benefit:</strong> Encourages building a unified monitoring dashboard and integrating status across systems.</i></div>
- <div class="ar">💸 <strong>اختلال السجلات المالية:</strong> التسويات اليدوية وتعدد العملات تؤدي إلى فروقات في الأرصدة وتقارير متعارضة.</div>
  <div class="en"><i>💸 <strong>Financial Record Confusion:</strong> Manual reconciliations and currency switches create balance gaps and conflicting reports.</i></div>
  - <div class="ar">🧩 <strong>الفائدة:</strong> يبرز ضرورة وجود محرك تسوية خفيف يحافظ على التوافق بين الطلبات والمدفوعات.</div>
    <div class="en"><i>🧩 <strong>Benefit:</strong> Highlights the need for a lightweight reconciliation engine that keeps orders and payments aligned.</i></div>
- <div class="ar">🧠 <strong>فجوات المعرفة والإجراءات:</strong> غياب أدلة موحدة يعرقل الإحلال ويخلق تفاوتًا في جودة الخدمة بين المناطق.</div>
  <div class="en"><i>🧠 <strong>Knowledge &amp; Process Gaps:</strong> Missing playbooks hinder handovers and create uneven service quality across regions.</i></div>
  - <div class="ar">🧩 <strong>الفائدة:</strong> يدعم إنشاء أدلة رقمية مدمجة وتدريب متسق داخل النظام.</div>
    <div class="en"><i>🧩 <strong>Benefit:</strong> Supports building embedded digital playbooks and consistent in-app training.</i></div>

### **3.1 🎯 الحالة الحالية والمستهدفة | Current vs Target State**

<table class="doc-table">
  <thead>
    <tr>
      <th class="center"><span class="ar">البعد</span><br><span class="en"><i>Aspect</i></span></th>
      <th><span class="ar">الحالة الحالية</span><br><span class="en"><i>Current State</i></span></th>
      <th><span class="ar">الحالة المستهدفة</span><br><span class="en"><i>Target State</i></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="center"><div class="ar">الطلبات</div><div class="en"><i>Orders</i></div></td>
      <td><div class="ar">إدخال يدوي مع اعتماد متأخر يؤدي إلى بطء التنفيذ</div><div class="en"><i>Manual entry with delayed approvals that slow execution</i></div></td>
      <td><div class="ar">تدفق رقمي كامل مع إشعارات فورية ومسار تدقيق واضح</div><div class="en"><i>Fully digital flow with instant notifications and a clear audit trail</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">الشحن</div><div class="en"><i>Shipping</i></div></td>
      <td><div class="ar">تحديثات متقطعة بدون أدلة مما يرفع التصعيدات</div><div class="en"><i>Irregular updates without evidence escalating disputes</i></div></td>
      <td><div class="ar">تتبع لحظي مع صور إثبات وتأكيد تسليم موحد</div><div class="en"><i>Real-time tracking with proof images and unified delivery confirmation</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">المالية</div><div class="en"><i>Finance</i></div></td>
      <td><div class="ar">دفاتر متباينة عبر العملات تعرقل التسوية الدقيقة</div><div class="en"><i>Disparate ledgers across currencies blocking accurate reconciliation</i></div></td>
      <td><div class="ar">تسويات مؤتمتة وتحويلات فورية عبر القنوات المعتمدة</div><div class="en"><i>Automated reconciliations with instant transfers across approved channels</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">التقارير</div><div class="en"><i>Reporting</i></div></td>
      <td><div class="ar">تقارير أسبوعية في جداول Excel تحد من الرؤية اللحظية</div><div class="en"><i>Weekly Excel reports limiting real-time visibility</i></div></td>
      <td><div class="ar">لوحات تحليل مباشرة قابلة للتنقيب تدعم القرار السريع</div><div class="en"><i>Live drill-down dashboards supporting rapid decision-making</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">القابلية للتوسع</div><div class="en"><i>Scalability</i></div></td>
      <td><div class="ar">اعتماد على أفراد محددين يهدد الاستمرارية التشغيلية</div><div class="en"><i>Dependence on key individuals risking operational continuity</i></div></td>
      <td><div class="ar">عمليات موثقة قابلة للتكرار مع توزيع أدوار واضح</div><div class="en"><i>Documented repeatable processes with clear role distribution</i></div></td>
    </tr>
  </tbody>
</table>

---

## **4. 💡 الرؤية والقيمة | Vision & Value**

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

- <div class="ar">👥 <strong>قيمة العملاء:</strong> ضمان مسار واضح من الاستفسار إلى التسليم مع تحديثات لحظية تعزز الثقة والولاء.</div>
  <div class="en"><i>👥 <strong>Customer Value:</strong> Provide a visible journey from inquiry to delivery with real-time updates that boost trust and loyalty.</i></div>
- <div class="ar">🧑 ‍💼 <strong>قيمة فريق العمليات:</strong> مسار عمل موحد يقلل الجهد المكرر ويجعل تدوير الأفراد أكثر سلاسة.</div>
  <div class="en"><i>🧑 ‍💼 <strong>Operations Team Value:</strong> A unified workflow that removes duplicated effort and smooths staff rotations.</i></div>
- <div class="ar">💼 <strong>قيمة الأعمال:</strong> تحويل البيانات التشغيلية إلى لوحات قرار موثوقة تمكّن الإدارة من التوسع بثقة.</div>
  <div class="en"><i>💼 <strong>Business Value:</strong> Turn operational data into trustworthy decision dashboards enabling confident expansion.</i></div>
- <div class="ar">🤝 <strong>قيمة الشركاء:</strong> عمولات واضحة وتكاملات سريعة تعزز الشفافية وتخفض المخاطر المشتركة.</div>
  <div class="en"><i>🤝 <strong>Partner Value:</strong> Transparent commissions and rapid integrations that enhance transparency and reduce shared risk.</i></div>

---

## **5. 🎯 الأهداف الاستراتيجية | Strategic Objectives**

- <div class="ar">💰 <strong>توسيع الإيرادات:</strong> رفع متوسط قيمة الطلب بنسبة ‎20٪‎ عبر الباقات والاشتراكات لدعم الاستثمار المستمر.</div>
  <div class="en"><i>💰 <strong>Revenue Expansion:</strong> Increase average order value by 20% through bundles and subscriptions to sustain ongoing investment.</i></div>
  - <div class="ar">🧩 <strong>الفائدة:</strong> يتيح إطلاق خدمات ملحقة ويعزز هوامش الربح المستهدفة.</div>
    <div class="en"><i>🧩 <strong>Benefit:</strong> Enables ancillary services and strengthens target profit margins.</i></div>
- <div class="ar">⚙️ <strong>التميز التشغيلي:</strong> خفض زمن معالجة الطلب إلى أقل من 60 ثانية عند الاستلام بفضل الأتمتة والتدريب المركز.</div>
  <div class="en"><i>⚙️ <strong>Operational Excellence:</strong> Cut order processing time below 60 seconds at intake via automation and focused training.</i></div>
  - <div class="ar">🧩 <strong>الفائدة:</strong> يحسّن تجربة العميل ويخفض تكاليف التشغيل اليومية.</div>
    <div class="en"><i>🧩 <strong>Benefit:</strong> Improves customer experience and lowers daily operating costs.</i></div>
- <div class="ar">🛡️ <strong>الحوكمة والامتثال:</strong> فرض سياسات أدوار دقيقة وسجل تدقيق لكل معاملة مالية لحماية المنصة.</div>
  <div class="en"><i>🛡️ <strong>Governance &amp; Compliance:</strong> Enforce precise role policies and audit trails for each financial transaction to protect the platform.</i></div>
  - <div class="ar">🧩 <strong>الفائدة:</strong> يقلل التعرض القانوني ويرفع ثقة المنظمين والشركاء.</div>
    <div class="en"><i>🧩 <strong>Benefit:</strong> Reduces legal exposure and increases regulator and partner confidence.</i></div>

---

## **6. 🛠️ نطاق الإصدار الأولي | MVP Scope**

- <div class="ar">📝 <strong>وحدة الطلبات:</strong> إنشاء، تقسيم، وربط الطلبات بمكتبة العملاء والمرفقات لضمان اكتمال البيانات وتاريخها.</div>
  <div class="en"><i>📝 <strong>Orders Module:</strong> Create, split, and link orders with the customer library and attachments to ensure complete data and history.</i></div>
  - <div class="ar">🧩 <strong>الفائدة:</strong> يوفر سجلًا موحدًا يسهل الرجوع إليه ويقلل فقدان المعلومات.</div>
    <div class="en"><i>🧩 <strong>Benefit:</strong> Provides a unified record that is easy to reference and prevents information loss.</i></div>
- <div class="ar">🚚 <strong>متابعة الشحن:</strong> تتبع متعدد المراحل من الشراء حتى التسليم مع طوابع زمنية وأدلة مرفقة للمراجعة.</div>
  <div class="en"><i>🚚 <strong>Shipment Tracking:</strong> Multi-stage tracking from purchase to delivery with timestamps and evidence attachments for review.</i></div>
  - <div class="ar">🧩 <strong>الفائدة:</strong> يقلل الاتصالات المتكررة ويضبط توقعات العملاء.</div>
    <div class="en"><i>🧩 <strong>Benefit:</strong> Reduces repeated inquiries and aligns customer expectations.</i></div>
- <div class="ar">💳 <strong>إدارة المالية:</strong> أرصدة، مدفوعات، تحويلات، وبطاقات هدايا مع سجل تدقيق شامل عبر المواقع.</div>
  <div class="en"><i>💳 <strong>Finance Management:</strong> Balances, payments, transfers, and gift cards with a comprehensive cross-site audit log.</i></div>
  - <div class="ar">🧩 <strong>الفائدة:</strong> يضمن تطابق الأرقام بين المتاجر والبنوك والمستخدمين بشكل فوري.</div>
    <div class="en"><i>🧩 <strong>Benefit:</strong> Ensures numbers match instantly across stores, banks, and users.</i></div>

---

## **7. 📊 مؤشرات النجاح (KPIs) | Success Metrics (KPIs)**

<table class="doc-table">
  <thead>
    <tr>
      <th class="center"><span class="ar">المؤشر</span><br><span class="en"><i>KPI</i></span></th>
      <th><span class="ar">خط الأساس</span><br><span class="en"><i>Baseline</i></span></th>
      <th><span class="ar">الهدف</span><br><span class="en"><i>Target</i></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="center"><div class="ar">زمن استلام الطلب</div><div class="en"><i>Order Intake Time</i></div></td>
      <td><div class="ar">180 ثانية</div><div class="en"><i>180 seconds</i></div></td>
      <td><div class="ar">≤ 60 ثانية (المئين ‎90‎)</div><div class="en"><i>≤ 60 seconds (P90)</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">حداثة حالة الشحن</div><div class="en"><i>Shipment Status Freshness</i></div></td>
      <td><div class="ar">تحديث كل 8 ساعات</div><div class="en"><i>Updates every 8 hours</i></div></td>
      <td><div class="ar">تحديث كل ساعة</div><div class="en"><i>Hourly updates</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">دقة التسوية المالية</div><div class="en"><i>Financial Reconciliation Accuracy</i></div></td>
      <td><div class="ar">‎92٪‎</div><div class="en"><i>92%</i></div></td>
      <td><div class="ar">≥ ‎99٪‎</div><div class="en"><i>≥ 99%</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">زمن إعداد التقارير</div><div class="en"><i>Report Preparation Time</i></div></td>
      <td><div class="ar">يوم عمل واحد</div><div class="en"><i>1 business day</i></div></td>
      <td><div class="ar">≤ 5 دقائق</div><div class="en"><i>≤ 5 minutes</i></div></td>
    </tr>
  </tbody>
</table>

---

## **8. 🗺️ خارطة الإصدارات | Release Roadmap**

```mermaid
timeline

  2024-09-01 : 🚀 المرحلة الأولى – الطلبات، الشحن، المالية، والعمل دون اتصال / Phase 1 - Orders, Shipping, Finance, Offline-first
  2024-10-15 : 📊 المرحلة الثانية – بطاقات الهدايا، لوحات الأداء، وبوابات الدفع / Phase 2 - Gift Cards, Dashboards, Payment Gateways
  2024-12-01 : 🌐 المرحلة الثالثة – البوابة الويب، تكامل واجهات الشركاء، والتحليلات التنبؤية / Phase 3 - Web Portal, Partner APIs, Predictive Analytics
```

---

## **9. ⚠️ المخاطر وخطط التخفيف | Risks & Mitigations**

<table class="doc-table">
  <thead>
    <tr>
      <th class="center"><span class="ar">الخطر</span><br><span class="en"><i>Risk</i></span></th>
      <th><span class="ar">التأثير</span><br><span class="en"><i>Impact</i></span></th>
      <th><span class="ar">خطة التخفيف</span><br><span class="en"><i>Mitigation</i></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="center"><div class="ar">تعارض البيانات أثناء المزامنة</div><div class="en"><i>Data conflicts during sync</i></div></td>
      <td><div class="ar">أرصدة غير صحيحة وتعطل التقارير التحليلية</div><div class="en"><i>Incorrect balances and disrupted analytics reports</i></div></td>
      <td><div class="ar">تطبيق تنافس متفائل مع سجل تدقيق مركزي يوفر استرجاعًا دقيقًا للإصدارات</div><div class="en"><i>Apply optimistic concurrency with a central audit log to recover accurate versions</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">حدود فهارس Firestore</div><div class="en"><i>Firestore index limits</i></div></td>
      <td><div class="ar">استعلامات بطيئة تؤثر على أداء المنصة</div><div class="en"><i>Slow queries impacting platform performance</i></div></td>
      <td><div class="ar">تصميم فهارس مركبة مسبقًا وتقسيم البيانات مبكرًا لتوزيع الحمل</div><div class="en"><i>Pre-design composite indexes and shard data early to distribute load</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">أدوار غير مضبوطة</div><div class="en"><i>Misconfigured roles</i></div></td>
      <td><div class="ar">كشف بيانات حساسة أو تنفيذ عمليات غير مصرح بها</div><div class="en"><i>Sensitive data exposure or unauthorized operations</i></div></td>
      <td><div class="ar">إنشاء مصفوفة صلاحيات مدققة مع اختبارات قواعد مستمرة وآلية تنبيه فوري</div><div class="en"><i>Create an audited RBAC matrix with continuous rule tests and instant alerting</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">الاعتماد على أفراد محددين</div><div class="en"><i>Dependency on key staff</i></div></td>
      <td><div class="ar">توقف العمليات عند الغياب أو تبدل الأدوار الحرجة</div><div class="en"><i>Operational halt when critical roles are absent or swapped</i></div></td>
      <td><div class="ar">توثيق الإجراءات، تعيين بدلاء، وتدوير المهام وفق جدول واضح</div><div class="en"><i>Document procedures, assign backups, and rotate duties on a defined schedule</i></div></td>
    </tr>
  </tbody>
</table>

---

## **10. 🧾 مسرد المصطلحات | Glossary**

<table class="doc-table">
  <thead>
    <tr>
      <th class="center"><span class="ar">المصطلح العربي</span><br><span class="en"><i>Arabic Term</i></span></th>
      <th><span class="ar">المصطلح الإنجليزي</span><br><span class="en"><i>English Term</i></span></th>
      <th><span class="ar">التعريف العربي</span><br><span class="en"><i>Definition (AR)</i></span></th>
      <th><span class="ar">التعريف الإنجليزي</span><br><span class="en"><i>Definition (EN)</i></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="center"><div class="ar">رقم الطلب</div><div class="en"><i>Order Number</i></div></td>
      <td><div class="ar">الاسم بالإنجليزية: Order Number</div><div class="en"><i>Order Number</i></div></td>
      <td><div class="ar">معرف فريد يربط جميع معاملات الطلب داخل النظام لضمان تتبع موحد</div><div class="en"><i>A unique identifier linking every order transaction in the system for unified tracking</i></div></td>
      <td><div class="ar">الوصف بالإنجليزية: Unique identifier linking each order transaction in the system to keep tracking consistent</div><div class="en"><i>Unique identifier linking each order transaction in the system to keep tracking consistent</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">توحيد الشحنات</div><div class="en"><i>Shipment Consolidation</i></div></td>
      <td><div class="ar">الاسم بالإنجليزية: Shipment Consolidation</div><div class="en"><i>Shipment Consolidation</i></div></td>
      <td><div class="ar">دمج عدة طلبات في شحنة واحدة لخفض التكلفة وتسريع المعالجة التشغيلية</div><div class="en"><i>Combining multiple orders into one shipment to reduce cost and speed operations</i></div></td>
      <td><div class="ar">الوصف بالإنجليزية: Merging multiple orders into a single shipment to reduce cost and accelerate processing</div><div class="en"><i>Merging multiple orders into a single shipment to reduce cost and accelerate processing</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">محرك التسوية</div><div class="en"><i>Reconciliation Engine</i></div></td>
      <td><div class="ar">الاسم بالإنجليزية: Reconciliation Engine</div><div class="en"><i>Reconciliation Engine</i></div></td>
      <td><div class="ar">طبقة منطقية تقارن المدفوعات بالطلبات والمخزون لاكتشاف الفروقات الرسمية</div><div class="en"><i>A logic layer comparing payments to orders and inventory to detect official variances</i></div></td>
      <td><div class="ar">الوصف بالإنجليزية: Logic layer comparing payments to orders and inventory to detect discrepancies</div><div class="en"><i>Logic layer comparing payments to orders and inventory to detect discrepancies</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">المطابقة المزدوجة</div><div class="en"><i>Dual Matching</i></div></td>
      <td><div class="ar">الاسم بالإنجليزية: Dual Matching</div><div class="en"><i>Dual Matching</i></div></td>
      <td><div class="ar">خطوة تحقق مشتركة بين مركزي السعودية واليمن قبل التسليم النهائي لضمان التوافق الكامل</div><div class="en"><i>A joint verification step between the KSA and Yemen hubs before final delivery to ensure full alignment</i></div></td>
      <td><div class="ar">الوصف بالإنجليزية: Verification step between the KSA and Yemen hubs before final delivery to guarantee alignment</div><div class="en"><i>Verification step between the KSA and Yemen hubs before final delivery to guarantee alignment</i></div></td>
    </tr>
  </tbody>
</table>

---

## **11. 🔗 جدول المواءمة بين الأهداف والقيمة | Objectives vs Value Table**

<div class="ar"><strong>الوصف:</strong></div>
<div class="ar">يوضح الجدول كيفية ارتباط الأهداف الاستراتيجية بالقيمة المتحققة لكل فئة لضمان اتساق القرارات الاستثمارية.</div>
<div class="en"><i><strong>Description:</strong></i></div>
<div class="en"><i>The table shows how strategic objectives translate into value for each group to keep investment decisions aligned.</i></div>

<table class="doc-table">
  <thead>
    <tr>
      <th class="center"><span class="ar">الهدف الاستراتيجي</span><br><span class="en"><i>Strategic Objective</i></span></th>
      <th><span class="ar">قيمة العملاء</span><br><span class="en"><i>Customer Value</i></span></th>
      <th><span class="ar">قيمة الفريق</span><br><span class="en"><i>Team Value</i></span></th>
      <th><span class="ar">قيمة الأعمال</span><br><span class="en"><i>Business Value</i></span></th>
      <th><span class="ar">قيمة الشركاء</span><br><span class="en"><i>Partner Value</i></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="center"><div class="ar">توسيع الإيرادات</div><div class="en"><i>Revenue Expansion</i></div></td>
      <td><div class="ar">عروض مجمعة وخيارات دفع مرنة تزيد الولاء وتكرار الشراء</div><div class="en"><i>Bundle offers and flexible payments that grow loyalty and repeat purchases</i></div></td>
      <td><div class="ar">أدوات تحصيل مبسطة تربط الطلب بالمخزون وتقلل الأخطاء المحاسبية</div><div class="en"><i>Simplified collection tools linking orders to inventory that reduce accounting errors</i></div></td>
      <td><div class="ar">نمو الربحية عبر سلال أعلى ومبيعات متكررة مع رؤية أوضح للهوامش</div><div class="en"><i>Profit growth through higher baskets and repeat sales with clearer margin visibility</i></div></td>
      <td><div class="ar">عمولات واضحة وتقارير مشتركة تعزز ثقة الوسطاء وتسرّع التسويات</div><div class="en"><i>Transparent commissions and shared reports that strengthen partner trust and speed settlements</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">التميز التشغيلي</div><div class="en"><i>Operational Excellence</i></div></td>
      <td><div class="ar">خدمة أسرع مع تحديثات حالة فورية تقلل قلق العملاء وتعزز رضاهم</div><div class="en"><i>Faster service with real-time updates reducing customer anxiety and boosting satisfaction</i></div></td>
      <td><div class="ar">مسار عمل موحد يقلل الجهد المكرر ويعجّل دمج الموظفين الجدد</div><div class="en"><i>Unified workflow removing duplicate effort and accelerating onboarding</i></div></td>
      <td><div class="ar">خفض التكاليف عبر أتمتة المهام الروتينية وتحسين الإنتاجية اليومية</div><div class="en"><i>Cost reduction by automating routine tasks and improving daily productivity</i></div></td>
      <td><div class="ar">تكامل أسهل وخفض الحاجة إلى المتابعة اليدوية المكلفة في المشاريع المشتركة</div><div class="en"><i>Streamlined integrations with less costly manual follow-up in joint projects</i></div></td>
    </tr>
    <tr>
      <td class="center"><div class="ar">الحوكمة والامتثال</div><div class="en"><i>Governance &amp; Compliance</i></div></td>
      <td><div class="ar">شفافية كاملة في حقوق العميل وإشعاراته مما يعزز الثقة والاحتفاظ</div><div class="en"><i>Full transparency on customer rights and notifications that improve trust and retention</i></div></td>
      <td><div class="ar">سياسات دقيقة تقلل الأخطاء البشرية وتوضح مسؤوليات كل فريق</div><div class="en"><i>Precise policies reducing human error and clarifying each team’s responsibilities</i></div></td>
      <td><div class="ar">حماية قانونية وتقارير تدقيق جاهزة تدعم القرارات السريعة والاستثمارات الجديدة</div><div class="en"><i>Legal protection and audit-ready reports supporting rapid decisions and new investments</i></div></td>
      <td><div class="ar">ثقة أعلى لدى الشركاء والجهات المنظمة بفضل الالتزام الموثق والرقابة المستمرة</div><div class="en"><i>Greater trust from partners and regulators through documented compliance and continuous oversight</i></div></td>
    </tr>
  </tbody>
</table>
