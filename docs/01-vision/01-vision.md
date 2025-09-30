# 📝 وثيقة الرؤية | Vision Document

---

> **🗂️ المشروع | Project**
> <div dir="rtl">منصة الوساطة الشرائية <b>CA Admin</b></div>
> <div dir="ltr"><em>CA Admin Shopping Mediation Platform</em></div>
>
> **🧰 المكدس التقني | Tech Stack**
> 🔹 Flutter | <span dir="rtl">فلاتر</span><br>
> 🔹 Firebase (Firestore, Auth, Storage, Functions) | <span dir="rtl">فايربيس (Firestore, Auth, Storage, Functions)</span>
>
> **🏷️ الإصدار | Version**
> <div dir="ltr"><b>0.1 (Vision)</b> — Owner: <b>Abdullah Alshaif</b> — Last Updated: <b>2025-09-29</b></div>
---

## 1. 👀 النظرة العامة | Overview

**👀 النظرة العامة | Overview**
<p dir=rtl>🔹 تقدم الوثيقة رؤية شاملة للمنصة، أهدافها، وأساسها التقني لضمان وضوح القيمة لجميع الأطراف.</p>
<p dir=ltr><em>🔹 The document provides a comprehensive view of the platform, its goals, and technology foundation to clarify value for every stakeholder.</em></p>

---

## 2. 📌 العناصر الرئيسية | Key Elements

<table class="doc-table">
  <thead>
    <tr>
      <th>
        <span dir="rtl">العنصر 🏷️</span><br>
        <span dir="ltr"><i>Element</i></span>
      </th>
      <th>
        <span dir="rtl">التفاصيل</span><br>
        <span dir="ltr"><i>Details</i></span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div dir="rtl">🏢 <b>المؤسسة</b></div>
        <div dir="ltr"><em><b>Organization</b></em></div>
      </td>
      <td>
        <div dir="rtl">الإدارة العامة <b>CA Admin DmG Headquarters</b></div>
        <div dir="ltr"><em>CA Admin DmG Headquarters</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl">🌐 <b>نطاق الحل</b></div>
        <div dir="ltr"><em><b>Solution Scope</b></em></div>
      </td>
      <td>
        <div dir="rtl">منصة وساطة للتسوق عبر الحدود تخدم <b>اليمن والسعودية</b> مع ربط رقمي متكامل</div>
        <div dir="ltr"><em>A cross-border shopping mediation platform serving <b>Yemen and Saudi Arabia</b> with integrated digital linkages</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl">🚀 <b>الرؤية الإدارية</b></div>
        <div dir="ltr"><em><b>Management Vision</b></em></div>
      </td>
      <td>
        <div dir="rtl">تسريع الطلبات، الشحن، والمدفوعات عبر <b>مسار رقمي واحد وشفاف</b></div>
        <div dir="ltr"><em>Accelerate orders, shipping, and payments through a <b>single transparent digital lane</b></em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl">🎯 <b>الجمهور الأساسي</b></div>
        <div dir="ltr"><em><b>Primary Audience</b></em></div>
      </td>
      <td>
        <div dir="rtl">المتسوقون، فرق العمليات، المالية، الشركاء، القيادة التنفيذية</div>
        <div dir="ltr"><em>Shoppers, operations teams, finance, partners, executive leadership</em></div>
      </td>
    </tr>
  </tbody>
  
</table>

---

## 3. ℹ️ مقدمة | Introduction

### 3.1. 👁️ نظرة بصرية عامة | Visual Overview

**الوصف | Description**
<p dir=rtl>يوضح المخطط رحلة الطلب من إنشاء العميل حتى تسليم الشحنة مع إبراز نقاط التفاعل المالية والتحليلية.</p>
<p dir=ltr><em>The diagram shows the order journey from customer initiation to delivery while flagging finance and analytics touchpoints.</em></p>

```mermaid
flowchart TD
  %% ========== Nodes ==========
  C((👤 العميل\nCustomer)):::start

  subgraph S1[🟦 الاستلام والمعالجة\nIntake & Processing]
    IN["📝 استلام الطلب\nOrder Intake"]:::stage
    GP["🌐 المشتريات العالمية\nGlobal Procurement"]:::stage
  end

  subgraph S2[🟨 الشحن والمراكز\nShipping & Hubs]
    KSA["🇸🇦 مركز المملكة العربية السعودية\nKSA Hub"]:::hub
    YEM["🇾🇪 مركز اليمن\nYemen Hub"]:::hub
    LMD["🚚 التسليم النهائي\nLast Mile Delivery"]:::stage
    DC["✅ تأكيد الاستلام\nDelivery Confirmation"]:::milestone
  end

  subgraph S3[🟩 المالية والتحليلات\nFinance & Insights]
    FIN["💰 عمليات المالية\nFinance Ops"]:::stage
    ANA["📊 تحليلات الأعمال\nAnalytics"]:::stage
    SR["🧭 تقارير استراتيجية\nStrategic Reports"]:::milestone
    LDR["🏛️ القيادة التنفيذية\nLeadership"]:::stake
    SUP["🎧 دعم العملاء\nCustomer Support"]:::stage
  end

  %% ========== Flows ==========
  C -->|🆕 طلب جديد\nNew Order| IN
  IN -->|🛒 شراء عالمي\nGlobal Procurement| GP
  GP -->|🛳️ شحن إلى المملكة\nShip to KSA| KSA
  KSA -->|📦 تحويل إلى اليمن\nForward to Yemen| YEM
  YEM -->|🚚 التسليم الأخير\nLast Mile| LMD
  LMD -->|✅ تأكيد الاستلام\nDelivery Confirmation| DC
  DC -->|🔔 إشعار للعميل\nNotify| C

  IN -. 💳 إدخال مالي\nFinance Entry .-> FIN
  FIN -. 📈 مشاركة الرؤى\nShare Insights .-> ANA
  ANA -. 📝 تقارير\nReports .-> SR
  SR -. 🗳️ قرار وتنفيذ\nDecision .-> LDR
  FIN -. ⚠️ تصعيد الحالات\nCase Escalation .-> SUP

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

### 3.2. 🧭 رحلة القيمة المبسطة | Simplified Value Journey

**الوصف | Description**
<p dir=rtl>يبيّن المخطط دور كل طرف في كل مرحلة لضمان وضوح المسؤوليات وسرعة التسليم.</p>
<p dir=ltr><em>The chart clarifies how each party contributes at every stage to keep responsibilities clear and delivery timely.</em></p>

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
  title 🌟 رحلة القيمة لمنصة CA Admin\nCA Admin Value Journey

  section 👥 العملاء\nCustomers
    🆕 طلب جديد\nNew Order: 5: 👤 العميل\nCustomer
    📊 تتبع الحالة\nTrack Status: 4: 👤 العميل\nCustomer
    💳 سداد الفاتورة\nPay Invoice: 4: 👤 العميل\nCustomer

  section 🛠️ العمليات\nOperations
    ✅ التحقق من الطلب\nValidate Order: 5: 🧑‍💻 المشغل\nOperator
    🚚 تنسيق الشحن\nCoordinate Shipment: 4: 🧑‍💻 المشغل\nOperator
    🔄 تحديث الحالة\nUpdate Status: 4: 🧑‍💻 المشغل\nOperator

  section 💰 المالية\nFinance
    💵 تسوية المدفوعات\nReconcile Payments: 5: 💼 المالية\nFinance
    📑 نشر التقارير\nPublish Reports: 3: 💼 المالية\nFinance
```

### 3.3. 🏁 سياق المنصة | Platform Context

**الوصف | Description**
<p dir=rtl>يلخص هذا الجزء رسالة المنصة، الشرائح المستفيدة، والمبادئ التصميمية لضمان الاتساق.</p>
<p dir=ltr><em>This section outlines the platform mission, beneficiary segments, and design principles to keep the experience consistent.</em></p>

- <div class="ar">🔹 🎯 **المهمة الأساسية:** تقديم مركز عمليات موحد لإدارة الطلبات، الشحن، والمدفوعات عبر الحدود بسهولة وشفافية.</div>
  <div class="en"><i>🔹 🎯 **Core Mission:** Deliver a unified operations hub that manages cross-border orders, shipping, and payments with ease and transparency.</i></div>
- <div class="ar">🔹 🧭 **وصف المنصة:** حل متكامل يربط إنشاء الطلب بوثائق الشحن والسجلات المالية دون ازدواجية بيانات.</div>
  <div class="en"><i>🔹 🧭 **Platform Definition:** An integrated solution linking order creation with shipping documents and financial records without data duplication.</i></div>
- <div class="ar">🔹 🛠️ **الوظيفة الرئيسية:** تنسيق تدفق العمل من الاستلام حتى الإغلاق مع أدوات رقابة وتقارير وأتمتة للمهام الحرجة.</div>
  <div class="en"><i>🔹 🛠️ **Primary Function:** Orchestrate workflow from intake to closure with controls, reporting, and automation for critical tasks.</i></div>
- <div class="ar">🔹 🏆 **المنفعة المتوقعة:** خفض العمل اليدوي ورفع رضا العملاء عبر مصدر موحد للحقيقة وإشعارات فورية.</div>
  <div class="en"><i>🔹 🏆 **Expected Benefit:** Reduce manual effort and raise customer satisfaction through a single source of truth and instant notifications.</i></div>
- <div class="ar">🔹 👥 **شرائح الخدمة:** المتسوقون، خدمة العملاء، مشغلو العمليات، فرق المالية، القيادة التنفيذية.</div>
  <div class="en"><i>🔹 👥 **Target Segments:** Shoppers, customer service teams, operations operators, finance teams, executive leadership.</i></div>
- <div class="ar">🔹 ✨ **مبدأ التجربة:** كل رحلة يجب أن تكون قابلة للتتبع، ثنائية اللغة، وقادرة على العمل دون اتصال لضمان التبني.</div>
  <div class="en"><i>🔹 ✨ **Experience Principle:** Every journey must be traceable, bilingual, and offline-ready to ensure adoption.</i></div>

---

## 4. 🚀 لماذا الآن | Why Now

- <div class="ar">🔹 📈 **تسارع التجارة العابرة للحدود:** تنمو احتياجات الشراء الدولي في اليمن بنسبة ‎35٪‎ سنويًا رغم تحديات البنية التحتية.</div>
  <div class="en"><i>🔹 📈 **Cross-border Commerce Acceleration:** International shopping needs in Yemen grow by 35% annually despite infrastructure hurdles.</i></div>
  - <div class="ar">🔹 🧩 **الفائدة:** يبرر الاستثمار الفوري في منصة قابلة للتوسع تستوعب النمو وتقدم تجربة موحدة.</div>
    <div class="en"><i>🔹 🧩 **Benefit:** Justifies immediate investment in a scalable platform that absorbs growth and keeps the experience unified.</i></div>
- <div class="ar">🔹 🗂️ **تشتت العمليات اليدوية:** تتكرر الطلبات في جداول ومحادثات متفرقة مما يهدر الوقت ويصعّب التدقيق.</div>
  <div class="en"><i>🔹 🗂️ **Manual Fragmentation:** Orders repeat across scattered sheets and chats, wasting time and complicating audits.</i></div>
  - <div class="ar">🔹 🧩 **الفائدة:** يؤكد ضرورة الأتمتة المركزية لتقليل الأخطاء وتسريع المتابعة التشغيلية.</div>
    <div class="en"><i>🔹 🧩 **Benefit:** Underlines the need for centralized automation to cut errors and speed operational follow-up.</i></div>
- <div class="ar">🔹 🛡️ **توقعات الثقة والامتثال:** يتطلب العملاء والشركاء إيصالات رقمية متوافقة مع اللوائح السعودية واليمنية منذ البداية.</div>
  <div class="en"><i>🔹 🛡️ **Trust & Compliance Expectations:** Customers and partners demand digital receipts aligned with Saudi and Yemeni regulations from day one.</i></div>
  - <div class="ar">🔹 🧩 **الفائدة:** يدفع لتجهيز ضوابط الحوكمة المبكرة لضمان الامتثال وتقوية سمعة العلامة.</div>
    <div class="en"><i>🔹 🧩 **Benefit:** Drives early governance controls to ensure compliance and reinforce brand reputation.</i></div>

---

## 5. ⚠️ التحديات المحورية | Core Challenges

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
  Legacy["📂 سجلات مجزأة\nFragmented Records"]:::issue
  Errors["❌ أخطاء بيانات\nData Errors"]:::critical
  Delays["⏳ تأخيرات الشحن\nShipping Delays"]:::result
  Claims["📢 شكاوى العملاء\nCustomer Claims"]:::impact
  Finance["💰 مالية غير مسوية\nUnreconciled Finance"]:::issue
  Policies["📜 سياسات مفقودة\nMissing Policies"]:::issue
  Skills["🎓 مهارات محدودة\nLimited Training"]:::issue

  Legacy --> Errors
  Errors --> Delays
  Delays --> Claims
  Finance --> Delays
  Policies --> Errors
  Skills --> Errors

  classDef issue fill:#fef9c3,stroke:#eab308,stroke-width:1.5px,color:#713f12;
  classDef critical fill:#fee2e2,stroke:#ef4444,stroke-width:2px,color:#991b1b;
  classDef result fill:#dbeafe,stroke:#2563eb,stroke-width:1.5px,color:#1e3a8a;
  classDef impact fill:#dcfce7,stroke:#16a34a,stroke-width:1.5px,color:#065f46;
```

- <div class="ar">🔹 🔍 **عمى تشغيلي:** لا يمكن ربط حالة الشحنة بالطلب أو العميل من خلال مصدر واحد مما يؤخر القرارات.</div>
  <div class="en"><i>🔹 🔍 **Operational Blind Spots:** Shipment status cannot be tied to an order or customer within a single source, delaying decisions.</i></div>
  - <div class="ar">🔹 🧩 **الفائدة:** يحفز بناء لوحة متابعة موحدة ودمج الحالة عبر الأنظمة.</div>
    <div class="en"><i>🔹 🧩 **Benefit:** Encourages building a unified monitoring dashboard and integrating status across systems.</i></div>
- <div class="ar">🔹 💸 **اختلال السجلات المالية:** التسويات اليدوية وتعدد العملات تؤدي إلى فروقات في الأرصدة وتقارير متعارضة.</div>
  <div class="en"><i>🔹 💸 **Financial Record Confusion:** Manual reconciliations and currency switches create balance gaps and conflicting reports.</i></div>
  - <div class="ar">🔹 🧩 **الفائدة:** يبرز ضرورة وجود محرك تسوية خفيف يحافظ على التوافق بين الطلبات والمدفوعات.</div>
    <div class="en"><i>🔹 🧩 **Benefit:** Highlights the need for a lightweight reconciliation engine that keeps orders and payments aligned.</i></div>
- <div class="ar">🔹 🧠 **فجوات المعرفة والإجراءات:** غياب أدلة موحدة يعرقل الإحلال ويخلق تفاوتًا في جودة الخدمة بين المناطق.</div>
  <div class="en"><i>🔹 🧠 **Knowledge & Process Gaps:** Missing playbooks hinder handovers and create uneven service quality across regions.</i></div>
  - <div class="ar">🔹 🧩 **الفائدة:** يدعم إنشاء أدلة رقمية مدمجة وتدريب متسق داخل النظام.</div>
    <div class="en"><i>🔹 🧩 **Benefit:** Supports building embedded digital playbooks and consistent in-app training.</i></div>

### 5.1. 🎯 الحالة الحالية والمستهدفة | Current vs Target State

<table class="doc-table">
  <thead>
    <tr>
      <th>
        <span dir="rtl">📌 البعد</span><br>
        <span dir="ltr"><i>Aspect</i></span>
      </th>
      <th>
        <span dir="rtl">📍 الحالة الحالية</span><br>
        <span dir="ltr"><i>Current State</i></span>
      </th>
      <th>
        <span dir="rtl">🎯 الحالة المستهدفة</span><br>
        <span dir="ltr"><i>Target State</i></span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div dir="rtl"><b>🧾 الطلبات</b></div>
        <div dir="ltr"><em><b>Orders</b></em></div>
      </td>
      <td>
        <div dir="rtl">إدخال يدوي مع اعتماد متأخر يؤدي إلى بطء التنفيذ</div>
        <div dir="ltr"><em>Manual entry with delayed approvals that slow execution</em></div>
      </td>
      <td>
        <div dir="rtl">تدفق رقمي كامل مع إشعارات فورية ومسار تدقيق واضح</div>
        <div dir="ltr"><em>Fully digital flow with instant notifications and a clear audit trail</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl"><b>🚚 الشحن</b></div>
        <div dir="ltr"><em><b>Shipping</b></em></div>
      </td>
      <td>
        <div dir="rtl">تحديثات متقطعة بدون أدلة مما يرفع التصعيدات</div>
        <div dir="ltr"><em>Irregular updates without evidence escalating disputes</em></div>
      </td>
      <td>
        <div dir="rtl">تتبع لحظي مع صور إثبات وتأكيد تسليم موحد</div>
        <div dir="ltr"><em>Real-time tracking with proof images and unified delivery confirmation</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl"><b>💰 المالية</b></div>
        <div dir="ltr"><em><b>Finance</b></em></div>
      </td>
      <td>
        <div dir="rtl">دفاتر متباينة عبر العملات تعرقل التسوية الدقيقة</div>
        <div dir="ltr"><em>Disparate ledgers across currencies blocking accurate reconciliation</em></div>
      </td>
      <td>
        <div dir="rtl">تسويات مؤتمتة وتحويلات فورية عبر القنوات المعتمدة</div>
        <div dir="ltr"><em>Automated reconciliations with instant transfers across approved channels</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl"><b>📊 التقارير</b></div>
        <div dir="ltr"><em><b>Reporting</b></em></div>
      </td>
      <td>
        <div dir="rtl">تقارير أسبوعية في جداول Excel تحد من الرؤية اللحظية</div>
        <div dir="ltr"><em>Weekly Excel reports limiting real-time visibility</em></div>
      </td>
      <td>
        <div dir="rtl">لوحات تحليل مباشرة قابلة للتنقيب تدعم القرار السريع</div>
        <div dir="ltr"><em>Live drill-down dashboards supporting rapid decision-making</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl"><b>📈 القابلية للتوسع</b></div>
        <div dir="ltr"><em><b>Scalability</b></em></div>
      </td>
      <td>
        <div dir="rtl">اعتماد على أفراد محددين يهدد الاستمرارية التشغيلية</div>
        <div dir="ltr"><em>Dependence on key individuals risking operational continuity</em></div>
      </td>
      <td>
        <div dir="rtl">عمليات موثقة قابلة للتكرار مع توزيع أدوار واضح</div>
        <div dir="ltr"><em>Documented repeatable processes with clear role distribution</em></div>
      </td>
    </tr>
  </tbody>
</table>

---

## 6. 💡 الرؤية والقيمة | Vision & Value

```mermaid
flowchart LR
  ROOT["🚀 منصة CA Admin\nCA Admin Platform"]
  CUST["👥 قيمة العملاء\nCustomer Value"]
  TEAM["🤝 قيمة الفرق\nTeam Value"]
  BIZ["🏢 قيمة الأعمال\nBusiness Value"]
  PART["🌍 قيمة الشركاء\nPartner Value"]
  T1["📡 تتبع لحظي\nReal-time Tracking"]
  T2["💳 مدفوعات مرنة\nFlexible Payments"]
  T3["📴 تشغيل دون اتصال\nOffline-first Ops"]
  T4["📑 قوالب موحدة\nStandard Templates"]
  T5["📊 تقارير مباشرة\nLive Reporting"]
  T6["📈 قابلية التوسع\nScalable Expansion"]
  T7["💰 عمولات واضحة\nClear Commissions"]
  T8["🔗 تكامل سهل\nEasy Integrations"]

  ROOT --> CUST
  ROOT --> TEAM
  ROOT --> BIZ
  ROOT --> PART

  CUST --> T1
  CUST --> T2
  TEAM --> T3
  TEAM --> T4
  BIZ --> T5
  BIZ --> T6
  PART --> T7
  PART --> T8

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

- <div class="ar">🔹 👥 **قيمة العملاء:** ضمان مسار واضح من الاستفسار إلى التسليم مع تحديثات لحظية تعزز الثقة والولاء.</div>
  <div class="en"><i>🔹 👥 **Customer Value:** Provide a visible journey from inquiry to delivery with real-time updates that boost trust and loyalty.</i></div>
- <div class="ar">🔹 🧑‍💼 **قيمة فريق العمليات:** مسار عمل موحد يقلل الجهد المكرر ويجعل تدوير الأفراد أكثر سلاسة.</div>
  <div class="en"><i>🔹 🧑‍💼 **Operations Team Value:** A unified workflow that removes duplicated effort and smooths staff rotations.</i></div>
- <div class="ar">🔹 💼 **قيمة الأعمال:** تحويل البيانات التشغيلية إلى لوحات قرار موثوقة تمكّن الإدارة من التوسع بثقة.</div>
  <div class="en"><i>🔹 💼 **Business Value:** Turn operational data into trustworthy decision dashboards enabling confident expansion.</i></div>
- <div class="ar">🔹 🤝 **قيمة الشركاء:** عمولات واضحة وتكاملات سريعة تعزز الشفافية وتخفض المخاطر المشتركة.</div>
  <div class="en"><i>🔹 🤝 **Partner Value:** Transparent commissions and rapid integrations that enhance transparency and reduce shared risk.</i></div>

---

## 7. 🎯 الأهداف الاستراتيجية | Strategic Objectives

- <div class="ar">🔹 💰 **توسيع الإيرادات:** رفع متوسط قيمة الطلب بنسبة ‎20٪‎ عبر الباقات والاشتراكات لدعم الاستثمار المستمر.</div>
  <div class="en"><i>🔹 💰 **Revenue Expansion:** Increase average order value by 20% through bundles and subscriptions to sustain ongoing investment.</i></div>
  - <div class="ar">🔹 🧩 **الفائدة:** يتيح إطلاق خدمات ملحقة ويعزز هوامش الربح المستهدفة.</div>
    <div class="en"><i>🔹 🧩 **Benefit:** Enables ancillary services and strengthens target profit margins.</i></div>
- <div class="ar">🔹 ⚙️ **التميز التشغيلي:** خفض زمن معالجة الطلب إلى أقل من 60 ثانية عند الاستلام بفضل الأتمتة والتدريب المركز.</div>
  <div class="en"><i>🔹 ⚙️ **Operational Excellence:** Cut order processing time below 60 seconds at intake via automation and focused training.</i></div>
  - <div class="ar">🔹 🧩 **الفائدة:** يحسّن تجربة العميل ويخفض تكاليف التشغيل اليومية.</div>
    <div class="en"><i>🔹 🧩 **Benefit:** Improves customer experience and lowers daily operating costs.</i></div>
- <div class="ar">🔹 🛡️ **الحوكمة والامتثال:** فرض سياسات أدوار دقيقة وسجل تدقيق لكل معاملة مالية لحماية المنصة.</div>
  <div class="en"><i>🔹 🛡️ **Governance & Compliance:** Enforce precise role policies and audit trails for each financial transaction to protect the platform.</i></div>
  - <div class="ar">🔹 🧩 **الفائدة:** يقلل التعرض القانوني ويرفع ثقة المنظمين والشركاء.</div>
    <div class="en"><i>🔹 🧩 **Benefit:** Reduces legal exposure and increases regulator and partner confidence.</i></div>

---

## 8. 🛠️ نطاق الإصدار الأولي | MVP Scope

- <div class="ar">🔹 📝 **وحدة الطلبات:** إنشاء، تقسيم، وربط الطلبات بمكتبة العملاء والمرفقات لضمان اكتمال البيانات وتاريخها.</div>
  <div class="en"><i>🔹 📝 **Orders Module:** Create, split, and link orders with the customer library and attachments to ensure complete data and history.</i></div>
  - <div class="ar">🔹 🧩 **الفائدة:** يوفر سجلًا موحدًا يسهل الرجوع إليه ويقلل فقدان المعلومات.</div>
    <div class="en"><i>🔹 🧩 **Benefit:** Provides a unified record that is easy to reference and prevents information loss.</i></div>
- <div class="ar">🔹 🚚 **متابعة الشحن:** تتبع متعدد المراحل من الشراء حتى التسليم مع طوابع زمنية وأدلة مرفقة للمراجعة.</div>
  <div class="en"><i>🔹 🚚 **Shipment Tracking:** Multi-stage tracking from purchase to delivery with timestamps and evidence attachments for review.</i></div>
  - <div class="ar">🔹 🧩 **الفائدة:** يقلل الاتصالات المتكررة ويضبط توقعات العملاء.</div>
    <div class="en"><i>🔹 🧩 **Benefit:** Reduces repeated inquiries and aligns customer expectations.</i></div>
- <div class="ar">🔹 💳 **إدارة المالية:** أرصدة، مدفوعات، تحويلات، وبطاقات هدايا مع سجل تدقيق شامل عبر المواقع.</div>
  <div class="en"><i>🔹 💳 **Finance Management:** Balances, payments, transfers, and gift cards with a comprehensive cross-site audit log.</i></div>
  - <div class="ar">🔹 🧩 **الفائدة:** يضمن تطابق الأرقام بين المتاجر والبنوك والمستخدمين بشكل فوري.</div>
    <div class="en"><i>🔹 🧩 **Benefit:** Ensures numbers match instantly across stores, banks, and users.</i></div>

---

## 9. 📊 مؤشرات النجاح (KPIs) | Success Metrics (KPIs)

<table class="doc-table">
  <thead>
    <tr>
      <th>
        <span dir="rtl">📌 المؤشر</span><br>
        <span dir="ltr"><i>KPI</i></span>
      </th>
      <th>
        <span dir="rtl">📍 خط الأساس</span><br>
        <span dir="ltr"><i>Baseline</i></span>
      </th>
      <th>
        <span dir="rtl">🎯 الهدف</span><br>
        <span dir="ltr"><i>Target</i></span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div dir="rtl"><b>⏱️ زمن استلام الطلب</b></div>
        <div dir="ltr"><em><b>Order Intake Time</b></em></div>
      </td>
      <td>
        <div dir="rtl">180 ثانية</div>
        <div dir="ltr"><em>180 seconds</em></div>
      </td>
      <td>
        <div dir="rtl">≤ 60 ثانية (المئين ‎90‎)</div>
        <div dir="ltr"><em>≤ 60 seconds (P90)</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl"><b>🚚 حداثة حالة الشحن</b></div>
        <div dir="ltr"><em><b>Shipment Status Freshness</b></em></div>
      </td>
      <td>
        <div dir="rtl">تحديث كل 8 ساعات</div>
        <div dir="ltr"><em>Updates every 8 hours</em></div>
      </td>
      <td>
        <div dir="rtl">تحديث كل ساعة</div>
        <div dir="ltr"><em>Hourly updates</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl"><b>💰 دقة التسوية المالية</b></div>
        <div dir="ltr"><em><b>Financial Reconciliation Accuracy</b></em></div>
      </td>
      <td>
        <div dir="rtl">‎92٪‎</div>
        <div dir="ltr"><em>92%</em></div>
      </td>
      <td>
        <div dir="rtl">≥ ‎99٪‎</div>
        <div dir="ltr"><em>≥ 99%</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl"><b>📑 زمن إعداد التقارير</b></div>
        <div dir="ltr"><em><b>Report Preparation Time</b></em></div>
      </td>
      <td>
        <div dir="rtl">يوم عمل واحد</div>
        <div dir="ltr"><em>1 business day</em></div>
      </td>
      <td>
        <div dir="rtl">≤ 5 دقائق</div>
        <div dir="ltr"><em>≤ 5 minutes</em></div>
      </td>
    </tr>
  </tbody>
</table>

---

## 10. 🗺️ خارطة الإصدارات | Release Roadmap

```mermaid
timeline

  2024-09-01 : 🚀 المرحلة الأولى – الطلبات، الشحن، المالية، والعمل دون اتصال\nPhase 1 - Orders, Shipping, Finance, Offline-first
  2024-10-15 : 📊 المرحلة الثانية – بطاقات الهدايا، لوحات الأداء، وبوابات الدفع\nPhase 2 - Gift Cards, Dashboards, Payment Gateways
  2024-12-01 : 🌐 المرحلة الثالثة – البوابة الويب، تكامل واجهات الشركاء، والتحليلات التنبؤية\nPhase 3 - Web Portal, Partner APIs, Predictive Analytics
```

---

## 11. ⚠️ المخاطر وخطط التخفيف | Risks & Mitigations

<table class="doc-table">
  <thead>
    <tr>
      <th>
        <span dir="rtl">📌 الخطر</span><br>
        <span dir="ltr"><i>Risk</i></span>
      </th>
      <th>
        <span dir="rtl">💥 التأثير</span><br>
        <span dir="ltr"><i>Impact</i></span>
      </th>
      <th>
        <span dir="rtl">🛡️ خطة التخفيف</span><br>
        <span dir="ltr"><i>Mitigation</i></span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div dir="rtl"><b>🔄 تعارض البيانات أثناء المزامنة</b></div>
        <div dir="ltr"><em><b>Data conflicts during sync</b></em></div>
      </td>
      <td>
        <div dir="rtl">أرصدة غير صحيحة وتعطل التقارير التحليلية</div>
        <div dir="ltr"><em>Incorrect balances and disrupted analytics reports</em></div>
      </td>
      <td>
        <div dir="rtl">تطبيق تنافس متفائل مع سجل تدقيق مركزي يوفر استرجاعًا دقيقًا للإصدارات</div>
        <div dir="ltr"><em>Apply optimistic concurrency with a central audit log to recover accurate versions</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl"><b>📊 حدود فهارس Firestore</b></div>
        <div dir="ltr"><em><b>Firestore index limits</b></em></div>
      </td>
      <td>
        <div dir="rtl">استعلامات بطيئة تؤثر على أداء المنصة</div>
        <div dir="ltr"><em>Slow queries impacting platform performance</em></div>
      </td>
      <td>
        <div dir="rtl">تصميم فهارس مركبة مسبقًا وتقسيم البيانات مبكرًا لتوزيع الحمل</div>
        <div dir="ltr"><em>Pre-design composite indexes and shard data early to distribute load</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl"><b>🔐 أدوار غير مضبوطة</b></div>
        <div dir="ltr"><em><b>Misconfigured roles</b></em></div>
      </td>
      <td>
        <div dir="rtl">كشف بيانات حساسة أو تنفيذ عمليات غير مصرح بها</div>
        <div dir="ltr"><em>Sensitive data exposure or unauthorized operations</em></div>
      </td>
      <td>
        <div dir="rtl">إنشاء مصفوفة صلاحيات مدققة مع اختبارات قواعد مستمرة وآلية تنبيه فوري</div>
        <div dir="ltr"><em>Create an audited RBAC matrix with continuous rule tests and instant alerting</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl"><b>👥 الاعتماد على أفراد محددين</b></div>
        <div dir="ltr"><em><b>Dependency on key staff</b></em></div>
      </td>
      <td>
        <div dir="rtl">توقف العمليات عند الغياب أو تبدل الأدوار الحرجة</div>
        <div dir="ltr"><em>Operational halt when critical roles are absent or swapped</em></div>
      </td>
      <td>
        <div dir="rtl">توثيق الإجراءات، تعيين بدلاء، وتدوير المهام وفق جدول واضح</div>
        <div dir="ltr"><em>Document procedures, assign backups, and rotate duties on a defined schedule</em></div>
      </td>
    </tr>
  </tbody>
</table>

---

## 12. 🧾 مسرد المصطلحات | Glossary

<table class="doc-table">
  <thead>
    <tr>
      <th>
        <span dir="rtl">📌 المصطلح</span><br>
        <span dir="ltr"><i>Term</i></span>
      </th>
      <th>
        <span dir="rtl">📖 التعريف بالعربية</span><br>
        <span dir="ltr"><i>Definition (AR)</i></span>
      </th>
      <th>
        <span dir="rtl">📖 التعريف بالإنجليزية</span><br>
        <span dir="ltr"><i>Definition (EN)</i></span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div dir="rtl"><b>🔢 رقم الطلب</b></div>
        <div dir="ltr"><em><b>Order Number</b></em></div>
      </td>
      <td>
        <div dir="rtl">معرف فريد يربط جميع معاملات الطلب داخل النظام لضمان تتبع موحد</div>
        <div dir="ltr"><em>A unique identifier linking every order transaction in the system for unified tracking</em></div>
      </td>
      <td>
        <div dir="ltr"><em>Unique identifier linking each order transaction in the system to keep tracking consistent</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl"><b>📦 توحيد الشحنات</b></div>
        <div dir="ltr"><em><b>Shipment Consolidation</b></em></div>
      </td>
      <td>
        <div dir="rtl">دمج عدة طلبات في شحنة واحدة لخفض التكلفة وتسريع المعالجة التشغيلية</div>
        <div dir="ltr"><em>Combining multiple orders into one shipment to reduce cost and speed operations</em></div>
      </td>
      <td>
        <div dir="ltr"><em>Merging multiple orders into a single shipment to reduce cost and accelerate processing</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl"><b>⚖️ محرك التسوية</b></div>
        <div dir="ltr"><em><b>Reconciliation Engine</b></em></div>
      </td>
      <td>
        <div dir="rtl">طبقة منطقية تقارن المدفوعات بالطلبات والمخزون لاكتشاف الفروقات الرسمية</div>
        <div dir="ltr"><em>A logic layer comparing payments to orders and inventory to detect official variances</em></div>
      </td>
      <td>
        <div dir="ltr"><em>Logic layer comparing payments to orders and inventory to detect discrepancies</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl"><b>✅ المطابقة المزدوجة</b></div>
        <div dir="ltr"><em><b>Dual Matching</b></em></div>
      </td>
      <td>
        <div dir="rtl">خطوة تحقق مشتركة بين مركزي السعودية واليمن قبل التسليم النهائي لضمان التوافق الكامل</div>
        <div dir="ltr"><em>A joint verification step between the KSA and Yemen hubs before final delivery to ensure full alignment</em></div>
      </td>
      <td>
        <div dir="ltr"><em>Verification step between the KSA and Yemen hubs before final delivery to guarantee alignment</em></div>
      </td>
    </tr>
  </tbody>
</table>

---

## 13. 🔗 جدول المواءمة بين الأهداف والقيمة | Objectives vs Value Table

**الوصف | Description**
<p dir=rtl>يوضح الجدول كيفية ارتباط الأهداف الاستراتيجية بالقيمة المتحققة لكل فئة لضمان اتساق القرارات الاستثمارية.</p>
<p dir=ltr><em>The table shows how strategic objectives translate into value for each group to keep investment decisions aligned.</em></p>

<table class="doc-table">
  <thead>
    <tr>
      <th>
        <span dir="rtl">🎯 الهدف الاستراتيجي</span><br>
        <span dir="ltr"><i>Strategic Objective</i></span>
      </th>
      <th>
        <span dir="rtl">👥 قيمة العملاء</span><br>
        <span dir="ltr"><i>Customer Value</i></span>
      </th>
      <th>
        <span dir="rtl">👨‍💻 قيمة الفريق</span><br>
        <span dir="ltr"><i>Team Value</i></span>
      </th>
      <th>
        <span dir="rtl">🏢 قيمة الأعمال</span><br>
        <span dir="ltr"><i>Business Value</i></span>
      </th>
      <th>
        <span dir="rtl">🤝 قيمة الشركاء</span><br>
        <span dir="ltr"><i>Partner Value</i></span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div dir="rtl"><b>💰 توسيع الإيرادات</b></div>
        <div dir="ltr"><em><b>Revenue Expansion</b></em></div>
      </td>
      <td>
        <div dir="rtl">عروض مجمعة ومدفوعات مرنة تزيد الولاء وتكرار الشراء</div>
        <div dir="ltr"><em>Bundle offers and flexible payments that grow loyalty and repeat purchases</em></div>
      </td>
      <td>
        <div dir="rtl">أدوات تحصيل مبسطة تربط الطلبات بالمخزون لتقليل أخطاء المحاسبة</div>
        <div dir="ltr"><em>Simplified collection tools linking orders to inventory that reduce accounting errors</em></div>
      </td>
      <td>
        <div dir="rtl">نمو الأرباح عبر سلال أعلى ومبيعات متكررة مع وضوح أفضل للهوامش</div>
        <div dir="ltr"><em>Profit growth through higher baskets and repeat sales with clearer margin visibility</em></div>
      </td>
      <td>
        <div dir="rtl">عمولات شفافة وتقارير مشتركة تعزز ثقة الشركاء وتسّرع التسويات</div>
        <div dir="ltr"><em>Transparent commissions and shared reports that strengthen partner trust and speed settlements</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl"><b>⚙️ التميز التشغيلي</b></div>
        <div dir="ltr"><em><b>Operational Excellence</b></em></div>
      </td>
      <td>
        <div dir="rtl">خدمة أسرع مع تحديثات لحظية تخفف قلق العملاء وتعزز رضاهم</div>
        <div dir="ltr"><em>Faster service with real-time updates reducing customer anxiety and boosting satisfaction</em></div>
      </td>
      <td>
        <div dir="rtl">مسار عمل موحد يزيل الجهد المكرر ويسرّع دمج الأعضاء الجدد</div>
        <div dir="ltr"><em>Unified workflow removing duplicate effort and accelerating onboarding</em></div>
      </td>
      <td>
        <div dir="rtl">خفض التكاليف عبر أتمتة المهام الروتينية وتحسين الإنتاجية اليومية</div>
        <div dir="ltr"><em>Cost reduction by automating routine tasks and improving daily productivity</em></div>
      </td>
      <td>
        <div dir="rtl">تكاملات أكثر سلاسة مع متابعة يدوية أقل كلفة في المشاريع المشتركة</div>
        <div dir="ltr"><em>Streamlined integrations with less costly manual follow-up in joint projects</em></div>
      </td>
    </tr>
    <tr>
      <td>
        <div dir="rtl"><b>🛡️ الحوكمة والامتثال</b></div>
        <div dir="ltr"><em><b>Governance & Compliance</b></em></div>
      </td>
      <td>
        <div dir="rtl">شفافية كاملة في حقوق العميل وإشعارات تحسّن الثقة والاحتفاظ</div>
        <div dir="ltr"><em>Full transparency on customer rights and notifications that improve trust and retention</em></div>
      </td>
      <td>
        <div dir="rtl">سياسات دقيقة تقلل الأخطاء البشرية وتوضح مسؤوليات كل فريق</div>
        <div dir="ltr"><em>Precise policies reducing human error and clarifying each team’s responsibilities</em></div>
      </td>
      <td>
        <div dir="rtl">حماية قانونية وتقارير جاهزة للتدقيق تدعم القرارات السريعة والاستثمارات الجديدة</div>
        <div dir="ltr"><em>Legal protection and audit-ready reports supporting rapid decisions and new investments</em></div>
      </td>
      <td>
        <div dir="rtl">ثقة أعلى من الشركاء والمنظمين بفضل التزام موثق ورقابة مستمرة</div>
        <div dir="ltr"><em>Greater trust from partners and regulators through documented compliance and continuous oversight</em></div>
      </td>
    </tr>
  </tbody>
</table>
