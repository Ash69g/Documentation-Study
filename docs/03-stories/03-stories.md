﻿# 📖 قصص المستخدم

User Stories

---

> **المشروع:** منصة إدارة وساطة التسوق CA Admin  
> **Project:** CA Admin Shopping Mediation Platform  
> **التقنيات:** Flutter، Firebase (Firestore، Auth، Storage، Functions)  
> **Stack:** Flutter, Firebase (Firestore, Auth, Storage, Functions)  
> **الإصدار:** 0.1 (رؤية) - المالك: عبدالله الشائف - آخر تحديث: 2025-09-20  
> **Version:** 0.1 (Vision) - Owner: Abdullah Alshaif - Last Updated: 2025-09-20

**شرح مختصر:**
قصص المستخدم توضح احتياجات الأطراف المختلفة وتربط كل قصة بهدف وقيمة واضحة.

**Summary:**
User stories clarify the needs of different parties and link each story to a clear goal and value.

---

## 1. مقدمة

Introduction

---

### 1.1 نظرة بصرية

Visual Overview

**شرح مختصر:**
يوضح المخطط رحلة المستخدم من استكشاف المنتجات حتى إتمام الدفع والتسوية المالية.

**Summary:**
The diagram shows the user journey from product exploration to payment and financial reconciliation.

```mermaid
journey
  title رحلة قصة المستخدم / User Story Journey
  section عميل Customer
    استكشاف المنتجات / Explore products: 5: Customer/العميل
    تقديم طلب / Place order: 5: Customer/العميل
    متابعة حالة / Track status: 4: Customer/العميل
  section خدمة العملاء Service
    التحقق من الطلب / Validate order: 4: Service/الخدمة
    تحديث بيانات / Update details: 3: Service/الخدمة
  section التشغيل Operations
    شراء خارجي / External procurement: 4: Operations/التشغيل
    شحن إلى السعودية / Ship to KSA: 3: Operations/التشغيل
    تحويل إلى اليمن / Forward to Yemen: 3: Operations/التشغيل
  section المالية Finance
    تسجيل دفعة / Record payment: 4: Finance/المالية
    مطابقة رصيد / Reconcile balance: 3: Finance/المالية
```

- 🇸🇦 **قصص المستخدم كأداة تواصل:** ترجمة احتياجات الأطراف إلى صيغة قابلة للتنفيذ.  
  🇬🇧 **User stories as a communication tool:** Translate stakeholder needs into actionable language.  
  🇸🇦 **ما هي:** صياغة تعتمد على "بصفتي... أريد... حتى".  
  🇬🇧 **What:** A format built on "As a... I want... so that".  
  🇸🇦 **وظيفتها:** توحد اللغة بين المنتج، التصميم، التطوير، والاختبار.  
  🇬🇧 **Function:** Aligns terminology across product, design, engineering, and QA.  
  🇸🇦 **فائدتها:** تقلل الغموض وتسرع الموافقات على المتطلبات.  
  🇬🇧 **Benefit:** Reduces ambiguity and accelerates requirement sign-off.

- 🇸🇦 **ارتباط القصص بالرؤية والقيمة:** ربط كل قصة بهدف عمل أو مؤشر جودة.  
  🇬🇧 **Story-to-vision linkage:** Tie each story to a business goal or quality indicator.  
  🇸🇦 **ما هي:** منهجية تعقب تعرض السبب والنتيجة لكل تطوير.  
  🇬🇧 **What:** A traceability method showing cause and effect for every enhancement.  
  🇸🇦 **وظيفتها:** تمكّن من قياس العائد وتحديد الأولويات بوضوح.  
  🇬🇧 **Function:** Enables ROI measurement and clear prioritization.  
  🇸🇦 **فائدتها:** تمنع تراكم قصص بلا قيمة وتدعم الشفافية أمام القيادة.  
  🇬🇧 **Benefit:** Prevents low-value backlog clutter and supports transparent leadership reporting.

- 🇸🇦 **الالتزام بمعايير INVEST:** ضمان استقلالية القصة وقابليتها للتفاوض والتقدير.  
  🇬🇧 **Adhering to INVEST criteria:** Ensure each story is independent, negotiable, and estimable.  
  🇸🇦 **ما هي:** قائمة تحقق تشمل الاستقلال، القيمة، إمكانية الاختبار.  
  🇬🇧 **What:** A checklist covering independence, value, and testability.  
  🇸🇦 **وظيفتها:** تحافظ على جودة الدخول إلى السبرنت وتمنع التضخم.  
  🇬🇧 **Function:** Maintains sprint entry quality and avoids scope bloat.  
  🇸🇦 **فائدتها:** تجعل التخطيط أكثر دقة وتقلل إعادة العمل.  
  🇬🇧 **Benefit:** Increases planning accuracy and reduces rework.

---

## 2. خريطة القصص / Story Map

```mermaid
mindmap
  root((خريطة القصص\nStory Map))
    اكتساب العملاء Onboarding
      "تسجيل عميل\nCustomer Registration"
      "التحقق من الهوية\nIdentity Check"
    الطلب والشراء Order & Procurement
      "إنشاء طلب\nCreate Order"
      "إرفاق روابط\nAttach Links"
      "جدولة الدفع\nSchedule Payment"
    الشحن والتسليم Shipping & Delivery
      "تتبع المراحل\nTrack Phases"
      "إدارة الشحنات\nManage Shipments"
      "إثبات التسليم\nProof of Delivery"
    المالية Finance
      "تسجيل الدفعات\nRecord Payments"
      "تسوية الأرصدة\nReconcile Balances"
      "إصدار التقارير\nGenerate Reports"
    الدعم Support
      "إدارة التذاكر\nTicket Handling"
      "تنبيهات فورية\nInstant Alerts"
      "قاعدة المعرفة\nKnowledge Base"
```

| 🇸🇦 الشخصية        | 🇬🇧 Persona             | 🇸🇦 قصة المستخدم                                                                             | 🇬🇧 User Story                                                                                                                     | 🇸🇦 معايير القبول المختصرة                                                 | 🇬🇧 Key Acceptance Criteria                                                                           |
| ----------------- | ---------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| العميل            | Customers              | بصفتي عميلا أرغب في تقديم طلب جديد مع روابط المنتجات حتى أستطيع متابعة الشحنة بسهولة.       | As a customer I want to submit a new order with product links so that I can track the shipment easily.                            | يدعم النموذج عدة روابط، إشعار تأكيد لحظي، حالة ابتدائية "بانتظار الشراء". | Form supports multiple links, instant confirmation notification, initial status "Awaiting purchase". |
| موظف خدمة العملاء | Customer Service Agent | بصفتي موظف خدمة أريد البحث عن عميل وإضافة طلبه بضغطة واحدة حتى أضمن إدخال البيانات بسرعة.   | As a service agent I want to search for a customer and add their order in one click so that I capture data quickly.               | بحث بالأسماء والأرقام، التحقق من الحقول الإلزامية، تسجيل اسم المدخل.      | Search by name and number, validate required fields, log agent identity.                             |
| مشغل العمليات     | Operations Specialist  | بصفتي مشغلا أحتاج إلى تقسيم الطلب إلى شحنات فرعية مع حالة لكل شحنة حتى أضمن التتبع المرحلي. | As an operations specialist I need to split an order into sub-shipments with status per shipment so that I ensure stage tracking. | إنشاء أرقام فرعية، تاريخ لكل انتقال، منع إغلاق الطلب قبل اكتمال الشحنات.  | Create sub identifiers, timestamp every transition, block closure before shipments complete.         |
| محلل مالي         | Finance Analyst        | بصفتي محلل مالية أريد مطابقة الدفعات مع الطلبات المرتبطة حتى أخرج تقرير الربحية الأسبوعي.   | As a finance analyst I want to reconcile payments with linked orders so that I produce the weekly profitability report.           | استيراد كشف البنك، تنبيه عند اختلاف العملة، تقرير تفصيلي مع إجمالي الربح. | Import bank statement, alert on currency mismatch, detailed report with gross margin.                |

---

## 3. أولوية القصص / Story Prioritization

- 🇸🇦 **نظام تسجيل قيمة-جهد:** تقييم كل قصة بدرجات قيمة وتأثير وتعقيد.  
  🇬🇧 **Value-effort scoring system:** Rate each story on value, impact, and complexity.  
  🇸🇦 **ما هي:** مصفوفة من ثلاث نقاط (1-5) يستخدمها الفريق عند التخطيط.  
  🇬🇧 **What:** A three-axis matrix (1-5) applied during planning.  
  🇸🇦 **وظيفتها:** تمكّن من ترتيب القصص داخل السبرنت والربع سنويا.  
  🇬🇧 **Function:** Enables ordering stories within sprints and quarterly cycles.  
  🇸🇦 **فائدتها:** تضمن بدء العمل بالأعلى أثرا دون إهمال المكاسب السريعة.  
  🇬🇧 **Benefit:** Ensures high-impact items start first without ignoring quick wins.

- 🇸🇦 **خريطة الاعتماديات:** تحديد العلاقات بين القصص التقنية والوظيفية.  
  🇬🇧 **Dependency mapping:** Identify relationships between technical and functional stories.  
  🇸🇦 **ما هي:** لوحة تربط القصص باستخدام أسهم قبل/بعد.  
  🇬🇧 **What:** A board that links stories with before/after arrows.  
  🇸🇦 **وظيفتها:** تمنع إدخال قصة غير قابلة للتنفيذ بسبب عائق تقني.  
  🇬🇧 **Function:** Prevents pulling a story that is blocked by a technical prerequisite.  
  🇸🇦 **فائدتها:** تقلل التوقف المفاجئ وتحسن دقة تقديرات السبرنت.  
  🇬🇧 **Benefit:** Reduces sudden blockers and improves sprint estimate accuracy.

- 🇸🇦 **مؤشر المخاطر:** تسجيل مستوى المخاطرة (منخفض، متوسط، مرتفع) لكل قصة ذات تعقيد تنظيمي.  
  🇬🇧 **Risk indicator:** Assign low/medium/high risk to stories with regulatory or operational complexity.  
  🇸🇦 **ما هي:** تسميات ألوان تظهر في لوحة كانبان.  
  🇬🇧 **What:** Color labels displayed on the Kanban board.  
  🇸🇦 **وظيفتها:** توجه الاهتمام القيادي وتحدد الحاجة لمراجعات قانونية.  
  🇬🇧 **Function:** Directs leadership attention and flags legal review needs.  
  🇸🇦 **فائدتها:** تمنع التأخير المتأخر وتدعم الامتثال المبكر.  
  🇬🇧 **Benefit:** Prevents late delays and supports early compliance.

---

## 4. إدارة دورة الحياة / Story Lifecycle

```mermaid
flowchart LR
    Idea["فكرة\nIdea"] --> Draft["مسودة\nDraft"]
    Draft --> Ready["جاهز للتطوير\nReady"]
    Ready --> InProgress["قيد التنفيذ\nIn Progress"]
    InProgress --> Review["مراجعة الجودة\nQA Review"]
    Review --> Done["منجز\nDone"]
    Done --> Measure["قياس الأثر\nMeasure"]
    Measure --> Improve["تحسين لاحق\nImprove"]
    Improve --> Backlog["باك لوج التعلم\nLearning Backlog"]
    Backlog --> Draft
```

- 🇸🇦 **حاكمية بوابات المراحل:** عدم الانتقال بين المراحل دون توفر معايير محددة.  
  🇬🇧 **Stage gate governance:** Block transitions unless predefined criteria are met.  
  🇸🇦 **ما هي:** شروط جاهزية تشمل التصميم، الكود، الاختبار، التوثيق.  
  🇬🇧 **What:** Ready conditions covering design, code, testing, and documentation.  
  🇸🇦 **وظيفتها:** تمنع التسرع وتضمن جودة موحدة عبر الفرق.  
  🇬🇧 **Function:** Prevents rushing and keeps consistent quality among teams.  
  🇸🇦 **فائدتها:** تخفض الرجوع للخلف وترفع الثقة بتاريخ الإطلاق.  
  🇬🇧 **Benefit:** Lowers rollback incidents and increases confidence in release dates.

---

## 5. مقاييس الجودة / Quality Metrics

- 🇸🇦 **نسبة القصص ذات معايير القبول الصريحة:** الهدف 100%.  
  🇬🇧 **Stories with explicit acceptance criteria:** Target 100%.  
  🇸🇦 **ما هي:** مراجعة أسبوعية لحصر القصص المفقودة للمعايير.  
  🇬🇧 **What:** Weekly review counting stories missing criteria.  
  🇸🇦 **وظيفتها:** تكشف الثغرات في التحضير وتحدد القصص المهددة.  
  🇬🇧 **Function:** Exposes preparation gaps and flags at-risk stories.  
  🇸🇦 **فائدتها:** تقلل الأخطاء المتكررة بين السبرنتات.  
  🇬🇧 **Benefit:** Reduces recurring sprint defects.

- 🇸🇦 **زمن دورة القصة:** المدة من جاهز للتطوير إلى منجز.  
  🇬🇧 **Story cycle time:** Duration from Ready to Done.  
  🇸🇦 **ما هي:** قياس تلقائي عبر لوحة كانبان.  
  🇬🇧 **What:** Automated measurement via Kanban board.  
  🇸🇦 **وظيفتها:** يقيّم كفاءة التنفيذ ويكشف الزحام.  
  🇬🇧 **Function:** Evaluates execution efficiency and spots congestion.  
  🇸🇦 **فائدتها:** يساعد على تحسين حجم السبرنت وضبط الطاقة الاستيعابية.  
  🇬🇧 **Benefit:** Helps tune sprint size and capacity.

- 🇸🇦 **معدل إرجاع القصة:** النسبة التي تعاد من الاختبار إلى التطوير.  
  🇬🇧 **Story return rate:** Percentage sent back from QA to development.  
  🇸🇦 **ما هي:** مؤشر جودة أسبوعي.  
  🇬🇧 **What:** A weekly quality metric.  
  🇸🇦 **وظيفتها:** يرصد جودة القبول والتوثيق.  
  🇬🇧 **Function:** Monitors acceptance quality and documentation.  
  🇸🇦 **فائدتها:** يدفع لتحسين معايير القبول والاختبارات الآلية.  
  🇬🇧 **Benefit:** Drives better acceptance criteria and automated tests.

---

## 6. قالب القصة / Story Template

```markdown
🇸🇦 بصفتي [الشخصية] أريد [الهدف] حتى [القيمة].
🇬🇧 As a [persona] I want [goal] so that [value].

🇸🇦 **معايير القبول / Acceptance Criteria**

1. 🇸🇦 [شرط عربي]  
   🇬🇧 [English condition]
2. 🇸🇦 [شرط عربي]  
   🇬🇧 [English condition]
3. 🇸🇦 [شرط عربي]  
   🇬🇧 [English condition]

🇸🇦 **ملاحظات إضافية / Notes**

- 🇸🇦 [مرجع أو رابط]  
  🇬🇧 [Reference or link]
```

- 🇸🇦 **توحيد القالب:** استخدام نموذج واحد لكل قصة في أداة إدارة العمل.  
  🇬🇧 **Template standardization:** Apply one template to every story in the work management tool.  
  🇸🇦 **ما هي:** قاعدة تنسيق تشمل الوصف، المعايير، الروابط.  
  🇬🇧 **What:** A formatting rule covering description, criteria, and links.  
  🇸🇦 **وظيفتها:** تسهل المراجعة وتعزز قابلية البحث.  
  🇬🇧 **Function:** Simplifies review and improves searchability.  
  🇸🇦 **فائدتها:** تقلل الوقت اللازم لفهم القصة لأي عضو جديد.  
  🇬🇧 **Benefit:** Cuts the time a newcomer needs to grasp a story.
