# 🚀 حالات الاستخدام | Use Cases

> **🧩 المنتج | Product**  
> منصة وساطة التسوق **CA Admin**  
> CA Admin Shopping Mediation Platform
>
> **📅 الإصدار | Version**  
> الإصدار **0.2** — آخر تحديث: **2025-09-21** — المالك: **عبدالله الشايف**  
> Version **0.2** — Last updated: **2025-09-21** — Owner: **Abdullah Alshaif**
>
> **🧰 التقنيات | Tech Stack**
>
> - Flutter
> - Firebase (Firestore, Auth, Storage, Functions)
>
> **🔗 مراجع مرتبطة | References**
>
> - `docs/01-vision/01-vision.md`
> - `docs/03-stories/03-stories.md`
> - `docs/10-nfr-and-quality/10-nfr-and-quality.md`

---

## 📌 لماذا تقرأ هذا المستند؟ | Why read this document?

- 🧠 يحوّل المتطلبات السردية إلى حالات استخدام قابلة للتنفيذ تدعم فرق التحليل والتسليم بأدوات موحدة.  
  🧠 Turns narrative requirements into executable use cases that equip analysis and delivery teams with shared tooling.
- 🤝 يبني لغة مشتركة بين العمليات والتقنية والمالية لتحديد نقاط التحكم وتقليل المخاطر التشغيلية.  
  🤝 Builds a shared language across operations, technology, and finance to clarify control points and reduce operational risk.

---

## 🧭 1. نظرة عامة | Overview

- 📍 **النطاق:** يغطي رحلة المنصة من استقبال الطلب وحتى المصالحة المالية الختامية مع إبراز نقاط القرار الحرجة.
  📍 **Scope:** Encompasses the platform journey from intake through final financial reconciliation while highlighting critical decision points.
- 🎯 **الهدف:** يشرح سلوك الممثلين الأساسيين والقيمة المتوقعة من كل حالة استخدام لدعم التخطيط المرحلي.
  🎯 **Purpose:** Explains primary actor behaviors and the value expected from each use case to support phased planning.
- 📦 **المخرجات:** ينتج حالات استخدام جاهزة للتحليل والتصميم والاختبار ضمن سياق تشغيلي واضح.
  📦 **Deliverable:** Produces use cases ready for analysis, design, and testing within a clearly articulated operational context.

## 1.1 🗺️ مخطط نظرة عامة على النظام | System Overview Diagram

- 🛰️ **الوصف:** يعرض المخطط التالي الممثلين الرئيسيين وتفاعلهم مع حالات الاستخدام لتوضيح تغطية المنصة من طرف إلى طرف.
  🛰️ **Description:** The following diagram maps the key actors and their touchpoints with use cases to illustrate end-to-end platform coverage.

```mermaid
flowchart LR
  %% ========== أنماط عامة ==========
  classDef actor fill:#ffffff,stroke:#4b5563,stroke-width:1px,color:#111827;
  classDef usecase fill:#f3f4f6,stroke:#4b5563,stroke-width:1px,rx:28,ry:28,color:#111827;
  classDef legend fill:#f8fafc,stroke:#cbd5e1,stroke-width:1px,color:#334155;

  %% ========== الممرات ==========
  subgraph LHS["👥 الممثلون / Actors"]
    Customer["👤 العميل<br>Customer"]:::actor
    Operations["🏭 فريق العمليات<br>Operations Team"]:::actor
    Vendor["🤝 المورّد الخارجي<br>External Vendor"]:::actor
    Finance["💰 فريق المالية<br>Finance Team"]:::actor
    Support["🎧 فريق الدعم<br>Support Team"]:::actor
  end

  subgraph RHS["🎬 حالات الاستخدام / Use Cases"]
    UC1["📝 تقديم الطلب<br>Submit Order"]:::usecase
    UC2["📊 متابعة الحالة<br>Track Status"]:::usecase
    UC3["✅ التحقق من الطلب<br>Validate Order"]:::usecase
    UC4["🚚 تنسيق الشحن<br>Coordinate Shipment"]:::usecase
    UC5["📦 تحديث المشتريات<br>Update Procurement"]:::usecase
    UC6["🧾 تسوية المدفوعات<br>Reconcile Payments"]:::usecase
    UC7["🎫 معالجة التذاكر<br>Handle Support Ticket"]:::usecase
  end

  %% ========== العلاقات ==========
  Customer --> UC1
  Customer --> UC2
  Operations --> UC3
  Operations --> UC4
  Vendor --> UC5
  Finance --> UC6
  Support --> UC7

  %% علاقات الاشتمال/الامتداد (منقّطة)
  UC4 -. "يشمل<br>Includes" .-> UC5
  UC6 -. "يمتد<br>Extends" .-> UC3

  %% ========== أسطورة ==========
  subgraph LEGEND["ℹ️ توضيحات (Legend)"]
    INC["dashed → Includes"]:::legend
    EXT["dashed → Extends"]:::legend
  end
```

---

## 2. 🎭 الممثلون الرئيسيون | Primary Actors

<table>
  <thead>
    <tr>
      <th>👤 الممثل<br><i>Actor</i></th>
      <th>🎯 الدور<br><i>Role</i></th>
      <th>🛠️ المسؤوليات<br><i>Responsibilities</i></th>
      <th>💡 القيمة المضافة<br><i>Added Value</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>🙋‍♂️ العميل<br><i>Customer</i></b></td>
      <td>يستخدم المنصة لتجميع الروابط والكميات وتقديم الطلبات<br><i>Uses the platform to gather links, quantities, and submit orders</i></td>
      <td>
        <ul>
          <li>📌 يزوّد البيانات الأولية<br><i>Provides initial data</i></li>
          <li>🚚 يؤكد تفضيلات الشحن والدفع<br><i>Confirms shipping & payment preferences</i></li>
        </ul>
      </td>
      <td>
        <ul>
          <li>🧭 يعكس احتياجات السوق<br><i>Represents market demand</i></li>
          <li>✅ يضمن توافق الخدمة مع توقعات المستهلك<br><i>Ensures service aligns with customer expectations</i></li>
        </ul>
      </td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td><b>🛠️ أخصائي العمليات<br><i>Operations Specialist</i></b></td>
      <td>يدير تقييم الطلبات والتواصل مع الموردين<br><i>Manages requests and supplier communication</i></td>
      <td>
        <ul>
          <li>📝 يتحقق من اكتمال المستندات<br><i>Validates documentation</i></li>
          <li>📊 يوزع الأعمال ويراقب SLA<br><i>Assigns work & monitors SLA</i></li>
        </ul>
      </td>
      <td>
        <ul>
          <li>🔗 يربط فرق الدعم والمالية والموردين<br><i>Aligns support, finance, and suppliers</i></li>
          <li>⚡ يحافظ على انسياب العمل<br><i>Keeps workflow smooth</i></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><b>🌐 مسؤول الموردين<br><i>Vendor Manager</i></b></td>
      <td>ينسق العروض ويؤكد التوافر<br><i>Coordinates quotes & confirms availability</i></td>
      <td>
        <ul>
          <li>🔄 يحدد البدائل<br><i>Surfaces alternatives</i></li>
          <li>💲 يتفاوض على الأسعار<br><i>Negotiates pricing</i></li>
          <li>📅 يقدم مواعيد توريد موثوقة<br><i>Provides reliable lead times</i></li>
        </ul>
      </td>
      <td>
        <ul>
          <li>🛡️ يضمن جاهزية التوريد<br><i>Ensures supply readiness</i></li>
          <li>📉 يقلل مخاطر انقطاع السلسلة<br><i>Lowers supply chain risk</i></li>
        </ul>
      </td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td><b>💰 محلل المالية<br><i>Finance Analyst</i></b></td>
      <td>يطابق المدفوعات ويخرج تقارير التدقيق<br><i>Reconciles payments & produces audit reports</i></td>
      <td>
        <ul>
          <li>⚙️ يشغّل أنظمة المحاسبة<br><i>Runs accounting routines</i></li>
          <li>📈 يراقب الفروقات<br><i>Monitors variances</i></li>
          <li>⏱️ يغلق الدورات المالية بسرعة<br><i>Closes financial cycles quickly</i></li>
        </ul>
      </td>
      <td>
        <ul>
          <li>🤝 يعزز الثقة الرقابية<br><i>Strengthens governance</i></li>
          <li>🔗 يربط الأداء المالي بالتشغيلي<br><i>Links financial & operational performance</i></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><b>🤝 وكيل الدعم<br><i>Support Agent</i></b></td>
      <td>يدير التذاكر ويهتم بتجربة ما بعد التسليم<br><i>Handles tickets & post-delivery experience</i></td>
      <td>
        <ul>
          <li>⚠️ يراقب إنذارات التأخير<br><i>Watches delay alerts</i></li>
          <li>📋 يجمع التغذية الراجعة<br><i>Collects feedback</i></li>
          <li>💡 يقترح تحسينات الخدمة<br><i>Recommends service improvements</i></li>
        </ul>
      </td>
      <td>
        <ul>
          <li>😊 يحافظ على رضا المستخدم<br><i>Sustains user satisfaction</i></li>
          <li>📚 يغلق الدروس المستفادة<br><i>Closes lessons learned</i></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

---

## 3. 📂 حالات الاستخدام الجوهرية | Core Use Cases

<table>
  <thead>
    <tr>
      <th>🔑 الحالة<br><i>Use Case</i></th>
      <th>📌 العنوان<br><i>Title</i></th>
      <th>🎭 الممثل الرئيسي<br><i>Main Actor</i></th>
      <th>🎯 الغاية<br><i>Goal</i></th>
      <th>📊 الأولوية<br><i>Priority</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>UC-01</b></td>
      <td>🛒 تقديم طلب شراء<br><i>Submit Purchase Request</i></td>
      <td>🙋‍♂️ العميل<br><i>Retail Customer</i></td>
      <td>
        يلتقط الطلب الكامل ويولّد مرجع تتبع فوري لضمان شفافية المعاملة.<br>
        <i>Captures the full order and issues an instant tracking reference for transactional transparency.</i>
      </td>
      <td>🔴 عالية<br><i>High</i></td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td><b>UC-02</b></td>
      <td>📦 إدارة المشتريات والتجميع<br><i>Manage Procurement & Consolidation</i></td>
      <td>🛠️ أخصائي العمليات<br><i>Operations Specialist</i></td>
      <td>
        ينسّق عروض الموردين ويعد خطة الدمج لضبط التكلفة والجدول الزمني.<br>
        <i>Aligns supplier quotes and prepares consolidation plans to control cost and schedule.</i>
      </td>
      <td>🔴 عالية<br><i>High</i></td>
    </tr>
    <tr>
      <td><b>UC-03</b></td>
      <td>🚚 تتبع الشحن والتسليم<br><i>Track Shipment & Delivery</i></td>
      <td>🛠️ أخصائي العمليات + 🤝 وكيل الدعم<br><i>Operations & Support</i></td>
      <td>
        يوفّر رؤية لحظية ومعالجة مبكرة للتأخيرات لحماية تجربة العميل.<br>
        <i>Delivers real-time visibility and early delay mitigation to protect customer experience.</i>
      </td>
      <td>🟠 متوسطة<br><i>Medium</i></td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td><b>UC-04</b></td>
      <td>💳 تسوية المدفوعات والتقارير<br><i>Reconcile Payments & Reporting</i></td>
      <td>💰 محلل المالية<br><i>Finance Team</i></td>
      <td>
        يضمن إغلاق الدورة المالية وإصدار تقارير المراجعة خلال يوم عمل واحد.<br>
        <i>Ensures financial closure and audit-ready reporting within one business day.</i>
      </td>
      <td>🔴 عالية<br><i>High</i></td>
    </tr>
  </tbody>
</table>

---

## 4. 🧪 السيناريوهات التفصيلية | Detailed Scenarios

### UC-01 🛒 تقديم طلب شراء | Submit Purchase Request

- 🎯 **الهدف:** تمكين العميل من توثيق الطلب بدقة مع عرض تقديرات الرسوم بشكل فوري لدعم اتخاذ القرار.
  🎯 **Goal:** Enable the customer to capture the request accurately with instant fee estimates to support decision making.
- ⚙️ **الافتراضات:** حساب العميل موثّق وجداول الرسوم محدثة وروابط المنتجات متاحة للوصول.
  ⚙️ **Assumptions:** Customer account is verified, fee tables are up to date, and product links are accessible.

#### UC-01 🔄 التدفق الرئيسي | Main Flow

1. ✅ يفتح العميل نموذج الإدخال من القناة المفضلة لديه لبدء الطلب.
   ✅ The customer opens the intake form from the preferred channel to start the order.
2. ✅ يضيف روابط المنتجات والكميات ووجهة التسليم لتكوين صورة الطلب.
   ✅ Adds product links, quantities, and delivery destination to form the order picture.
3. ✅ يحسب النظام الرسوم المتوقعة ويعرضها لضمان الشفافية المسبقة.
   ✅ The system calculates projected fees and displays them to ensure upfront transparency.
4. ✅ يراجع العميل التفاصيل ويضيف الملاحظات أو التعليمات الخاصة عند الحاجة.
   ✅ The customer reviews details and adds notes or special instructions if needed.
5. ✅ يرسل الطلب ويتلقى مرجع تتبع تلقائي لتسهيل المتابعة اللاحقة.
   ✅ Submits the request and receives an automatic tracking reference for later follow-up.
6. ✅ يُخطِر النظام فريق العمليات بوجود طلب جديد لمراجعة الجودة الأولية.
   ✅ The system notifies the operations team of a new request for initial quality review.

#### UC-01 🔁 المسارات البديلة | Alternate Paths

- ⚠️ إذا تعذر حساب الرسوم تلقائيًا، يرفع العميل عرض السعر كمرجع للمراجعة اليدوية.
  ⚠️ If fee calculation fails automatically, the customer uploads the supplier quote as a reference.
- 🛡️ عند تجاوز الكميات الحد المسموح، يرسل النظام الطلب إلى مشرف لموافقة استثنائية.
  🛡️ When quantities exceed thresholds, the system routes the request to a supervisor for exceptional approval.

#### UC-01 💎 القيمة لأصحاب المصلحة | Value by Stakeholder

<table>
  <thead>
    <tr>
      <th>👥 صاحب المصلحة<br><i>Stakeholder</i></th>
      <th>💎 القيمة المتحققة<br><i>Delivered Value</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>🙋‍♂️ العميل<br><i>Customer</i></td>
      <td>
        يحصل على تجربة طلب شفافة مع تتبع فوري وخيارات ملاحظات واضحة.<br>
        <i>Obtains a transparent ordering experience with instant tracking and clear note options.</i>
      </td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td>🛠️ العمليات<br><i>Operations</i></td>
      <td>
        يتلقى بيانات منظمة تسهّل التدقيق السريع وتوزيع المهام مباشرة.<br>
        <i>Receives structured data that simplifies quick review and direct task assignment.</i>
      </td>
    </tr>
    <tr>
      <td>💰 المالية<br><i>Finance</i></td>
      <td>
        ينال رؤية مبكرة لتوقع الرسوم مما يقلل اختلافات الفواتير لاحقًا.<br>
        <i>Gains early visibility of expected fees reducing later invoice variances.</i>
      </td>
    </tr>
  </tbody>
</table>

```mermaid
%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontFamily": "Tahoma, Arial, 'Noto Sans Arabic', sans-serif",
    "fontSize": "15px",
    "lineColor": "#64748b",
    "textColor": "#0f172a",
    "primaryColor": "#e0f2fe",
    "primaryTextColor": "#0c4a6e",
    "primaryBorderColor": "#0284c7"
  }
}}%%
sequenceDiagram
autonumber

participant Customer as "👤 العميل<br>Customer"
participant Platform as "🖥️ منصة CA Admin<br>CA Admin Platform"
participant Operations as "🏭 فريق العمليات<br>Operations Team"
participant Archive as "🗄️ مخزن المستندات<br>Document Store"

Note over Customer,Platform: بدء إنشاء الطلب<br>Start order creation

Customer->>Platform: فتح نموذج الطلب<br>Open order form
Platform->>Platform: التحقق من الحقول<br>Validate inputs
Customer->>Platform: إدخال الروابط والكميات<br>Submit links and quantities

Note over Platform,Archive: تخزين المرفقات والروابط المرجعية<br>Persist attachments & references
Platform->>Archive: حفظ المرفقات<br>Store attachments

Note over Platform,Operations: تنبيه الفريق بطلب جديد<br>Notify ops about new request
Platform->>Operations: تنبيه بطلب جديد<br>Notify new request
Operations->>Platform: تأكيد الاستلام<br>Acknowledge receipt

Platform->>Customer: إرسال رقم التتبع<br>Send tracking reference
```

> 📊 **مؤشر الأداء:** إتمام إدخال الطلب خلال ≤3 دقائق بمعدل نجاح ≥95%.
> 📊 **Performance Indicator:** Complete order capture within ≤3 minutes with a success rate ≥95%.

---

### UC-02 📦 إدارة المشتريات والتجميع | Manage Procurement & Consolidation

- 🎯 **الهدف:** ضمان الحصول على عروض تنافسية وإعداد خطة دمج توازن بين التكلفة والالتزام الزمني.
  🎯 **Goal:** Secure competitive quotes and craft a consolidation plan that balances cost with lead-time commitments.
- ⚙️ **الافتراضات:** الطلب في مرحلة المراجعة وقنوات الموردين نشطة وحدود الميزانية محددة.
  ⚙️ **Assumptions:** The request is under review, supplier channels are active, and budget ceilings are defined.

#### UC-02 🔄 التدفق الرئيسي | Main Flow

1. ✅ يراجع أخصائي العمليات تفاصيل الطلب والمرفقات للتأكد من اكتمالها.
   ✅ Operations specialist reviews request details and attachments to confirm completeness.
2. ✅ يطلب عروض الأسعار والتوافر من الموردين المعتمدين مع تحديد مواعيد التوريد.
   ✅ Requests pricing and availability from approved vendors including supply lead times.
3. ✅ يحدّث النظام بنود الطلب بناءً على ردود الموردين لضمان توافق البيانات.
   ✅ The system updates order lines based on supplier responses to keep data aligned.
4. ✅ يُعدّ مسودة خطة دمج وشحن تشمل الموجات وطرق النقل المقترحة.
   ✅ Drafts a consolidation and shipping plan covering waves and recommended transportation.
5. ✅ يحسب النظام الأوزان والرسوم ويعرض تأثير كل خيار دمج على الربحية.
   ✅ The system calculates weights and fees, showing how each consolidation option influences profitability.
6. ✅ يعتمد المشرف الخطة لينتقل الطلب إلى حالة «التجميع قيد التنفيذ».
   ✅ A supervisor approves the plan, moving the request to the "Consolidation in Progress" status.
7. ✅ يشارك فريق العمليات تعليمات التغليف والتعبئة مع المستودع أو المركز اللوجستي.
   ✅ Operations shares packing and labeling instructions with the warehouse or logistics hub.

#### UC-02 🔁 المسارات البديلة | Alternate Paths

- ⚠️ عند اعتذار المورد، يوصي النظام بمورد بديل أو توزيع الشحن على دفعات متعددة.
  ⚠️ If a supplier declines, the system recommends an alternate vendor or splits the shipment into multiple batches.
- 🛡️ عندما يلوح خرق SLA، يرفع النظام تنبيه تصعيد للقيادة مع خطة طوارئ مقترحة.
  🛡️ When an SLA breach is imminent, the system escalates to leadership with a proposed contingency plan.

#### UC-02 💎 القيمة لأصحاب المصلحة | Value by Stakeholder

<table>
  <thead>
    <tr>
      <th>👥 صاحب المصلحة<br><i>Stakeholder</i></th>
      <th>💎 القيمة المتحققة<br><i>Delivered Value</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>🙋‍♂️ العميل<br><i>Customer</i></td>
      <td>
        يحصل على تجربة طلب شفافة مع تتبع فوري وخيارات ملاحظات واضحة.<br>
        <i>Obtains a transparent ordering experience with instant tracking and clear note options.</i>
      </td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td>🛠️ العمليات<br><i>Operations</i></td>
      <td>
        يتلقى بيانات منظمة تسهّل التدقيق السريع وتوزيع المهام مباشرة.<br>
        <i>Receives structured data that simplifies quick review and direct task assignment.</i>
      </td>
    </tr>
    <tr>
      <td>💰 المالية<br><i>Finance</i></td>
      <td>
        ينال رؤية مبكرة لتوقع الرسوم مما يقلل اختلافات الفواتير لاحقًا.<br>
        <i>Gains early visibility of expected fees reducing later invoice variances.</i>
      </td>
    </tr>
  </tbody>
</table>

```mermaid
flowchart LR
  classDef step fill:#f8fafc,stroke:#94a3b8,stroke-width:1.5px,color:#111827,rx:8,ry:8;
  classDef decision fill:#fff7ed,stroke:#f59e0b,stroke-width:2px,color:#7c2d12,rx:8,ry:8;
  classDef action fill:#ecfdf5,stroke:#10b981,stroke-width:2px,color:#064e3b,rx:8,ry:8;

  A["📩 استلام رد المورد<br>Receive vendor response"]:::step --> B{"❓ هل التوفر مؤكد؟<br>Availability confirmed?"}:::decision

  B -- "✔️ نعم<br>Yes" --> C["📝 تحديث بنود الطلب<br>Update order lines"]:::action
  C --> D["📦 صياغة خطة الدمج<br>Create consolidation plan"]:::step
  D --> E["💲 حساب التكاليف<br>Calculate costs"]:::step
  E --> F["✅ موافقة المشرف<br>Supervisor approval"]:::decision
  F --> G["📑 مشاركة تعليمات التغليف<br>Share packing instructions"]:::step

  B -- "❌ لا<br>No" --> H["🔄 اقتراح مورد بديل<br>Suggest alternate vendor"]:::action
  H --> B
```

> 📊 **مؤشر الأداء:** إقفال خطة الدمج خلال ≤12 ساعة عمل مع التزام الموردين بالمواعيد بنسبة ≥90%.
> 📊 **Performance Indicator:** Close the consolidation plan within ≤12 business hours with suppliers meeting deadlines ≥90%.

---

### UC-03 🚚 تتبع الشحن والتسليم | Track Shipment & Delivery

- 🎯 **الهدف:** توفير رؤية لحظية لمسار الشحنة وتمكين التدخل المبكر عند ظهور مخاطر تأخير.
  🎯 **Goal:** Provide real-time shipment visibility and allow early intervention when delay risks emerge.
- ⚙️ **الافتراضات:** تمت الموافقة على خطة الدمج، ومعرّف الشحنة فعّال، ونقاط المراقبة متصلة بالنظام.
  ⚙️ **Assumptions:** The consolidation plan is approved, the shipment ID is active, and checkpoints are connected to the system.

#### UC-03 🔄 التدفق الرئيسي | Main Flow

1. ✅ يسجل فريق العمليات وقت المغادرة من المستودع الأصلي لبدء الجدول الزمني.
   ✅ Operations logs the departure time from the origin warehouse to start the timeline.
2. ✅ يحدد النظام الطوابع الزمنية لكل نقطة تفتيش تلقائيًا عبر تكاملات التتبع.
   ✅ The system timestamps each checkpoint automatically through tracking integrations.
3. ✅ يرسل النظام تنبيهات للعميل عند تغيّر الحالة لتحديث التوقعات فورًا.
   ✅ The system pushes alerts to the customer when status changes to update expectations instantly.
4. ✅ يراقب فريق الدعم لوحة التأخيرات ليجهز إجراءات التخفيف قبل تأثير العميل.
   ✅ Support monitors the delay dashboard to prepare mitigation steps before customer impact.
5. ✅ يحدد فريق العمليات التسليم النهائي ويؤكد الموعد مع العميل لتجنب الفجوات.
   ✅ Operations schedules the final delivery and confirms the appointment with the customer to avoid gaps.
6. ✅ يرفع المرسل إثبات التسليم ويخزنه النظام تلقائيًا كمرجع تدقيقي.
   ✅ The courier uploads proof of delivery and the system stores it automatically as an audit reference.
7. ✅ يحدّث النظام حالة الطلب إلى «تم التسليم» ويغلق السيناريو.
   ✅ The system updates order status to "Delivered" and closes the scenario.

#### UC-03 🔁 المسارات البديلة | Alternate Paths

- ⚠️ إذا ظهر تأخير، ينشئ النظام تذكرة دعم مع خطة معالجة زمنية محددة.
  ⚠️ If a delay occurs, the system creates a support ticket with a time-bound mitigation plan.
- 🛡️ عند فشل التسليم، ينسق الفريق إعادة الجدولة ويخطِر المالية بتأثير الإيرادات.
  🛡️ When delivery fails, the team arranges re-scheduling and notifies finance about revenue impact.

#### UC-03 💎 القيمة لأصحاب المصلحة | Value by Stakeholder

<table>
  <thead>
    <tr>
      <th>👥 صاحب المصلحة<br><i>Stakeholder</i></th>
      <th>💎 القيمة المتحققة<br><i>Delivered Value</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>🙋‍♂️ العميل<br><i>Customer</i></td>
      <td>
        يتلقى تحديثات دقيقة تعزز الثقة وتتيح التخطيط للاستلام دون مفاجآت.<br>
        <i>Receives accurate updates that boost trust and allow pickup planning without surprises.</i>
      </td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td>🛠️ العمليات<br><i>Operations</i></td>
      <td>
        يحصل على إنذار مبكر للأزمات لتصحيح المسار بسرعة وتقليل تكاليف التعثر.<br>
        <i>Obtains early warning on issues to correct course quickly and reduce disruption costs.</i>
      </td>
    </tr>
    <tr>
      <td>💰 المالية<br><i>Finance</i></td>
      <td>
        تتوفر بيانات زمنية دقيقة لدعم احتساب الإيراد والديون قصيرة الأجل.<br>
        <i>Has precise timing data to support revenue recognition and short-term liabilities.</i>
      </td>
    </tr>
  </tbody>
</table>

```mermaid
%%{init: {"theme":"base","themeVariables": {
  "fontSize":"14px",
  "fontFamily":"Tahoma, Arial, 'Noto Sans Arabic', sans-serif"
}}}%%
timeline
  title 🛒 خط زمني للشحنة <br> Shipment Timeline
  section 📦 المسار الرئيسي <br> Primary Route
    🚚 مغادرة من المستودع الأصلي <br> Origin dispatch : T0
    🇸🇦 وصول إلى مركز السعودية <br> KSA hub arrival : T0 + 2d
    🇾🇪 انتقال إلى مركز اليمن <br> Transfer to Yemen hub : T0 + 5d
    🏠 تسليم الميل الأخير <br> Last mile delivery : T0 + 7d
  section 🎯 نقاط التحكم <br> Control Points
    ⏱️ تحقق التأخير <br> Delay check : كل 12 ساعة / every 12h
    📢 إشعار العميل <br> Customer notification : عند أي تغيير حالة / on status change
    💳 جاهزية الفوترة <br> Billing readiness : بعد إثبات التسليم / after proof of delivery
```

> 📊 **مؤشر الجودة:** دقة نقاط التفتيش ≥95% مع توقع التأخيرات قبل 24 ساعة على الأقل.
> 📊 **Quality Indicator:** Checkpoint accuracy ≥95% with delays predicted at least 24 hours in advance.

---

### UC-04 💳 تسوية المدفوعات والتقارير | Reconcile Payments & Reporting

- 🎯 **الهدف:** مطابقة المدفوعات مع الطلبات وإصدار تقارير مراجعة قابلة للتدقيق خلال يوم عمل واحد.
  🎯 **Goal:** Match payments to orders and produce audit-ready reports within one business day.
- ⚙️ **الافتراضات:** بيانات المعاملات متزامنة والضوابط المصرفية مفعلة وحالات الطلبات محدّثة.
  ⚙️ **Assumptions:** Transaction data is synced, banking controls are active, and order statuses are up to date.

#### UC-04 🔄 التدفق الرئيسي | Main Flow

1. ✅ يجمع محلل المالية حركات الدفع من البوابة البنكية ومنصة CA Admin.
   ✅ The finance analyst pulls payment movements from the banking gateway and the CA Admin platform.
2. ✅ يربط النظام كل دفعة بمعرّف الطلب باستخدام قواعد المطابقة التلقائية.
   ✅ The system matches each payment to an order ID using automated reconciliation rules.
3. ✅ يحدد النظام الفروقات ويرسلها لقائمة مراجعة لمعالجة الاستثناءات.
   ✅ The system flags variances and queues them for an exceptions review list.
4. ✅ يراجع المحلل الفروقات، ويضيف تعليقات تصحيحية، ويعيد تشغيل المطابقة إذا لزم الأمر.
   ✅ The analyst reviews variances, adds remediation notes, and re-runs matching when necessary.
5. ✅ يولّد النظام تقريرًا ماليًا بتنسيق PDF/CSV مع مؤشرات الأداء الرئيسية.
   ✅ The system generates financial reports in PDF/CSV including key performance metrics.
6. ✅ يخزن التقرير في المستودع المؤسسي ويشارك الروابط مع القيادة والعمليات.
   ✅ Stores the report in the enterprise repository and shares links with leadership and operations.
7. ✅ يحدّث النظام لوحة التحكم بحالة المصالحة ويغلق الدورة اليومية.
   ✅ Updates the dashboard with reconciliation status and closes the daily cycle.

#### UC-04 🔁 المسارات البديلة | Alternate Paths

- ⚠️ إذا ظهرت مدفوعات بدون مرجع، يتم إنشاء حالة دعم لمراجعة العميل والتأكد من الوصف.
  ⚠️ When unmatched payments appear, a support case is opened to confirm descriptors with the customer.
- 🛡️ إذا تأخر ملف البنك، يفعّل النظام خطة استمرارية الأعمال لتحديث السجلات يدويًا.
  🛡️ If the bank file is delayed, the system triggers the business continuity plan for manual ledger updates.

#### UC-04 💎 القيمة لأصحاب المصلحة | Value by Stakeholder

<table>
  <thead>
    <tr>
      <th>👥 صاحب المصلحة<br><i>Stakeholder</i></th>
      <th>💎 القيمة المتحققة<br><i>Delivered Value</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>💰 المالية<br><i>Finance</i></td>
      <td>
        تمتلك دورة إغلاق سريعة مع سجلات مراجعة كاملة وشفافة.<br>
        <i>Gains a fast close cycle with complete and transparent audit trails.</i>
      </td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td>🛠️ العمليات<br><i>Operations</i></td>
      <td>
        تحصل على إشعارات فارق تمكنها من إصلاح البيانات المصدرية مبكرًا.<br>
        <i>Receives variance alerts that allow early correction of upstream data.</i>
      </td>
    </tr>
    <tr>
      <td>🙋‍♂️ العميل<br><i>Customer</i></td>
      <td>
        يستفيد من فواتير دقيقة ومواعيد استرداد أموال موثوقة.<br>
        <i>Benefits from accurate invoices and reliable refund timing.</i>
      </td>
    </tr>
  </tbody>
</table>

```mermaid
flowchart LR
  classDef input fill:#e0f2fe,stroke:#0284c7,stroke-width:1.5px,color:#0c4a6e,rx:8,ry:8;
  classDef process fill:#f8fafc,stroke:#94a3b8,stroke-width:1.5px,color:#111827,rx:8,ry:8;
  classDef decision fill:#fff7ed,stroke:#f59e0b,stroke-width:2px,color:#7c2d12,rx:6,ry:6;
  classDef output fill:#ecfdf5,stroke:#10b981,stroke-width:2px,color:#064e3b,rx:8,ry:8;

  Payments["💰 دفعات واردة<br>Incoming payments"]:::input --> Match["⚙️ محرك المطابقة<br>Matching engine"]:::process
  Orders["📦 طلبات معتمدة<br>Approved orders"]:::input --> Match
  Match --> Variance{"❓ فروقات موجودة؟<br>Variance detected?"}:::decision

  Variance -- "✔️ نعم<br>Yes" --> Review["📋 قائمة مراجعة الاستثناءات<br>Exception review list"]:::process
  Variance -- "❌ لا<br>No" --> Report["📑 تقرير مالي نهائي<br>Final financial report"]:::output

  Review --> Resolve["🛠️ معالجة الفروقات<br>Resolve variance"]:::process
  Resolve --> Match

  Report --> Archive["🗄️ أرشفة مؤسسية<br>Enterprise archive"]:::output
  Report --> Dashboard["📊 تحديث لوحة الرقابة<br>Update control dashboard"]:::output
```

> 📊 **مؤشر الامتثال:** إقفال المصالحة خلال ≤24 ساعة مع توثيق 100% من الفروقات في سجل المراجعة.
> 📊 **Compliance Indicator:** Complete reconciliation within ≤24 hours with 100% of variances documented in the audit log.

---

## 5. 🔗 مصفوفة تتبع المتطلبات | Requirement Traceability Matrix

<table>
  <thead>
    <tr>
      <th>📌 حالة الاستخدام<br><i>Use Case</i></th>
      <th>🆔 معرف المتطلب<br><i>Requirement ID</i></th>
      <th>📝 التفاصيل<br><i>Details</i></th>
      <th>🎯 الأولوية<br><i>Priority</i></th>
      <th>✅ مرجع الاختبار<br><i>Test Reference</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>UC-01</td>
      <td>REQ-INT-001</td>
      <td>
        يدعم إدخال روابط متعددة مع حساب تلقائي للرسوم لضمان دقة التسعير.<br>
        <i>Supports entering multiple product links with automated fee calculation for pricing accuracy.</i>
      </td>
      <td>🔴 عالية<br><i>High</i></td>
      <td>TC-INT-CreateOrder</td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td>UC-02</td>
      <td>REQ-OPS-004</td>
      <td>
        يوفر لوحة مشتريات تسجل قرارات الاعتماد وتدفقات العمل المرتبطة.<br>
        <i>Provides a procurement board that logs approval decisions and related workflows.</i>
      </td>
      <td>🔴 عالية<br><i>High</i></td>
      <td>TC-OPS-ProcurementBoard</td>
    </tr>
    <tr>
      <td>UC-03</td>
      <td>REQ-OPS-009</td>
      <td>
        يطلق إنذارات زمنية عند تجاوز نقاط المراقبة الحرجة لضمان الاستجابة السريعة.<br>
        <i>Triggers timed alerts when critical checkpoints are breached to ensure fast response.</i>
      </td>
      <td>🟠 متوسطة<br><i>Medium</i></td>
      <td>TC-OPS-CheckpointAlerts</td>
    </tr>
    <tr style="background-color:#f9fafb;">
      <td>UC-04</td>
      <td>REQ-FIN-003</td>
      <td>
        يحقق مصالحة المدفوعات خلال 24 ساعة ويصدر تقارير PDF جاهزة للتدقيق.<br>
        <i>Reconciles payments within 24 hours and exports audit-ready PDF reports.</i>
      </td>
      <td>🔴 عالية<br><i>High</i></td>
      <td>TC-FIN-Reconcile</td>
    </tr>
  </tbody>
</table>
> 🛠️ **تنبيه تشغيلي:** حدّث هذه المصفوفة مع أي تغيير في نطاق قصص المستخدم أو ضوابط الأمان.
> 🛠️ **Operational Reminder:** Update this matrix whenever user-story scope or security controls change.

---

## 6. 🎞️ محاكاة سيناريو متكاملة | Integrated Scenario Simulation

```mermaid
%%{init: {
  "theme":"base",
  "themeVariables": {
    "fontFamily": "Tahoma, Arial, 'Noto Sans Arabic', sans-serif",
    "fontSize": "15px",
    "lineColor": "#64748b",
    "textColor": "#0f172a"
  }
}}%%
sequenceDiagram
autonumber

participant Customer as "👤 العميل<br>Customer"
participant Operations as "🏭 العمليات<br>Operations"
participant Vendor as "🤝 المورّد<br>Vendor"
participant Finance as "💰 المالية<br>Finance"
participant Support as "🎧 الدعم<br>Support"

rect rgba(224,242,254,0.45)
Note over Customer,Operations: 📨 الاستلام والتأكيد<br>Intake & Acknowledgment
Customer->>Operations: إرسال طلب مفصل<br>Submit detailed request
Operations->>Customer: تأكيد الاستلام والرسوم<br>Confirm receipt & fees
end

rect rgba(255,251,235,0.45)
Note over Operations,Vendor: 🔎 التوريد والتسعير<br>Sourcing & Quotation
Operations->>Vendor: طلب التوافر والتسعير<br>Request availability & quote
Vendor->>Operations: تقديم عرض ومدة توريد<br>Provide quote & lead time
end

rect rgba(236,253,245,0.45)
Note over Operations,Finance: 🧮 تقدير التكاليف والموافقة<br>Costing & Approval
Operations->>Finance: مشاركة تقدير التكلفة<br>Share cost estimate
Finance->>Operations: اعتماد الميزانية<br>Approve budget
end

rect rgba(243,244,246,0.45)
Note over Customer,Support: 🚚 التنفيذ والمتابعة<br>Execution & Follow-up
Operations->>Customer: تحديث خطة الشحن<br>Update shipping plan
Operations->>Support: تسجيل خطر تأخير محتمل<br>Log potential delay
Support->>Customer: تقديم توجيهات المتابعة<br>Provide follow-up guidance
end

rect rgba(237,233,254,0.45)
Note over Customer,Finance: 🧾 الفوترة وما بعد التسليم<br>Billing & Aftercare
Finance->>Customer: إرسال الفاتورة النهائية<br>Send final invoice
Customer->>Support: استفسار ما بعد التسليم<br>Post-delivery inquiry
Support->>Operations: مشاركة الدروس المستفادة<br>Share lessons learned
end
```

> 📌 **ملاحظة تشغيلية:** يضمن هذا المسار امتلاك جميع الفرق لمصدر موحّد للحقيقة قبل وأثناء وبعد التسليم.
> 📌 **Operational Note:** This flow ensures every team shares a single source of truth before, during, and after delivery.

---

## 7. 🌱 امتدادات مستقبلية | Future Extensions

- 🌐 دمج واجهات مع أسواق عالمية لاستيراد بيانات المنتجات وحساب الرسوم تلقائيًا.
  🌐 Integrate APIs with global marketplaces to import product data and auto-calculate fees.
- 🤖 تطوير نماذج تنبؤ بالتأخير تعتمد على بيانات UC-03 لإطلاق إنذارات استباقية.
  🤖 Build delay-prediction models leveraging UC-03 data to trigger proactive alerts.
- 📚 إطلاق قاعدة معرفة متعددة اللغات لدعم العملاء والفرق الداخلية بمحتوى محدث باستمرار.
  📚 Launch a multilingual knowledge base to support customers and internal teams with continuously refreshed content.

---

## 8. 📅 إيقاع الحوكمة | Governance Rhythm

- 🗓️ مراجعة شهرية لحالات الاستخدام تجمع التحليل والعمليات والدعم لتقييم الأداء وتحديد التحسينات.
  🗓️ Conduct a monthly use case review across analysis, operations, and support to assess performance and spot improvements.
- ✅ بطاقة امتثال دورية تتابع سياسات الأمان والمالية مع أدلة موثقة لكل عنصر تحكم.
  ✅ Maintain a recurring compliance scorecard tracking security and finance policies with documented evidence for each control.
- 🛡️ تدريبات محاكاة ربع سنوية تغطي UC-01 حتى UC-04 للحفاظ على جاهزية خطط الطوارئ.
  🛡️ Run quarterly simulation drills covering UC-01 through UC-04 to keep contingency plans ready.

> 🧭 **تذكير:** حافظ على هذا المستند كمرجع تشغيلي حي، وقم بتحديثه عند تغير تدفقات العمل أو اللوائح.
> 🧭 **Reminder:** Treat this document as a living operational reference and refresh it whenever workflows or regulations change.
