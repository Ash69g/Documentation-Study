# 🏛️ معمارية النظام

🏛️ System Architecture

| الحقل                | القيمة                                                                                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 🧩 المنتج            | منصة وساطة التسوق CA Admin<br>CA Admin Shopping Mediation Platform                                                                                                                                                                   |
| 📅 الإصدار           | الإصدار 0.1 – آخر تحديث 2025-09-08 – المالك: عبدالله الشائف<br>Version 0.1 – Last updated 2025-09-08 – Owner: Abdullah Alshaif                                                                                                       |
| 🛡️ الرؤية المعمارية  | منصة مرنة، قابلة للتوسع، وآمنة مع تخصيص إقليمي.<br>Resilient, scalable, and secure platform with regional customisation.                                                                                                             |
| 🧰 التقنيات الرئيسية | Flutter، Firebase (Firestore، Auth، Storage، Cloud Functions)، ذاكرة محلية.<br>Flutter, Firebase (Firestore, Auth, Storage, Cloud Functions), Local Cache.                                                                           |
| 🔗 مراجع ذات صلة     | docs/01-vision/01-vision.md، docs/05-data-model/05-data-model.md، docs/10-nfr-and-quality/10-nfr-and-quality.md.<br>docs/01-vision/01-vision.md, docs/05-data-model/05-data-model.md, docs/10-nfr-and-quality/10-nfr-and-quality.md. |

> 📌 **لماذا تقرأ هذا المستند؟**
> 📌 **Why read this document?**
>
> - 🧱 يوضح تطبيق مبادئ المعمارية النظيفة على مكدس Flutter/Firebase للحفاظ على انفصال الطبقات واستقرار التطوير.
>   🧱 Demonstrates Clean Architecture on the Flutter/Firebase stack to keep layers decoupled and development stable.
> - 🛰️ يعرض كيفية تكامل الخدمات والوظائف السحابية لتقديم المرونة والقابلية للمراقبة والأمان المتوافق.
>   🛰️ Shows how cloud services and functions integrate to deliver flexibility, observability, and compliant security.

---

## 🧭 1. المقدمة

🧭 1. Introduction

- 🛠️ **ما الذي نبنيه:** تطبيق Flutter لأنظمة Android وiOS يتزامن آنياً مع Firebase لتقديم تجربة موحدة.
  🛠️ **What we build:** A Flutter application for Android/iOS synchronising in real time with Firebase for a unified experience.
- 🔧 **كيف نحافظ على القابلية للتكيف:** طبقات معيارية تفصل العرض والمنطق والبيانات لتسهيل التغيير المستقبلي بدون تشابك.
  🔧 **How we stay adaptable:** Modular layers separating presentation, domain, and data concerns to enable future change without coupling.
- 👥 **من المستفيد:** فرق العمليات والمالية والدعم التي تعتمد على استقرارية المنصة وسهولة التوسع الإقليمي.
  👥 **Who benefits:** Operations, finance, and support teams relying on a stable platform that scales regionally with ease.

---

## 🧱 2. مبادئ التصميم الأساسية

🧱 2. Core Design Principles

| المبدأ                    | الشرح                                                                                                                                                                   | الفائدة                                                                                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 🧼 الطبقات النظيفة        | تقسيم العرض، التطبيق، المجال، والبيانات للحد من الاعتماد المتبادل.<br>Separate presentation, application, domain, and data layers to minimise coupling.                 | 🔄 يتيح تعديل الواجهة أو المنطق دون آثار جانبية غير متوقعة.<br>Allows UI or logic changes without unintended side effects.                       |
| 🔄 أولوية العمل دون اتصال | استخدام تخزين محلي مع مزامنة خلفية إلى Firestore لضمان الاستمرارية.<br>Use local storage with background sync to Firestore to guarantee continuity.                     | 📶 يحافظ على تجربة مستخدم ثابتة حتى مع ضعف الاتصال.<br>Keeps user experience steady even when connectivity drops.                                |
| 🛡️ أمان مبني على الأدوار  | مصادقة Firebase مع قواعد دقيقة في Firestore ووظائف تحقق إضافية.<br>Firebase Auth with granular Firestore rules and supporting validation functions.                     | 🔐 يقدم تحكمًا دقيقًا بالصلاحيات ويضمن التتبع الكامل للأحداث الحساسة.<br>Delivers precise access control with full tracking of sensitive events. |
| 📊 مراقبة قابلة للتدقيق   | تسجيل مركزي للأحداث وتدفقات نحو BigQuery ولوحات مراقبة محدثة.<br>Centralised logging, BigQuery export, and live monitoring dashboards.                                  | 👁️ يوفر شفافية لحظية لفرق العمليات والتدقيق والامتثال.<br>Provides live transparency for operations, audit, and compliance teams.                |
| ⚙️ قابلية التوسع الإقليمي | تكوينات ديناميكية تدعم فروقات السوق بين السعودية واليمن بدون إعادة نشر.<br>Dynamic configuration supporting market differences between KSA and Yemen without redeploys. | 🌍 يختصر زمن التهيئة ويسمح بتحسينات محلية سريعة.<br>Shortens configuration cycles and enables rapid localised improvements.                      |

---

## 🏗️ 3. العرض الطبقي

🏗️ 3. Layered View

`mermaid
flowchart LR
classDef layer fill:#f8fafc,stroke:#475569,color:#0f172a,stroke-width:1px;

subgraph PresentationLayer["طبقة العرض\nPresentation Layer"]
UI["واجهة Flutter\nFlutter UI"]:::layer
end

subgraph ApplicationLayer["طبقة التطبيق\nApplication Layer"]
UseCases["حالات الاستخدام\nUse Cases"]:::layer
Controllers["وحدات التحكم\nControllers"]:::layer
end

subgraph DomainLayer["طبقة المجال\nDomain Layer"]
Entities["كيانات وقواعد\nEntities & Rules"]:::layer
end

subgraph DataLayer["طبقة البيانات\nData Layer"]
Repos["مستودعات\nRepositories"]:::layer
Remote["مصادر بعيدة\nRemote Sources"]:::layer
LocalCache["ذاكرة محلية\nLocal Cache"]:::layer
end

UI --> UseCases
UseCases --> Controllers
Controllers --> Entities
Entities --> Repos
Repos --> Remote
Repos --> LocalCache
`

- 🧭 يوضح تسلسل تدفق الطلب من الواجهة حتى المصادر البعيدة والمحلية لضمان فهم مشترك للحدود.
  🧭 Shows the order flow from UI down to remote and local sources to cement shared understanding of boundaries.
- 🧪 يمنح فرق الاختبار نقطة دخول واضحة لكل طبقة مما يسهل تصميم السيناريوهات والتحقق المستهدف.
  🧪 Gives QA teams a clear entry point per layer, simplifying scenario design and targeted verification.

---

## 🔌 4. خدمات Firebase والتكاملات

🔌 4. Firebase Services & Integration

| الخدمة                     | الاستخدام المعماري                                                                                                                               | القيمة التشغيلية                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔐 Auth                    | إدارة الهوية، OTP، وSSO مع Google/Apple، وتخزين المطالبات المخصصة.<br>Identity management, OTP, SSO with Google/Apple, and custom claim storage. | 🛡️ يؤمن الجلسات ويغذي سياسات RBAC الدقيقة والتدقيق الفوري.<br>Secures sessions and powers precise RBAC policies with instant auditing.      |
| 📚 Firestore               | تخزين السجلات التشغيلية، حالات الطلب، وواجهات القراءة المبسطة.<br>Stores operational records, order states, and optimised read projections.      | ⚡ يوفر تحديثات فورية للأجهزة ويحافظ على الشفافية بين الفرق.<br>Delivers realtime updates across devices and keeps teams aligned.           |
| 🗂️ Storage                 | حفظ المرفقات، الصور، والفواتير الصادرة في حاويات مشفرة.<br>Stores attachments, images, and issued invoices inside encrypted buckets.             | 🔒 يضمن حوكمة الوصول الدقيقة ويمنع تسريب المستندات الحساسة.<br>Enforces fine-grained access and prevents leakage of sensitive documents.    |
| 🧠 Cloud Functions         | تنفيذ عمليات الذكاء الخلفي مثل التسعير والتنبيهات والتحقق الإضافي.<br>Executes backend intelligence like pricing, alerts, and extra validation.  | ⚙️ يبقي المنطق بعيدًا عن الأجهزة ويوفر موارد التطبيقات المحمولة.<br>Keeps heavy logic off devices and preserves mobile resources.           |
| 🛰️ Hosting & Remote Config | إدارة تكوينات الواجهة والترحيب الديناميكي وحملات التواصل.<br>Controls UI configuration, welcome flows, and communication campaigns.              | 🚀 يسمح بالتحديث السريع دون إعادة نشر ويُمكّن التجارب المتدرجة.<br>Enables rapid updates without redeploys and empowers staged experiments. |

---

## 📶 5. إستراتيجية العمل دون اتصال

📶 5. Offline-First Strategy

- 💾 تعتمد المنصة على مخازن محلية مثل SQLite أو Hive لتخزين الطلبات النشطة وبيانات التتبع الحرجة.
  💾 The platform depends on local stores such as SQLite or Hive to keep active orders and critical tracking data available.
- 🔁 تستخدم مزامنة ثنائية الاتجاه مع قوائم انتظار في الخلفية لضمان تسوية التحديثات بدون تعارضات.
  🔁 Bi-directional sync with background job queues ensures updates reconcile without conflicts.
- 🕒 تتحقق الخوارزميات من الطوابع الزمنية قبل الكتابة لمنع البيانات القديمة من استبدال الأحدث.
  🕒 Timestamp validation before writes stops stale information from overwriting newer records.
- 🚀 عند استعادة الاتصال تُفرّغ الطوابير وتُعاد محاولات الدفع أو التنبيهات تلقائيًا لضمان الإكمال.
  🚀 Once reconnected, queues flush and payment or alert retries execute automatically to guarantee completion.

---

## 📘 6. سجلات قرارات المعمارية

📘 6. Architecture Decision Records

| المعرّف | القرار                                                                                                                                           | التاريخ                | الحالة          | المبرر                                                                                                                                          |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ADR-01  | اعتماد نمط MVVM مع Riverpod لإدارة الحالة داخل طبقة العرض.<br>Adopt MVVM with Riverpod for state management inside the presentation layer.       | مارس 2025<br>Mar 2025  | جاري<br>Active  | يقلل التعقيد ويحافظ على اختبارية عالية للمكونات المرئية.<br>Reduces complexity while preserving high testability of view components.            |
| ADR-02  | ربط Firestore بعمليات تفريغ ليلية إلى BigQuery للتقارير والتحليلات.<br>Wire Firestore nightly exports into BigQuery for reporting and analytics. | مارس 2025<br>Mar 2025  | جاري<br>Active  | يوفر مصدرًا موحدًا للبيانات المالية والتشغيلية المتقدمة.<br>Provides a unified source for advanced financial and operational insight.           |
| ADR-03  | تنفيذ RBAC عبر Firebase Auth مع مطالبات مخصصة ووظائف تحقق إضافية.<br>Implement RBAC using Firebase Auth with custom claims plus guard functions. | أبريل 2025<br>Apr 2025 | مخطط<br>Planned | يتيح تحديث الصلاحيات دون نشر ويضمن التتبع الكامل للتغييرات الحساسة.<br>Allows privilege updates without redeploys and keeps a full audit trail. |

---

## 🔄 7. تدفق البيانات من طرف إلى طرف

🔄 7. End-to-End Data Flow

`mermaid
sequenceDiagram
participant Customer as "العميل\nCustomer"
participant App as "تطبيق Flutter\nFlutter App"
participant Firestore as "قاعدة Firestore\nFirestore"
participant Functions as "وظائف سحابية\nCloud Functions"
participant BigQuery as "مستودع BigQuery\nBigQuery"

Customer->>App: "إرسال طلب جديد\nSubmit new order"
App->>Firestore: "تخزين الطلب\nPersist order"
Firestore->>Functions: "تشغيل التسعير\nTrigger pricing"
Functions->>Firestore: "تحديث التكاليف\nUpdate costs"
Firestore->>App: "بث الحالة الجديدة\nBroadcast new status"
Firestore-->>BigQuery: "مزامنة ليلية للتقارير\nNightly sync for reporting"
`

- 🔂 يحافظ التسلسل على تزامن التطبيق مع نتائج الوظائف الخلفية دون تدخل يدوي.
  🔂 Keeps the app aligned with backend computation outcomes without manual intervention.
- 📡 يوفّر مسارًا رسميًا نحو BigQuery للتقارير المتقدمة دون التأثير على الأداء اليومي.
  📡 Provides an official route into BigQuery for advanced reporting without harming daily performance.

---

## 🚀 8. مشهد النشر والتكاملات

🚀 8. Deployment & Integrations View

`mermaid
flowchart TB
classDef node fill:#f1f5f9,stroke:#475569,color:#0f172a,stroke-width:1px;

subgraph Clients["أجهزة العميل\nClient Devices"]
Mobile["تطبيقات Flutter\nFlutter Apps"]:::node
end

subgraph Firebase["منصة Firebase\nFirebase Platform"]
Auth[("خدمة المصادقة\nAuth")]:::node
Firestore[("قاعدة البيانات\nFirestore")]:::node
Storage[("تخزين الملفات\nStorage")]:::node
Functions[["وظائف سحابية\nCloud Functions"]]:::node
Hosting[["الاستضافة والتكوين\nHosting & Remote Config"]]:::node
end

subgraph ExternalSystems["أنظمة خارجية\nExternal Systems"]
Payments[("بوابات الدفع\nPayment Gateways")]:::node
Vendors[("شركاء الإمداد\nSupply Partners")]:::node
Analytics[("تحليلات متقدمة\nAdvanced Analytics")]:::node
end

Mobile --> Auth
Mobile --> Firestore
Mobile --> Storage
Mobile --> Hosting
Functions --> Firestore
Functions --> Storage
Functions --> Payments
Functions --> Vendors
Firestore --> Analytics
`

- 🔐 تستخدم كل القنوات بروتوكول HTTPS وOAuth2 لحماية البيانات والتحقق من الهوية بين الأنظمة.
  🔐 All channels rely on HTTPS and OAuth2 to protect data in transit and verify identities across systems.
- 📟 يتم تشغيل مراقبة مستمرة عبر Crashlytics وCloud Logging مع تنبيهات فورية للحوادث العالية.
  📟 Continuous monitoring through Crashlytics and Cloud Logging raises instant alerts for high-severity incidents.

---

## 🧑‍💻 9. الأدوار التشغيلية داخل المعمارية

🧑‍💻 9. Operational Roles in Architecture

| الدور                | الطبقات الأساسية                                              | طريقة التفاعل                                                                                                                                                      | القيمة المتحققة                                                                                                                       |
| -------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| 👩‍💼 موظف خدمة العملاء | العرض، التطبيق، المجال.<br>Presentation, Application, Domain. | يستخدم واجهات Flutter لالتقاط الطلبات والتحقق من البيانات عبر منطق التطبيق.<br>Uses Flutter UI to capture orders and validate data through application logic.      | ⚡ يحافظ على جودة البيانات ويغلق الطلبات بسرعة لصالح العميل.<br>Keeps data quality high and closes requests quickly.                  |
| 🧾 معالج الطلبات     | التطبيق، المجال، البيانات.<br>Application, Domain, Data.      | يصمم أدوات المكتب الخلفي لمراجعة الطلبات وتحديث الشحنات والموردين.<br>Operates back-office tools to review orders and update shipments or vendors.                 | ⏱️ يقلل مدة المعالجة ويقلص أخطاء التكرار في المسارات الحرجة.<br>Shortens processing time and reduces repeat errors in critical flows. |
| 💰 مسؤول المالية     | المجال، البيانات، الوظائف.<br>Domain, Data, Functions.        | يشرف على المصالحة ويشغّل الوظائف لإنتاج التقارير المالية الدقيقة.<br>Oversees reconciliation and runs functions to produce accurate financial reports.             | 📈 يخفض الجهد اليدوي ويرفع دقة التقارير الرقابية.<br>Reduces manual workload and boosts regulatory reporting accuracy.                |
| 🛰️ قائد العمليات     | العرض، الوظائف.<br>Presentation, Functions.                   | يراقب اللوحات ويطلق التنبيهات أو التصعيد عبر الوظائف السحابية المتخصصة.<br>Monitors dashboards and triggers alerts or escalations via specialised cloud functions. | 🛡️ يحافظ على الالتزام باتفاقيات SLA ويدعم التحسين المستمر للمنصة.<br>Maintains SLA commitments and drives continuous improvement.     |

---

## 🛡️ 10. الأمان والامتثال

🛡️ 10. Security & Compliance

- 🔑 تُستخدم المطالبات المخصصة في Firebase Auth لمواءمة الصلاحيات الديناميكية مع السياسة المركزية.
  🔑 Custom claims in Firebase Auth align dynamic permissions with central policy controls.
- 🧾 تُدرج معرفات uditTrailId داخل الوثائق الحرجة وترتبط بتحليلات BigQuery للتتبع الكامل.
  🧾 uditTrailId identifiers are embedded in critical documents and linked to BigQuery analytics for end-to-end traceability.
- 📜 تتبع سياسات الاحتفاظ بالبيانات اللوائح المالية في السعودية واليمن مع جدول مراجعة دوري.
  📜 Data retention policies follow Saudi and Yemeni financial regulations with a scheduled review cadence.
- 📁 يتم تحديث NFRs في docs/10-nfr-and-quality/10-nfr-and-quality.md وتحديث ADRs فور أي تغييرات كبيرة.
  📁 NFRs are maintained in docs/10-nfr-and-quality/10-nfr-and-quality.md, and ADRs are refreshed after major changes.

---

## 🗺️ 11. مواءمة خارطة الطريق

🗺️ 11. Roadmap Alignment

- ⚙️ تفعيل وظائف سحابية متخصصة (الفوترة، الشحن، الأمان) بالتزامن مع محطات خارطة الطريق.
  ⚙️ Activate specialised Cloud Functions (billing, shipping, security) in lockstep with roadmap milestones.
- 📝 تحديث قرارات ADR مع كل مرحلة تسليم لحفظ تتبع القرارات ودعم التعلم المؤسسي.
  📝 Update ADRs alongside delivery milestones to preserve decision traceability and institutional learning.
- 🎯 ضمان أن 80٪ من قواعد المجال و100٪ من حالات الاستخدام تعيش داخل طبقة التطبيق قبل نهاية الربع الرابع.
  🎯 Ensure 80% of domain rules and 100% of use cases reside inside the application layer by Q4.
- 🔗 دمج بوابات الدفع الخارجية حسب Roadmap.md مع مراقبة الأثر الأمني والأداءي.
  🔗 Integrate external payment gateways per Roadmap.md while monitoring security and performance impact.
- 📈 تنفيذ مراجعات أداء وحوكمة دورية للبقاء متوافقين مع النمو المتوقع ومتطلبات السوق.
  📈 Run recurring performance and governance reviews to stay aligned with expected growth and market demands.

> 🧭 **تذكير تنفيذي:** حدّث هذا المستند مع كل قرار معماري أو تغيير تنظيمي للحفاظ على تناسق المنصة وتوافقها.
> 🧭 **Execution reminder:** Update this document alongside each architectural decision or regulatory shift to keep the platform coherent and compliant.
