# 📝 وثيقة الرؤية | Vision Document

---

> **🗂️ المشروع | Project**
>
> منصة الوساطة الشرائية **CA Admin**  
> CA Admin Shopping Mediation Platform
>
> **🧰 المكدس التقني | Tech Stack**
>
> - Flutter
> - Firebase (Firestore, Auth, Storage, Functions)
>
> **🏷️ الإصدار | Version**
>
> 0.1 (رؤية) – المالك: **عبدالله الشايف** – آخر تحديث: **2025-09-20**  
> 0.1 (Vision) – Owner: **Abdullah Alshaif** – Last Updated: **2025-09-20**

---

## 👀 النظرة العامة | Overview

- تقدم الوثيقة رؤية شاملة للمنصة، أهدافها، وأساسها التقني لضمان وضوح القيمة لجميع الأطراف.  
  The document provides a comprehensive view of the platform, its goals, and technology foundation to clarify value for every stakeholder.

---

## 📊 العناصر الرئيسية | Key Elements

| العنصر 🏷️                                       | التفاصيل                                                                                                                                                                                     |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🏢 **المؤسسة**<br>**Organization**              | الإدارة العامة **CA Admin DmG Headquarters** <br> **CA Admin DmG Headquarters**                                                                                                              |
| 🌐 **نطاق الحل**<br>**Solution Scope**          | منصة وساطة للتسوق عبر الحدود تخدم **اليمن والسعودية** مع ربط رقمي متكامل <br> A cross-border shopping mediation platform serving **Yemen and Saudi Arabia** with integrated digital linkages |
| 🚀 **الرؤية الإدارية**<br>**Management Vision** | تسريع الطلبات، الشحن، والمدفوعات عبر **مسار رقمي واحد وشفاف** <br> Accelerate orders, shipping, and payments through a **single transparent digital lane**                                   |
| 🎯 **الجمهور الأساسي**<br>**Primary Audience**  | المتسوقون، فرق العمليات، المالية، الشركاء، القيادة التنفيذية <br> Shoppers, operations teams, finance, partners, executive leadership                                                        |

---

## 1. ℹ️ مقدمة | Introduction

### 1.1 👁️ نظرة بصرية عامة | Visual Overview

**الوصف:**
يوضح المخطط رحلة الطلب من إنشاء العميل حتى تسليم الشحنة مع إبراز نقاط التفاعل المالية والتحليلية.
**Description:**
The diagram shows the order journey from customer initiation to delivery while flagging finance and analytics touchpoints.

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

**الوصف:**
يبيّن المخطط دور كل طرف في كل مرحلة لضمان وضوح المسؤوليات وسرعة التسليم.
**Description:**
The chart clarifies how each party contributes at every stage to keep responsibilities clear and delivery timely.

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

### 1.3 🏁 سياق المنصة | Platform Context

**الوصف:**
يلخص هذا الجزء رسالة المنصة، الشرائح المستفيدة، والمبادئ التصميمية لضمان الاتساق.
**Description:**
This section outlines the platform mission, beneficiary segments, and design principles to keep the experience consistent.

- 🎯 **المهمة الأساسية:** تقديم مركز عمليات موحد لإدارة الطلبات، الشحن، والمدفوعات عبر الحدود بسهولة وشفافية.
  🎯 **Core Mission:** Deliver a unified operations hub that manages cross-border orders, shipping, and payments with ease and transparency.
- 🧭 **وصف المنصة:** حل متكامل يربط إنشاء الطلب بوثائق الشحن والسجلات المالية دون ازدواجية بيانات.
  🧭 **Platform Definition:** An integrated solution linking order creation with shipping documents and financial records without data duplication.
- 🛠️ **الوظيفة الرئيسية:** تنسيق تدفق العمل من الاستلام حتى الإغلاق مع أدوات رقابة وتقارير وأتمتة للمهام الحرجة.
  🛠️ **Primary Function:** Orchestrate workflow from intake to closure with controls, reporting, and automation for critical tasks.
- 🏆 **المنفعة المتوقعة:** خفض العمل اليدوي ورفع رضا العملاء عبر مصدر موحد للحقيقة وإشعارات فورية.
  🏆 **Expected Benefit:** Reduce manual effort and raise customer satisfaction through a single source of truth and instant notifications.
- 👥 **شرائح الخدمة:** المتسوقون، خدمة العملاء، مشغلو العمليات، فرق المالية، القيادة التنفيذية.
  👥 **Target Segments:** Shoppers, customer service teams, operations operators, finance teams, executive leadership.
- ✨ **مبدأ التجربة:** كل رحلة يجب أن تكون قابلة للتتبع، ثنائية اللغة، وقادرة على العمل دون اتصال لضمان التبني.
  ✨ **Experience Principle:** Every journey must be traceable, bilingual, and offline-ready to ensure adoption.

---

## 2. 🚀 لماذا الآن | Why Now

- 📈 **تسارع التجارة العابرة للحدود:** تنمو احتياجات الشراء الدولي في اليمن بنسبة ‎35٪‎ سنويًا رغم تحديات البنية التحتية.
  📈 **Cross-border Commerce Acceleration:** International shopping needs in Yemen grow by 35% annually despite infrastructure hurdles.
  - 🧩 **الفائدة:** يبرر الاستثمار الفوري في منصة قابلة للتوسع تستوعب النمو وتقدم تجربة موحدة.
    🧩 **Benefit:** Justifies immediate investment in a scalable platform that absorbs growth and keeps the experience unified.
- 🗂️ **تشتت العمليات اليدوية:** تتكرر الطلبات في جداول ومحادثات متفرقة مما يهدر الوقت ويصعّب التدقيق.
  🗂️ **Manual Fragmentation:** Orders repeat across scattered sheets and chats, wasting time and complicating audits.
  - 🧩 **الفائدة:** يؤكد ضرورة الأتمتة المركزية لتقليل الأخطاء وتسريع المتابعة التشغيلية.
    🧩 **Benefit:** Underlines the need for centralized automation to cut errors and speed operational follow-up.
- 🛡️ **توقعات الثقة والامتثال:** يتطلب العملاء والشركاء إيصالات رقمية متوافقة مع اللوائح السعودية واليمنية منذ البداية.
  🛡️ **Trust & Compliance Expectations:** Customers and partners demand digital receipts aligned with Saudi and Yemeni regulations from day one.
  - 🧩 **الفائدة:** يدفع لتجهيز ضوابط الحوكمة المبكرة لضمان الامتثال وتقوية سمعة العلامة.
    🧩 **Benefit:** Drives early governance controls to ensure compliance and reinforce brand reputation.

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

- 🔍 **عمى تشغيلي:** لا يمكن ربط حالة الشحنة بالطلب أو العميل من خلال مصدر واحد مما يؤخر القرارات.
  🔍 **Operational Blind Spots:** Shipment status cannot be tied to an order or customer within a single source, delaying decisions.
  - 🧩 **الفائدة:** يحفز بناء لوحة متابعة موحدة ودمج الحالة عبر الأنظمة.
    🧩 **Benefit:** Encourages building a unified monitoring dashboard and integrating status across systems.
- 💸 **اختلال السجلات المالية:** التسويات اليدوية وتعدد العملات تؤدي إلى فروقات في الأرصدة وتقارير متعارضة.
  💸 **Financial Record Confusion:** Manual reconciliations and currency switches create balance gaps and conflicting reports.
  - 🧩 **الفائدة:** يبرز ضرورة وجود محرك تسوية خفيف يحافظ على التوافق بين الطلبات والمدفوعات.
    🧩 **Benefit:** Highlights the need for a lightweight reconciliation engine that keeps orders and payments aligned.
- 🧠 **فجوات المعرفة والإجراءات:** غياب أدلة موحدة يعرقل الإحلال ويخلق تفاوتًا في جودة الخدمة بين المناطق.
  🧠 **Knowledge & Process Gaps:** Missing playbooks hinder handovers and create uneven service quality across regions.
  - 🧩 **الفائدة:** يدعم إنشاء أدلة رقمية مدمجة وتدريب متسق داخل النظام.
    🧩 **Benefit:** Supports building embedded digital playbooks and consistent in-app training.

### 3.1 🎯 الحالة الحالية والمستهدفة | Current vs Target State

<table>
  <thead>
    <tr>
      <th>📌 البعد<br>Aspect</th>
      <th>📍 الحالة الحالية<br>Current State</th>
      <th>🎯 الحالة المستهدفة<br>Target State</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>🧾 الطلبات<br>Orders</b></td>
      <td>إدخال يدوي مع اعتماد متأخر يؤدي إلى بطء التنفيذ<br><i>Manual entry with delayed approvals that slow execution</i></td>
      <td>تدفق رقمي كامل مع إشعارات فورية ومسار تدقيق واضح<br><i>Fully digital flow with instant notifications and a clear audit trail</i></td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td><b>🚚 الشحن<br>Shipping</b></td>
      <td>تحديثات متقطعة بدون أدلة مما يرفع التصعيدات<br><i>Irregular updates without evidence escalating disputes</i></td>
      <td>تتبع لحظي مع صور إثبات وتأكيد تسليم موحد<br><i>Real-time tracking with proof images and unified delivery confirmation</i></td>
    </tr>
    <tr>
      <td><b>💰 المالية<br>Finance</b></td>
      <td>دفاتر متباينة عبر العملات تعرقل التسوية الدقيقة<br><i>Disparate ledgers across currencies blocking accurate reconciliation</i></td>
      <td>تسويات مؤتمتة وتحويلات فورية عبر القنوات المعتمدة<br><i>Automated reconciliations with instant transfers across approved channels</i></td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td><b>📊 التقارير<br>Reporting</b></td>
      <td>تقارير أسبوعية في جداول Excel تحد من الرؤية اللحظية<br><i>Weekly Excel reports limiting real-time visibility</i></td>
      <td>لوحات تحليل مباشرة قابلة للتنقيب تدعم القرار السريع<br><i>Live drill-down dashboards supporting rapid decision-making</i></td>
    </tr>
    <tr>
      <td><b>📈 القابلية للتوسع<br>Scalability</b></td>
      <td>اعتماد على أفراد محددين يهدد الاستمرارية التشغيلية<br><i>Dependence on key individuals risking operational continuity</i></td>
      <td>عمليات موثقة قابلة للتكرار مع توزيع أدوار واضح<br><i>Documented repeatable processes with clear role distribution</i></td>
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

- 👥 **قيمة العملاء:** ضمان مسار واضح من الاستفسار إلى التسليم مع تحديثات لحظية تعزز الثقة والولاء.
  👥 **Customer Value:** Provide a visible journey from inquiry to delivery with real-time updates that boost trust and loyalty.
- 🧑‍💼 **قيمة فريق العمليات:** مسار عمل موحد يقلل الجهد المكرر ويجعل تدوير الأفراد أكثر سلاسة.
  🧑‍💼 **Operations Team Value:** A unified workflow that removes duplicated effort and smooths staff rotations.
- 💼 **قيمة الأعمال:** تحويل البيانات التشغيلية إلى لوحات قرار موثوقة تمكّن الإدارة من التوسع بثقة.
  💼 **Business Value:** Turn operational data into trustworthy decision dashboards enabling confident expansion.
- 🤝 **قيمة الشركاء:** عمولات واضحة وتكاملات سريعة تعزز الشفافية وتخفض المخاطر المشتركة.
  🤝 **Partner Value:** Transparent commissions and rapid integrations that enhance transparency and reduce shared risk.

---

## 5. 🎯 الأهداف الاستراتيجية | Strategic Objectives

- 💰 **توسيع الإيرادات:** رفع متوسط قيمة الطلب بنسبة ‎20٪‎ عبر الباقات والاشتراكات لدعم الاستثمار المستمر.
  💰 **Revenue Expansion:** Increase average order value by 20% through bundles and subscriptions to sustain ongoing investment.
  - 🧩 **الفائدة:** يتيح إطلاق خدمات ملحقة ويعزز هوامش الربح المستهدفة.
    🧩 **Benefit:** Enables ancillary services and strengthens target profit margins.
- ⚙️ **التميز التشغيلي:** خفض زمن معالجة الطلب إلى أقل من 60 ثانية عند الاستلام بفضل الأتمتة والتدريب المركز.
  ⚙️ **Operational Excellence:** Cut order processing time below 60 seconds at intake via automation and focused training.
  - 🧩 **الفائدة:** يحسّن تجربة العميل ويخفض تكاليف التشغيل اليومية.
    🧩 **Benefit:** Improves customer experience and lowers daily operating costs.
- 🛡️ **الحوكمة والامتثال:** فرض سياسات أدوار دقيقة وسجل تدقيق لكل معاملة مالية لحماية المنصة.
  🛡️ **Governance & Compliance:** Enforce precise role policies and audit trails for each financial transaction to protect the platform.
  - 🧩 **الفائدة:** يقلل التعرض القانوني ويرفع ثقة المنظمين والشركاء.
    🧩 **Benefit:** Reduces legal exposure and increases regulator and partner confidence.

---

## 6. 🛠️ نطاق الإصدار الأولي | MVP Scope

- 📝 **وحدة الطلبات:** إنشاء، تقسيم، وربط الطلبات بمكتبة العملاء والمرفقات لضمان اكتمال البيانات وتاريخها.
  📝 **Orders Module:** Create, split, and link orders with the customer library and attachments to ensure complete data and history.
  - 🧩 **الفائدة:** يوفر سجلًا موحدًا يسهل الرجوع إليه ويقلل فقدان المعلومات.
    🧩 **Benefit:** Provides a unified record that is easy to reference and prevents information loss.
- 🚚 **متابعة الشحن:** تتبع متعدد المراحل من الشراء حتى التسليم مع طوابع زمنية وأدلة مرفقة للمراجعة.
  🚚 **Shipment Tracking:** Multi-stage tracking from purchase to delivery with timestamps and evidence attachments for review.
  - 🧩 **الفائدة:** يقلل الاتصالات المتكررة ويضبط توقعات العملاء.
    🧩 **Benefit:** Reduces repeated inquiries and aligns customer expectations.
- 💳 **إدارة المالية:** أرصدة، مدفوعات، تحويلات، وبطاقات هدايا مع سجل تدقيق شامل عبر المواقع.
  💳 **Finance Management:** Balances, payments, transfers, and gift cards with a comprehensive cross-site audit log.
  - 🧩 **الفائدة:** يضمن تطابق الأرقام بين المتاجر والبنوك والمستخدمين بشكل فوري.
    🧩 **Benefit:** Ensures numbers match instantly across stores, banks, and users.

---

## 7. 📊 مؤشرات النجاح (KPIs) | Success Metrics (KPIs)

<table>
  <thead>
    <tr>
      <th>📌 المؤشر<br>KPI</th>
      <th>📍 خط الأساس<br>Baseline</th>
      <th>🎯 الهدف<br>Target</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>⏱️ زمن استلام الطلب<br>Order Intake Time</b></td>
      <td>180 ثانية<br><i>180 seconds</i></td>
      <td>≤ 60 ثانية (المئين ‎90‎)<br><i>≤ 60 seconds (P90)</i></td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td><b>🚚 حداثة حالة الشحن<br>Shipment Status Freshness</b></td>
      <td>تحديث كل 8 ساعات<br><i>Updates every 8 hours</i></td>
      <td>تحديث كل ساعة<br><i>Hourly updates</i></td>
    </tr>
    <tr>
      <td><b>💰 دقة التسوية المالية<br>Financial Reconciliation Accuracy</b></td>
      <td>‎92٪‎<br><i>92%</i></td>
      <td>≥ ‎99٪‎<br><i>≥ 99%</i></td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td><b>📑 زمن إعداد التقارير<br>Report Preparation Time</b></td>
      <td>يوم عمل واحد<br><i>1 business day</i></td>
      <td>≤ 5 دقائق<br><i>≤ 5 minutes</i></td>
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

<table>
  <thead>
    <tr>
      <th>📌 الخطر<br>Risk</th>
      <th>💥 التأثير<br>Impact</th>
      <th>🛡️ خطة التخفيف<br>Mitigation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>🔄 تعارض البيانات أثناء المزامنة<br><i>Data conflicts during sync</i></b></td>
      <td>أرصدة غير صحيحة وتعطل التقارير التحليلية<br><i>Incorrect balances and disrupted analytics reports</i></td>
      <td>تطبيق تنافس متفائل مع سجل تدقيق مركزي يوفر استرجاعًا دقيقًا للإصدارات<br><i>Apply optimistic concurrency with a central audit log to recover accurate versions</i></td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td><b>📊 حدود فهارس Firestore<br><i>Firestore index limits</i></b></td>
      <td>استعلامات بطيئة تؤثر على أداء المنصة<br><i>Slow queries impacting platform performance</i></td>
      <td>تصميم فهارس مركبة مسبقًا وتقسيم البيانات مبكرًا لتوزيع الحمل<br><i>Pre-design composite indexes and shard data early to distribute load</i></td>
    </tr>
    <tr>
      <td><b>🔐 أدوار غير مضبوطة<br><i>Misconfigured roles</i></b></td>
      <td>كشف بيانات حساسة أو تنفيذ عمليات غير مصرح بها<br><i>Sensitive data exposure or unauthorized operations</i></td>
      <td>إنشاء مصفوفة صلاحيات مدققة مع اختبارات قواعد مستمرة وآلية تنبيه فوري<br><i>Create an audited RBAC matrix with continuous rule tests and instant alerting</i></td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td><b>👥 الاعتماد على أفراد محددين<br><i>Dependency on key staff</i></b></td>
      <td>توقف العمليات عند الغياب أو تبدل الأدوار الحرجة<br><i>Operational halt when critical roles are absent or swapped</i></td>
      <td>توثيق الإجراءات، تعيين بدلاء، وتدوير المهام وفق جدول واضح<br><i>Document procedures, assign backups, and rotate duties on a defined schedule</i></td>
    </tr>
  </tbody>
</table>

---

## 10. 🧾 مسرد المصطلحات | Glossary

<table>
  <thead>
    <tr>
      <th>📌 المصطلح<br>Term</th>
      <th>📖 التعريف بالعربية<br>Definition (AR)</th>
      <th>📖 التعريف بالإنجليزية<br>Definition (EN)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>🔢 رقم الطلب<br><i>Order Number</i></b></td>
      <td>معرف فريد يربط جميع معاملات الطلب داخل النظام لضمان تتبع موحد<br><i>A unique identifier linking every order transaction in the system for unified tracking</i></td>
      <td>Unique identifier linking each order transaction in the system to keep tracking consistent</td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td><b>📦 توحيد الشحنات<br><i>Shipment Consolidation</i></b></td>
      <td>دمج عدة طلبات في شحنة واحدة لخفض التكلفة وتسريع المعالجة التشغيلية<br><i>Combining multiple orders into one shipment to reduce cost and speed operations</i></td>
      <td>Merging multiple orders into a single shipment to reduce cost and accelerate processing</td>
    </tr>
    <tr>
      <td><b>⚖️ محرك التسوية<br><i>Reconciliation Engine</i></b></td>
      <td>طبقة منطقية تقارن المدفوعات بالطلبات والمخزون لاكتشاف الفروقات الرسمية<br><i>A logic layer comparing payments to orders and inventory to detect official variances</i></td>
      <td>Logic layer comparing payments to orders and inventory to detect discrepancies</td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td><b>✅ المطابقة المزدوجة<br><i>Dual Matching</i></b></td>
      <td>خطوة تحقق مشتركة بين مركزي السعودية واليمن قبل التسليم النهائي لضمان التوافق الكامل<br><i>A joint verification step between the KSA and Yemen hubs before final delivery to ensure full alignment</i></td>
      <td>Verification step between the KSA and Yemen hubs before final delivery to guarantee alignment</td>
    </tr>
  </tbody>
</table>

---

## 11. 🔗 جدول المواءمة بين الأهداف والقيمة | Objectives vs Value Table

**الوصف:**
يوضح الجدول كيفية ارتباط الأهداف الاستراتيجية بالقيمة المتحققة لكل فئة لضمان اتساق القرارات الاستثمارية.
**Description:**
The table shows how strategic objectives translate into value for each group to keep investment decisions aligned.

<table>
  <thead>
    <tr>
      <th>🎯 الهدف الاستراتيجي<br><i>Strategic Objective</i></th>
      <th>👥 قيمة العملاء<br><i>Customer Value</i></th>
      <th>👨‍💻 قيمة الفريق<br><i>Team Value</i></th>
      <th>🏢 قيمة الأعمال<br><i>Business Value</i></th>
      <th>🤝 قيمة الشركاء<br><i>Partner Value</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>💰 توسيع الإيرادات<br><i>Revenue Expansion</i></b></td>
      <td>عروض مجمعة وخيارات دفع مرنة تزيد الولاء وتكرار الشراء<br><i>Bundle offers and flexible payments that grow loyalty and repeat purchases</i></td>
      <td>أدوات تحصيل مبسطة تربط الطلب بالمخزون وتقلل الأخطاء المحاسبية<br><i>Simplified collection tools linking orders to inventory that reduce accounting errors</i></td>
      <td>نمو الربحية عبر سلال أعلى ومبيعات متكررة مع رؤية أوضح للهوامش<br><i>Profit growth through higher baskets and repeat sales with clearer margin visibility</i></td>
      <td>عمولات واضحة وتقارير مشتركة تعزز ثقة الوسطاء وتسرّع التسويات<br><i>Transparent commissions and shared reports that strengthen partner trust and speed settlements</i></td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td><b>⚡ التميز التشغيلي<br><i>Operational Excellence</i></b></td>
      <td>خدمة أسرع مع تحديثات حالة فورية تقلل قلق العملاء وتعزز رضاهم<br><i>Faster service with real-time updates reducing customer anxiety and boosting satisfaction</i></td>
      <td>مسار عمل موحد يقلل الجهد المكرر ويعجّل دمج الموظفين الجدد<br><i>Unified workflow removing duplicate effort and accelerating onboarding</i></td>
      <td>خفض التكاليف عبر أتمتة المهام الروتينية وتحسين الإنتاجية اليومية<br><i>Cost reduction by automating routine tasks and improving daily productivity</i></td>
      <td>تكامل أسهل وخفض الحاجة إلى المتابعة اليدوية المكلفة في المشاريع المشتركة<br><i>Streamlined integrations with less costly manual follow-up in joint projects</i></td>
    </tr>
    <tr>
      <td><b>🛡️ الحوكمة والامتثال<br><i>Governance & Compliance</i></b></td>
      <td>شفافية كاملة في حقوق العميل وإشعاراته مما يعزز الثقة والاحتفاظ<br><i>Full transparency on customer rights and notifications that improve trust and retention</i></td>
      <td>سياسات دقيقة تقلل الأخطاء البشرية وتوضح مسؤوليات كل فريق<br><i>Precise policies reducing human error and clarifying each team’s responsibilities</i></td>
      <td>حماية قانونية وتقارير تدقيق جاهزة تدعم القرارات السريعة والاستثمارات الجديدة<br><i>Legal protection and audit-ready reports supporting rapid decisions and new investments</i></td>
      <td>ثقة أعلى لدى الشركاء والجهات المنظمة بفضل الالتزام الموثق والرقابة المستمرة<br><i>Greater trust from partners and regulators through documented compliance and continuous oversight</i></td>
    </tr>
  </tbody>
</table>
