# 🚀 حالات الاستخدام | Use Cases

| الحقل           | القيمة                                                                                                                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🧩 المنتج       | منصة وساطة التسوق CA Admin<br>CA Admin Shopping Mediation Platform                                                                                                                                                     |
| 📅 الإصدار      | الإصدار 0.2 – آخر تحديث 2025-09-21 – المالك: عبدالله الشائف<br>Version 0.2 – Last updated 2025-09-21 – Owner: Abdullah Alshaif                                                                                         |
| 🧰 التقنيات     | Flutter، Firebase (Firestore، Auth، Storage، Functions)<br>Flutter, Firebase (Firestore, Auth, Storage, Functions)                                                                                                     |
| 🔗 مراجع مرتبطة | docs/01-vision/01-vision.md، docs/03-stories/03-stories.md، docs/10-nfr-and-quality/10-nfr-and-quality.md<br>docs/01-vision/01-vision.md, docs/03-stories/03-stories.md, docs/10-nfr-and-quality/10-nfr-and-quality.md |

> 📌 **لماذا تقرأ هذا المستند؟**
> 📌 **Why read this document?**
>
> - 🧠 يحوّل المتطلبات السردية إلى حالات استخدام قابلة للتنفيذ تدعم فرق التحليل والتسليم بأدوات موحدة.
>   🧠 Turns narrative requirements into executable use cases that equip analysis and delivery teams with shared tooling.
> - 🤝 يبني لغة مشتركة بين العمليات والتقنية والمالية لتحديد نقاط التحكم وتقليل المخاطر التشغيلية.
>   🤝 Builds a shared language across operations, technology, and finance to clarify control points and reduce operational risk.

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

`mermaid
flowchart LR
classDef actor fill:#ffffff,stroke:#4b5563,stroke-width:1px,color:#111827;
classDef usecase fill:#f3f4f6,stroke:#4b5563,stroke-width:1px,rx:32,ry:32,color:#111827;

Customer["العميل\nCustomer"]:::actor
Operations["فريق العمليات\nOperations Team"]:::actor
Vendor["المورّد الخارجي\nExternal Vendor"]:::actor
Finance["فريق المالية\nFinance Team"]:::actor
Support["فريق الدعم\nSupport Team"]:::actor

UC1(["تقديم الطلب\nSubmit Order"]):::usecase
UC2(["متابعة الحالة\nTrack Status"]):::usecase
UC3(["التحقق من الطلب\nValidate Order"]):::usecase
UC4(["تنسيق الشحن\nCoordinate Shipment"]):::usecase
UC5(["تحديث المشتريات\nUpdate Procurement"]):::usecase
UC6(["تسوية المدفوعات\nReconcile Payments"]):::usecase
UC7(["معالجة التذاكر\nHandle Support Ticket"]):::usecase

Customer --> UC1
Customer --> UC2
Operations --> UC3
Operations --> UC4
Vendor --> UC5
Finance --> UC6
Support --> UC7

UC4 -. "يشمل\nIncludes" .-> UC5
UC6 -. "يمتد\nExtends" .-> UC3
`

---

## 2. 🎭 الممثلون الرئيسيون | Primary Actors

| الممثل             | الدور                                                                                                                                                          | المسؤوليات الأساسية                                                                                                                                                | القيمة المضافة                                                                                                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🙋‍♂️ العميل          | يستخدم المنصة لتجميع الروابط والكميات وتقديم الطلبات بدقة.<br>Uses the platform to gather links and quantities and submit precise orders.                      | يزوّد البيانات الأولية ويؤكد تفضيلات الشحن والدفع لدعم التخطيط.<br>Provides initial data and confirms shipping and payment preferences to aid planning.            | يعكس احتياجات السوق ويضمن توافق الخدمة مع توقعات المستهلك النهائي.<br>Represents market demand and ensures the service aligns with end-customer expectations.                    |
| 🛠️ أخصائي العمليات | يدير تقييم الطلبات والتواصل مع الموردين وتحديث الحالة باستمرار.<br>Manages request review, supplier communication, and continuous status updates.              | يتحقق من اكتمال المستندات، يوزع الأعمال، ويراقب التزامات SLA.<br>Validates documentation, assigns work, and monitors SLA commitments.                              | يحافظ على انسياب العمل عبر ربط فرق الدعم والمالية والموردين في مسار واحد.<br>Keeps work flowing by aligning support, finance, and suppliers on a single track.                   |
| 🌐 مسؤول الموردين  | ينسق العروض ويؤكد التوافر ويساعد في خطط الدمج والشحن.<br>Coordinates quotes, confirms availability, and assists in consolidation and shipping plans.           | يحدد البدائل، يتفاوض على التسعير، ويقدم مواعيد توريد موثوقة.<br>Surfaces alternatives, negotiates pricing, and provides reliable lead times.                       | يضمن جاهزية التوريد ويقلل مخاطر انقطاع السلسلة على مستوى الطلبات الحساسة.<br>Ensures supply readiness and lowers chain interruption risk for critical orders.                    |
| 💰 محلل المالية    | يطابق المدفوعات مع الطلبات ويعتني بإخراج تقارير التدقيق الزمنية.<br>Matches payments to orders and produces timely audit reports.                              | يشغّل نظام المحاسبة، يراقب الفروقات، ويغلق الدورات المالية بسرعة.<br>Runs accounting routines, monitors variances, and closes financial cycles quickly.            | يعزز الثقة الرقابية ويربط المقاييس المالية بأداء التشغيل لتسريع القرارات.<br>Strengthens governance and links financial metrics to operational performance for faster decisions. |
| 🤝 وكيل الدعم      | يدير التذاكر، يراقب إنذارات التأخير، ويهتم بتجربة العميل بعد التسليم.<br>Handles tickets, watches delay alerts, and curates post-delivery customer experience. | ينسق مع الفرق لخطط المعالجة، ويجمع التغذية الراجعة، ويقترح تحسينات الخدمة.<br>Coordinates mitigation plans, gathers feedback, and recommends service enhancements. | يحافظ على رضا المستخدمين ويغلق الدروس المستفادة لدعم تحسين المنصة المستمر.<br>Sustains user satisfaction and closes lessons learned to support ongoing platform improvement.     |

---

## 3. 📂 حالات الاستخدام الجوهرية | Core Use Cases

| الحالة | العنوان                                                              | الممثل الرئيسي                                                   | الغاية                                                                                                                                                              | الأولوية               |
| ------ | -------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| UC-01  | 🛒 تقديم طلب شراء<br>🛒 Submit Purchase Request                      | 🙋‍♂️ العميل<br>🙋‍♂️ Retail Customer                                  | يلتقط الطلب الكامل ويولّد مرجع تتبع فوري لضمان شفافية المعاملة.<br>Captures the full order and issues an instant tracking reference for transactional transparency. | 🔴 عالية<br>🔴 High    |
| UC-02  | 📦 إدارة المشتريات والتجميع<br>📦 Manage Procurement & Consolidation | 🛠️ أخصائي العمليات<br>🛠️ Operations Specialist                   | ينسّق عروض الموردين ويعد خطة الدمج لضبط التكلفة والجدول الزمني.<br>Aligns supplier quotes and prepares consolidation plans to control cost and schedule.            | 🔴 عالية<br>🔴 High    |
| UC-03  | 🚚 تتبع الشحن والتسليم<br>🚚 Track Shipment & Delivery               | 🛠️ أخصائي العمليات + 🤝 وكيل الدعم<br>🛠️ Operations & 🤝 Support | يوفّر رؤية لحظية ومعالجة مبكرة للتأخيرات لحماية تجربة العميل.<br>Delivers real-time visibility and early delay mitigation to protect customer experience.           | 🟠 متوسطة<br>🟠 Medium |
| UC-04  | 💳 تسوية المدفوعات والتقارير<br>💳 Reconcile Payments & Reporting    | 💰 محلل المالية<br>💰 Finance Team                               | يضمن إغلاق الدورة المالية وإصدار تقارير المراجعة خلال يوم عمل واحد.<br>Ensures financial closure and audit-ready reporting within one business day.                 | 🔴 عالية<br>🔴 High    |

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

| صاحب المصلحة | القيمة المتحققة                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🙋‍♂️ العميل    | يحصل على تجربة طلب شفافة مع تتبع فوري وخيارات ملاحظات واضحة.<br>Obtains a transparent ordering experience with instant tracking and clear note options. |
| 🛠️ العمليات  | يتلقى بيانات منظمة تسهّل التدقيق السريع وتوزيع المهام مباشرة.<br>Receives structured data that simplifies quick review and direct task assignment.      |
| 💰 المالية   | ينال رؤية مبكرة لتوقع الرسوم مما يقلل اختلافات الفواتير لاحقًا.<br>Gains early visibility of expected fees reducing later invoice variances.            |

`mermaid
sequenceDiagram
participant Customer as "العميل\nCustomer"
participant Platform as "منصة CA Admin\nCA Admin Platform"
participant Operations as "فريق العمليات\nOperations Team"
participant Archive as "مخزن المستندات\nDocument Store"

Customer->>Platform: "فتح نموذج الطلب\nOpen order form"
Platform->>Platform: "التحقق من الحقول\nValidate inputs"
Customer->>Platform: "إدخال الروابط والكميات\nSubmit links and quantities"
Platform->>Archive: "حفظ المرفقات\nStore attachments"
Platform->>Operations: "تنبيه بطلب جديد\nNotify new request"
Operations->>Platform: "تأكيد الاستلام\nAcknowledge receipt"
Platform->>Customer: "إرسال رقم التتبع\nSend tracking reference"
`

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

| صاحب المصلحة | القيمة المتحققة                                                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🛠️ العمليات  | يحافظ على لوحة مشتريات مركزية بخيارات دمج واضحة ومسارات موافقات قابلة للتتبع.<br>Maintains a central procurement board with clear consolidation options and traceable approvals. |
| 🌐 المورّد   | يحصل على تعليمات دقيقة تسمح له بتخطيط المخزون وتسليماته بكفاءة.<br>Receives precise instructions that let the supplier plan inventory and deliveries efficiently.                |
| 🤝 الدعم     | يعرف النقاط الحرجة مسبقًا لاستعداد دعم العملاء في حال تأخر التوريد.<br>Knows critical checkpoints in advance to prepare customer support if supply delays occur.                 |

`mermaid
flowchart LR
  A["استلام رد المورد\nReceive vendor response"] --> B{"هل التوفر مؤكد؟\nAvailability confirmed?"}
  B -- "نعم\nYes" --> C["تحديث بنود الطلب\nUpdate order lines"]
  C --> D["صياغة خطة الدمج\nCreate consolidation plan"]
  D --> E["حساب التكاليف\nCalculate costs"]
  E --> F["موافقة المشرف\nSupervisor approval"]
  F --> G["مشاركة تعليمات التغليف\nShare packing instructions"]
  B -- "لا\nNo" --> H["اقتراح مورد بديل\nSuggest alternate vendor"]
  H --> B
`

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

| صاحب المصلحة | القيمة المتحققة                                                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🙋‍♂️ العميل    | يتلقى تحديثات دقيقة تعزز الثقة وتتيح التخطيط للاستلام دون مفاجآت.<br>Receives accurate updates that boost trust and allow pickup planning without surprises.    |
| 🛠️ العمليات  | يحصل على إنذار مبكر للأزمات لتصحيح المسار بسرعة وتقليل تكاليف التعثر.<br>Obtains early warning on issues to correct course quickly and reduce disruption costs. |
| 💰 المالية   | تتوفر بيانات زمنية دقيقة لدعم احتساب الإيراد والديون قصيرة الأجل.<br>Has precise timing data to support revenue recognition and short-term liabilities.         |

`mermaid
timeline
  title خط زمني للشحنة - Shipment Timeline
  section المسار الرئيسي\nPrimary Route
    مغادرة من المستودع الأصلي\nOrigin dispatch : T0
    وصول إلى مركز السعودية\nKSA hub arrival : T0 + 2d
    انتقال إلى مركز اليمن\nTransfer to Yemen hub : T0 + 5d
    تسليم الميل الأخير\nLast mile delivery : T0 + 7d
  section نقاط التحكم\nControl Points
    تحقق التأخير\nDelay check : كل 12 ساعة
    إشعار العميل\nCustomer notification : عند أي تغيير حالة
    جاهزية الفوترة\nBilling readiness : بعد إثبات التسليم
`

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

| صاحب المصلحة | القيمة المتحققة                                                                                                                           |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 💰 المالية   | تمتلك دورة إغلاق سريعة مع سجلات مراجعة كاملة وشفافة.<br>Gains a fast close cycle with complete and transparent audit trails.              |
| 🛠️ العمليات  | تحصل على إشعارات فارق تمكنها من إصلاح البيانات المصدرية مبكرًا.<br>Receives variance alerts that allow early correction of upstream data. |
| 🙋‍♂️ العميل    | يستفيد من فواتير دقيقة ومواعيد استرداد أموال موثوقة.<br>Benefits from accurate invoices and reliable refund timing.                       |

`mermaid
flowchart LR
  Payments["دفعات واردة\nIncoming payments"] --> Match["محرك المطابقة\nMatching engine"]
  Orders["طلبات معتمدة\nApproved orders"] --> Match
  Match --> Variance{"فروقات موجودة؟\nVariance detected?"}
  Variance -- "نعم\nYes" --> Review["قائمة مراجعة الاستثناءات\nException review list"]
  Variance -- "لا\nNo" --> Report["تقرير مالي نهائي\nFinal financial report"]
  Review --> Resolve["معالجة الفروقات\nResolve variance"]
  Resolve --> Match
  Report --> Archive["أرشفة مؤسسية\nEnterprise archive"]
  Report --> Dashboard["تحديث لوحة الرقابة\nUpdate control dashboard"]
`

> 📊 **مؤشر الامتثال:** إقفال المصالحة خلال ≤24 ساعة مع توثيق 100% من الفروقات في سجل المراجعة.
> 📊 **Compliance Indicator:** Complete reconciliation within ≤24 hours with 100% of variances documented in the audit log.

---

## 5. 🔗 مصفوفة تتبع المتطلبات | Requirement Traceability Matrix

| حالة الاستخدام | معرف المتطلب | التفاصيل                                                                                                                                                            | الأولوية               | مرجع الاختبار           |
| -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------------------- |
| UC-01          | REQ-INT-001  | يدعم إدخال روابط متعددة مع حساب تلقائي للرسوم لضمان دقة التسعير.<br>Supports entering multiple product links with automated fee calculation for pricing accuracy.   | 🔴 عالية<br>🔴 High    | TC-INT-CreateOrder      |
| UC-02          | REQ-OPS-004  | يوفر لوحة مشتريات تسجل قرارات الاعتماد وتدفقات العمل المرتبطة.<br>Provides a procurement board that logs approval decisions and related workflows.                  | 🔴 عالية<br>🔴 High    | TC-OPS-ProcurementBoard |
| UC-03          | REQ-OPS-009  | يطلق إنذارات زمنية عند تجاوز نقاط المراقبة الحرجة لضمان الاستجابة السريعة.<br>Triggers timed alerts when critical checkpoints are breached to ensure fast response. | 🟠 متوسطة<br>🟠 Medium | TC-OPS-CheckpointAlerts |
| UC-04          | REQ-FIN-003  | يحقق مصالحة المدفوعات خلال 24 ساعة ويصدر تقارير PDF جاهزة للتدقيق.<br>Reconciles payments within 24 hours and exports audit-ready PDF reports.                      | 🔴 عالية<br>🔴 High    | TC-FIN-Reconcile        |

> 🛠️ **تنبيه تشغيلي:** حدّث هذه المصفوفة مع أي تغيير في نطاق قصص المستخدم أو ضوابط الأمان.
> 🛠️ **Operational Reminder:** Update this matrix whenever user-story scope or security controls change.

---

## 6. 🎞️ محاكاة سيناريو متكاملة | Integrated Scenario Simulation

`mermaid
sequenceDiagram
participant Customer as "العميل\nCustomer"
participant Operations as "العمليات\nOperations"
participant Vendor as "المورّد\nVendor"
participant Finance as "المالية\nFinance"
participant Support as "الدعم\nSupport"

Customer->>Operations: "إرسال طلب مفصل\nSubmit detailed request"
Operations->>Customer: "تأكيد الاستلام والرسوم\nConfirm receipt and fees"
Operations->>Vendor: "طلب التوافر والتسعير\nRequest availability and quote"
Vendor->>Operations: "تقديم عرض ومدة توريد\nProvide quote and lead time"
Operations->>Finance: "مشاركة تقدير التكلفة\nShare cost estimate"
Finance->>Operations: "اعتماد الميزانية\nApprove budget"
Operations->>Customer: "تحديث خطة الشحن\nUpdate shipping plan"
Operations->>Support: "تسجيل خطر تأخير محتمل\nLog potential delay"
Support->>Customer: "تقديم توجيهات المتابعة\nProvide follow-up guidance"
Finance->>Customer: "إرسال الفاتورة النهائية\nSend final invoice"
Customer->>Support: "استفسار ما بعد التسليم\nPost-delivery inquiry"
Support->>Operations: "مشاركة الدروس المستفادة\nShare lessons learned"
`

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

## 📅 8. إيقاع الحوكمة | Governance Rhythm

- 🗓️ مراجعة شهرية لحالات الاستخدام تجمع التحليل والعمليات والدعم لتقييم الأداء وتحديد التحسينات.
  🗓️ Conduct a monthly use case review across analysis, operations, and support to assess performance and spot improvements.
- ✅ بطاقة امتثال دورية تتابع سياسات الأمان والمالية مع أدلة موثقة لكل عنصر تحكم.
  ✅ Maintain a recurring compliance scorecard tracking security and finance policies with documented evidence for each control.
- 🛡️ تدريبات محاكاة ربع سنوية تغطي UC-01 حتى UC-04 للحفاظ على جاهزية خطط الطوارئ.
  🛡️ Run quarterly simulation drills covering UC-01 through UC-04 to keep contingency plans ready.

> 🧭 **تذكير:** حافظ على هذا المستند كمرجع تشغيلي حي، وقم بتحديثه عند تغير تدفقات العمل أو اللوائح.
> 🧭 **Reminder:** Treat this document as a living operational reference and refresh it whenever workflows or regulations change.
