# 🛡️ المتطلبات غير الوظيفية والجودة | Non-Functional Requirements & Quality

> 🗂️ **ملخص سريع | Quick Summary**
> هذا الملف يوضح كيف تدعم المتطلبات غير الوظيفية جودة النظام واستقراره وسهولة استخدامه لجميع الأطراف، مع دعم كل نقطة بأيقونات ورسومات وشرح مختصر.

---

> **📂 المشروع | Project:** CA Admin • **👤 المالك | Owner:** Abdullah Alshaif • **🆚 الإصدار | Version:** v0.1 • **🗓️ آخر تحديث | Last Updated:** 2025-09-08

---

**🇸🇦 نظرة عامة:** توضح هذه الوثيقة كيف تدعم المتطلبات غير الوظيفية جودة النظام واستقراره وسهولة استخدامه لجميع الأطراف (المستخدم، المطور، الإدارة).
**🇬🇧 Overview:** This document links NFRs to the quality attributes that keep the platform fast, stable, secure, and maintainable for every stakeholder.
**🔎 كيف تقرأ هذا الملف | How to Use this File:** 🇸🇦 ابدأ ببطاقة القياس السريعة ثم انتقل إلى القسم الخاص بكل سمة لمراجعة التفاصيل وخطط القياس.  
🇬🇧 Start with the quick scorecard, then dive into each attribute section for detailed guidance and measurement playbooks.

---

---

## 🧾 بطاقة قياس سريعة | Quick NFR Scorecard

> 🧾 **شرح مختصر:** جدول يلخص الأهداف الرئيسية لكل سمة جودة، مع أدوات القياس والفائدة العملية.

| Attribute                    | Key Targets                                                                                                                                                                                                                                                                                      | Measurement & Tools                                                                                                                                                                              | Value                                                                                                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚡ الأداء Performance        | 🇸🇦 500 مستخدم متزامن، زمن استجابة < 2 ثانية للرحلات الحرجة، استعلامات Firestore ≤ 500 مللي ثانية.<br>🇬🇧 500 concurrent users, < 2s critical workflows, Firestore queries ≤ 500 ms.                                                                                                               | 🇸🇦 اختبارات تحميل k6، Firebase Performance Monitoring، لوحات زمن الاستجابة في Cloud Monitoring.<br>🇬🇧 k6 load tests, Firebase Performance Monitoring, Cloud Monitoring response-time dashboards. | 🇸🇦 يحافظ على رحلة مستخدم سريعة حتى في ذروة الاستخدام ويقلل الشكاوى التشغيلية.<br>🇬🇧 Keeps critical journeys fast at peak demand and reduces operational escalations. |
| 🟢 الاعتمادية Reliability    | 🇸🇦 توافر تشغيلي 99.5% مع مزامنة تلقائية ومعالجة تضارب لمنع فقد البيانات.<br>🇬🇧 99.5% operational uptime with auto-sync and conflict handling to prevent data loss.                                                                                                                               | 🇸🇦 تنبيهات Cloud Monitoring، اختبارات انقطاع فصلية، مراجعة سجلات الأخطاء.<br>🇬🇧 Cloud Monitoring alerts, quarterly outage drills, error log reviews.                                             | 🇸🇦 يضمن استمرارية الخدمة لفريق الدعم والعملاء دون توقفات حرجة.<br>🇬🇧 Ensures uninterrupted service for support teams and customers.                                  |
| 🖐️ سهولة الاستخدام Usability | 🇸🇦 واجهة ثنائية اللغة، تجربة مهيأة للهواتف المتوسطة، الرحلات الحرجة ≤ 3 خطوات، تدريب أقل من ساعة.<br>🇬🇧 Bilingual UI, mid-range mobile-first experience, critical journeys ≤ 3 steps, onboarding < 1 hour.                                                                                       | 🇸🇦 جلسات اختبار قابلية الاستخدام، تحليلات مسار المستخدم، مراقبة معدلات إكمال المهام.<br>🇬🇧 Usability testing sessions, funnel analytics, task completion tracking.                               | 🇸🇦 يقلل منحنى التعلم ويزيد رضا المستخدمين الميدانيين.<br>🇬🇧 Reduces the learning curve and boosts frontline satisfaction.                                            |
| 🔐 الأمن Security            | 🇸🇦 RBAC باستخدام Firebase Custom Claims، تشفير TLS 1.2+ أثناء النقل وفي السكون، سجلات تدقيق مالية وصلاحيات.<br>🇬🇧 RBAC via Firebase Custom Claims, TLS 1.2+ encryption in transit and at rest, audit logs for finance and access changes.                                                        | 🇸🇦 مراجعات صلاحيات نصف سنوية، فحص إعدادات الأمان، تصدير السجلات إلى BigQuery.<br>🇬🇧 Semi-annual access reviews, security posture checks, log exports to BigQuery.                                | 🇸🇦 يحمي بيانات العملاء ويلبي المتطلبات التنظيمية الداخلية والخارجية.<br>🇬🇧 Protects customer data and satisfies internal and external compliance.                    |
| 🧰 الصيانة Maintainability   | 🇸🇦 هندسة نظيفة بطبقات واضحة، ≥ 70% تغطية اختبارات وحدات وتكامل، توثيق `/docs` محدث.<br>🇬🇧 Clean layered architecture, ≥ 70% unit + integration coverage, up-to-date `/docs` documentation.                                                                                                       | 🇸🇦 تقارير التغطية في CI، مراجعات معمارية فصلية، متطلبات دمج الوثائق مع Pull Requests.<br>🇬🇧 CI coverage reports, quarterly architecture reviews, doc-included pull requests.                     | 🇸🇦 يسهل إضافة الميزات وتقليل وقت إصلاح الأعطال.<br>🇬🇧 Simplifies feature delivery and shortens defect resolution time.                                               |
| 📈 التوسع Scalability        | 🇸🇦 دعم 5000+ عميل نشط، الاستفادة من التدرج التلقائي لـ Firestore و Cloud Functions، الحفاظ على تكافؤ Android/iOS مع خارطة طريق للويب وسطح المكتب.<br>🇬🇧 Serve 5000+ active customers, leverage Firestore & Cloud Functions auto-scaling, maintain Android/iOS parity with a Web/Desktop roadmap. | 🇸🇦 لوحات استخدام الموارد في Firebase، اختبارات تحميل موسمية، مراجعات سعة استراتيجية.<br>🇬🇧 Firebase resource dashboards, seasonal load tests, strategic capacity reviews.                        | 🇸🇦 يمنع الاختناقات المفاجئة ويدعم التوسع الجغرافي وقنوات جديدة.<br>🇬🇧 Prevents sudden bottlenecks and supports geographic and channel expansion.                     |

---

---

## 🚀 مقدمة | Introduction

### 🎯 الهدف | Purpose

- 🇸🇦 تحدد المتطلبات غير الوظيفية السمات النوعية الأساسية لتجربة CA Admin مثل الأداء، الاعتمادية، الأمن، وقابلية الصيانة.<br>🇬🇧 NFRs capture the qualitative expectations for CA Admin across performance, reliability, security, and maintainability.
- 🇸🇦 تربط الوثيقة كل سمة بجداول القياس وخطط المتابعة كي يتمكن المطور والمحلل ومدير المنتج من الرجوع إليها بسرعة.<br>🇬🇧 The document ties each attribute to measurement plans so engineers, analysts, and product owners can reference it quickly.

### ⚖️ لماذا يهم | Why It Matters

- 🇸🇦 تضمن NFRs أن الميزات الوظيفية تعمل بثبات تحت الحمل وتقدم تجربة سلسة للمستخدمين.<br>🇬🇧 NFRs ensure functional features stay consistent under load and keep the user experience smooth.
- 🇸🇦 توفر لغة مشتركة بين التقنية والإدارة لاتخاذ قرارات مبنية على بيانات قابلة للقياس.<br>🇬🇧 They create a shared language between engineering and leadership for data-driven decisions.

### 🤝 أصحاب المصلحة الرئيسيون | Key Stakeholders

- 🧑‍💼 🇸🇦 الإدارة التنفيذية تحتاج مقاييس موثوقة لتتبع الالتزام بالعقود ومستوى الخدمة.<br>🇬🇧 Executives rely on trustworthy metrics to track SLAs and contractual obligations.
- 🧑‍💻 🇸🇦 فرق التطوير والاختبار تستخدم NFRs لتحديد أولويات السبر والاختبارات الآلية.<br>🇬🇧 Development and QA teams use NFRs to prioritise instrumentation and automated tests.
- ☎️ 🇸🇦 فرق الدعم وخدمة العملاء تعتمد على الاستقرار والأداء للحفاظ على رضا العملاء.<br>🇬🇧 Support teams depend on performance and uptime to keep customers happy.

### 🛠️ الاستخدام اليومي | Daily Application

- 🇸🇦 اربط قصص المستخدم في الباك لوج بمؤشرات هذه الوثيقة قبل بدء أي Sprint.<br>🇬🇧 Map backlog stories to the indicators listed here before each sprint kickoff.
- 🇸🇦 راجع نتائج القياس في اجتماعات الختام Sprint Review للتأكد من الالتزام المستمر.<br>🇬🇧 Review measurement outcomes during sprint reviews to confirm continued compliance.

---

## 🧱 خريطة السمات | Quality Attribute Map

> 🧱 **شرح مختصر:** يوضح المخطط ارتباط السمات النوعية بالعمود الفقري للمتطلبات غير الوظيفية.
> **🇸🇦 ملخص:** يوضح المخطط ارتباط السمات النوعية بالعمود الفقري للمتطلبات غير الوظيفية.<br>**🇬🇧 Summary:** The diagram shows how quality attributes connect back to the NFR backbone.

```mermaid
flowchart LR
    %% استخدم \n للفصل بين العربية والإنجليزية
    NFRs["🛡️ عمود NFR الفقري\nNFR Backbone"]

    NFRs --> Perf["⚡ الأداء\nPerformance"]
    NFRs --> Rel["🟢 الاعتمادية\nReliability"]
    NFRs --> Use["🖐️ سهولة الاستخدام\nUsability"]
    NFRs --> Sec["🔐 الأمن\nSecurity"]
    NFRs --> Main["🧰 الصيانة\nMaintainability"]
    NFRs --> Scal["📈 التوسع\nScalability"]
    NFRs --> Comp["🔗 التوافقية\nCompatibility"]
    NFRs --> Port["🧳 قابلية النقل\nPortability"]
```

> 🧱 **شرح الرسم:** يوضح كيف ترتبط كل سمة جودة بالمتطلبات غير الوظيفية الأساسية.

---

---

## 🤝 توافق السمات مع أصحاب المصلحة | Stakeholder Alignment

> 🤝 **شرح مختصر:** يوضح المخطط من يستفيد مباشرة من كل سمة جودة.
> **🇸🇦 ملخص:** يوضح المخطط من يستفيد مباشرة من كل سمة جودة.<br>**🇬🇧 Summary:** The diagram highlights which stakeholders benefit from each attribute.

```mermaid
flowchart LR
    Users[🙋‍♀️ المستخدمون النهائيون\nEnd Users]
    Support[📞 الدعم والخدمة\nSupport Team]
    Devs[👩‍💻 فريق التطوير\nDev & QA]
    Execs[🏛️ الإدارة\nLeadership]

    Perf((⚡ الأداء))
    Rel((🟢 الاعتمادية))
    Use((🖐️ سهولة الاستخدام))
    Sec((🔐 الأمن))
    Main((🧰 الصيانة))
    Scal((📈 التوسع))

    Users --> Use
    Users --> Perf
    Support --> Rel
    Support --> Perf
    Devs --> Main
    Devs --> Sec
    Devs --> Perf
    Execs --> Rel
    Execs --> Scal
    Execs --> Sec
    Execs --> Use
    Support --> Sec
    Devs --> Scal
```

> 🤝 **شرح الرسم:** يوضح كيف تستفيد كل جهة من السمات النوعية.

---

---

## 🧠 خريطة ذهنية للـ NFR | NFR Mindmap

> 🧠 **شرح مختصر:** تلخص الخريطة الحدود الرقمية المستهدفة لكل سمة جودة.
> **🇸🇦 ملخص:** تلخص الخريطة الحدود الرقمية المستهدفة لكل سمة جودة.<br>**🇬🇧 Summary:** Mindmap of the measurable targets for each quality attribute.

```mermaid
mindmap
  root((🎯 NFR Targets))
    "⚡ الأداء"
      "500 مستخدم متزامن"
      "< 2 ثوانٍ للرحلات الحرجة"
      "Firestore ≤500 مللي ثانية"
    "🟢 الاعتمادية"
      "99.5% توافر"
      "مزامنة تلقائية"
      "اختبارات انقطاع فصلية"
    "🖐️ سهولة الاستخدام"
      "واجهة ثنائية اللغة"
      "≤3 خطوات للمهام"
      "تدريب <1 ساعة"
    "🔐 الأمن"
      "RBAC Claims"
      "TLS 1.2+ & at rest"
      "سجلات تدقيق مالية"
    "🧰 الصيانة"
      "Clean Architecture"
      "≥70% تغطية"
      "وثائق /docs"
    "📈 التوسع"
      "5000+ عميل نشط"
      "Auto-scaling Firebase"
      "خارطة طريق Web/Desktop"
```

> 🧠 **شرح الرسم:** يوضح الأهداف الرقمية لكل سمة جودة.

---

---

## 🔁 دورة التحسين المستمر | Continuous Quality Cycle

> 🔁 **شرح مختصر:** يحول هذا المسار NFRs إلى حلقة قياس وتحسين مستمرة.
> **🇸🇦 ملخص:** يحول هذا المسار NFRs إلى حلقة قياس وتحسين مستمرة.<br>**🇬🇧 Summary:** The flow turns NFRs into a continuous measurement and improvement loop.

```mermaid
flowchart LR
    Start([🚀 البداية]) --> Discover[🔎 جمع المتطلبات]
    Discover --> Define[📝 تحديد NFRs]
    Define --> Implement[🛠️ التنفيذ]
    Implement --> Measure[📊 المراقبة والاختبار]
    Measure --> Report[📣 مشاركة النتائج]
    Report --> Review[🔍 مراجعة ربع سنوية]
    Review --> Update[♻️ تحديث NFRs]
    Update --> Implement
```

> 🔁 **شرح الرسم:** يوضح كيف تتحول المتطلبات غير الوظيفية إلى دورة تحسين مستمر.

---

---

## ⚡ الأداء | Performance

> 🇸🇦 يضمن الأداء العالي أن الرحلات الحرجة تبقى سريعة مع نمو عدد المستخدمين.<br>🇬🇧 High performance keeps critical journeys responsive as the user base grows.

| العنصر                          | الوصف Description                                                                                               | القياس Measurement                                                                                                           | الفائدة Value                                                                                              |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| سعة الحمل Load Envelope         | 🇸🇦 يدعم النظام ≥ 500 مستخدم متزامن دون تدهور.<br>🇬🇧 Supports ≥ 500 concurrent users without degradation.        | 🇸🇦 اختبارات حمل k6 ربع سنوية + مراقبة Firebase Performance.<br>🇬🇧 Quarterly k6 load tests + Firebase Performance monitoring. | 🇸🇦 يحافظ على كفاءة فرق التشغيل خلال الذروة.<br>🇬🇧 Keeps operations efficient during peak hours.            |
| زمن الاستجابة Response Time     | 🇸🇦 زمن الاستجابة للرحلات الحرجة أقل من 2 ثانية.<br>🇬🇧 Critical workflows respond in under 2 seconds.            | 🇸🇦 لوحات زمن الاستجابة في Cloud Monitoring + تتبع RUM.<br>🇬🇧 Cloud Monitoring dashboards + real-user monitoring.             | 🇸🇦 يحسن رضا المستخدم ويقلل تذاكر الأعطال.<br>🇬🇧 Improves satisfaction and reduces incident tickets.        |
| استعلامات Firestore Query Speed | 🇸🇦 الاستعلامات المفهرسة تعطي النتائج في ≤ 500 مللي ثانية.<br>🇬🇧 Indexed Firestore queries complete in ≤ 500 ms. | 🇸🇦 Firebase profiler + مراجعة الفهارس لكل إصدار.<br>🇬🇧 Firebase profiler and index reviews per release.                      | 🇸🇦 يقلل التكاليف ويزيد سرعة الشاشة الرئيسية والتقارير.<br>🇬🇧 Lowers costs and keeps dashboards/snaps fast. |

---

## 🟢 الاعتمادية والتوافر | Reliability & Availability

> 🇸🇦 الاعتمادية تمنح الفريق ثقة في استقرار العمليات اليومية.<br>🇬🇧 Reliability gives teams confidence in day-to-day stability.

| العنصر                                     | الوصف Description                                                                                                                                  | القياس Measurement                                                                                          | الفائدة Value                                                                                             |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| التوافر التشغيلي Operational Uptime        | 🇸🇦 الحفاظ على توافر 99.5% للخدمات الأساسية.<br>🇬🇧 Maintain 99.5% uptime for core services.                                                         | 🇸🇦 إنذارات SLA في Cloud Monitoring + تقارير شهرية.<br>🇬🇧 SLA alerts in Cloud Monitoring + monthly reports.  | 🇸🇦 يقلل الأعطال المكلفة ويعزز ثقة الشركاء.<br>🇬🇧 Reduces costly outages and builds partner trust.         |
| المزامنة والتضارب Sync & Conflict Handling | 🇸🇦 مزامنة تلقائية ومعالجة تضارب لمنع فقد البيانات أثناء الانقطاعات.<br>🇬🇧 Auto-sync and conflict resolution to avoid data loss during outages.     | 🇸🇦 اختبارات استعادة فصلية + سيناريوهات فشل في QA.<br>🇬🇧 Quarterly recovery tests + failure scenarios in QA. | 🇸🇦 يحافظ على دقة السجلات دون تدخل يدوي.<br>🇬🇧 Keeps records accurate without manual re-entry.             |
| الشفافية Incident Transparency             | 🇸🇦 سجلات أحداث واضحة وتواصل ضمن 30 دقيقة من أي حادث مؤثر.<br>🇬🇧 Transparent incident logs and communication within 30 minutes of impactful events. | 🇸🇦 قوالب تقرير الحوادث + مراجعات ما بعد الانقطاع.<br>🇬🇧 Incident report templates + post-incident reviews.  | 🇸🇦 يعزز ثقافة التعلم ويحد من تكرار الأعطال.<br>🇬🇧 Builds a learning culture and reduces repeat incidents. |

---

## 🖐️ سهولة الاستخدام | Usability

> 🇸🇦 تجربة الاستخدام السلسة تقلل التدريب وتسرّع إنجاز المهام الميدانية.<br>🇬🇧 Smooth usability cuts training time and accelerates field task completion.

| العنصر                           | الوصف Description                                                                                                            | القياس Measurement                                                                                                     | الفائدة Value                                                                                  |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| واجهة ثنائية اللغة Bilingual UI  | 🇸🇦 دعم كامل للعربية والإنجليزية مع تبديل تلقائي RTL/LTR.<br>🇬🇧 Full Arabic/English support with automatic RTL/LTR switching. | 🇸🇦 مراجعة تصميم ثنائية اللغة + اختبارات جودة قبل الإطلاق.<br>🇬🇧 Bilingual design reviews + pre-release QA checks.      | 🇸🇦 يضمن شمولية التجربة لكل المستخدمين.<br>🇬🇧 Ensures inclusivity across user groups.           |
| تصميم موجه للجوال Mobile-First   | 🇸🇦 تجربة محسّنة للأجهزة المتوسطة على Android و iOS.<br>🇬🇧 Optimised for mid-range Android/iOS devices.                       | 🇸🇦 اختبارات أداء الأجهزة الفعلية + تتبع معدلات الأعطال لكل جهاز.<br>🇬🇧 Physical device tests + crash rates per device. | 🇸🇦 يقلل الأعطال الميدانية ويزيد الإنتاجية.<br>🇬🇧 Reduces field issues and boosts productivity. |
| الرحلات الحرجة Critical Journeys | 🇸🇦 إكمال الطلب/التتبع/الدفع في ≤ 3 خطوات.<br>🇬🇧 Complete order/track/pay journeys in ≤ 3 steps.                              | 🇸🇦 تحليلات funnel + جلسات مراقبة المستخدم.<br>🇬🇧 Funnel analytics + moderated user sessions.                           | 🇸🇦 يقلل التخلي عن المهام ويرفع التحويل.<br>🇬🇧 Decreases drop-off and improves conversions.     |
| التدريب السريع Fast Onboarding   | 🇸🇦 تدريب أقل من ساعة للمستخدم الجديد.<br>🇬🇧 Onboard new users in under one hour.                                             | 🇸🇦 استبيانات بعد التدريب + تتبع الوقت إلى الإنتاجية.<br>🇬🇧 Post-training surveys + time-to-productivity tracking.      | 🇸🇦 يسرّع اعتماد الأدوات داخل المؤسسات.<br>🇬🇧 Speeds up organisational adoption.                |

---

## 🔐 الأمن | Security

> 🇸🇦 الأمن يحمي البيانات ويمنع الوصول غير المصرح به دون المساس بسهولة الاستخدام.<br>🇬🇧 Security protects data and prevents unauthorised access without sacrificing usability.

| العنصر                        | الوصف Description                                                                                                       | القياس Measurement                                                                                                             | الفائدة Value                                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| التحكم بالوصول Access Control | 🇸🇦 تطبيق RBAC مع Firebase Custom Claims.<br>🇬🇧 Enforce RBAC using Firebase Custom Claims.                               | 🇸🇦 مراجعات صلاحيات نصف سنوية + تنبيهات تغيير صلاحيات.<br>🇬🇧 Semi-annual access reviews + privilege change alerts.              | 🇸🇦 يحد من المخاطر الداخلية ويضمن مبدأ أقل صلاحية.<br>🇬🇧 Limits insider risk and ensures least privilege.            |
| التشفير Encryption            | 🇸🇦 تشفير TLS 1.2+ أثناء النقل وتشفير كامل للبيانات في السكون.<br>🇬🇧 TLS 1.2+ in transit and full encryption at rest.    | 🇸🇦 فحوصات أمنية دورية + تدقيق إعدادات خدمة Google Cloud.<br>🇬🇧 Periodic security scans + Google Cloud security posture checks. | 🇸🇦 يحمي سرية بيانات العملاء ويناسب التدقيقات الخارجية.<br>🇬🇧 Protects customer confidentiality and audit readiness. |
| سجلات التدقيق Audit Logging   | 🇸🇦 حفظ سجلات لكل العمليات المالية وتغييرات الصلاحيات.<br>🇬🇧 Maintain audit logs for financial actions and role updates. | 🇸🇦 تصدير أسبوعي إلى BigQuery + تنبيهات اختلافات.<br>🇬🇧 Weekly exports to BigQuery + anomaly alerts.                            | 🇸🇦 يوفر شفافية لحل النزاعات والامتثال.<br>🇬🇧 Provides transparency for dispute resolution and compliance.           |

---

## 🧰 الصيانة | Maintainability

> 🇸🇦 القابلية للصيانة تسهّل التطوير المستمر وتقلل المخاطر التقنية.<br>🇬🇧 Maintainability enables continuous delivery and reduces technical risk.

| العنصر                         | الوصف Description                                                                                                     | القياس Measurement                                                                                               | الفائدة Value                                                                                           |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| هندسة نظيفة Clean Architecture | 🇸🇦 اتباع طبقات واضحة وفصل المخاوف.<br>🇬🇧 Adhere to layered clean architecture.                                        | 🇸🇦 مراجعات تصميم فصلية + فحوصات lint architecture.<br>🇬🇧 Quarterly design reviews + architecture lint checks.    | 🇸🇦 يسهل فهم الكود وإعادة استخدامه.<br>🇬🇧 Makes code easier to understand and reuse.                     |
| تغطية الاختبارات Test Coverage | 🇸🇦 ≥ 70% تغطية لاختبارات الوحدات والتكامل للمنطق التجاري.<br>🇬🇧 ≥ 70% unit + integration coverage for business logic. | 🇸🇦 تقارير CI التلقائية + بوابات فشل عند انخفاض التغطية.<br>🇬🇧 Automated CI reports + gating when coverage drops. | 🇸🇦 يقلل العيوب المتكررة ويدعم refactoring آمن.<br>🇬🇧 Reduces regressions and supports safe refactoring. |
| توثيق `/docs` Documentation    | 🇸🇦 توثيق لكل API ووحدة في مجلد `/docs`.<br>🇬🇧 Document every API and module inside `/docs`.                           | 🇸🇦 قائمة تحقق PR + مراجعات Docs أسبوعية.<br>🇬🇧 PR checklist + weekly doc reviews.                                | 🇸🇦 يمكّن المطورين الجدد من الانخراط بسرعة.<br>🇬🇧 Enables faster onboarding for new engineers.           |

---

## 📈 القابلية للتوسع | Scalability

> 🇸🇦 التوسع المدروس يبقي الأداء ثابتًا مع نمو قاعدة العملاء والقنوات.<br>🇬🇧 Planned scalability keeps performance steady as customers and channels grow.

| العنصر                         | الوصف Description                                                                                                                | القياس Measurement                                                                                                            | الفائدة Value                                                                                                           |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| قاعدة العملاء Active Customers | 🇸🇦 دعم 5000+ عميل نشط دون إعادة تصميم جذري.<br>🇬🇧 Support 5000+ active customers without major redesign.                         | 🇸🇦 تحليلات نمو المستخدم في BigQuery + مراجعة نصف سنوية للسعة.<br>🇬🇧 BigQuery growth analytics + semi-annual capacity reviews. | 🇸🇦 يضمن جاهزية المنصة للتوسع التجاري.<br>🇬🇧 Ensures platform readiness for business expansion.                          |
| التدرج التلقائي Auto-Scaling   | 🇸🇦 الاستفادة من مزايا Firestore و Cloud Functions في التدرج التلقائي.<br>🇬🇧 Leverage Firestore and Cloud Functions auto-scaling. | 🇸🇦 مراقبة استهلاك الموارد + تنبيهات حدود الكلفة.<br>🇬🇧 Monitor resource utilisation + cost threshold alerts.                  | 🇸🇦 يمنع حد الموارد من إيقاف الطلبات الحرجة.<br>🇬🇧 Prevents resource ceilings from blocking critical traffic.            |
| تكافؤ المنصات Platform Parity  | 🇸🇦 الحفاظ على تكافؤ Android/iOS مع خارطة طريق للويب وسطح المكتب.<br>🇬🇧 Maintain Android/iOS parity with a Web/Desktop roadmap.   | 🇸🇦 مراجعات مطابقة الميزات + لوحات تتبع تقدم المنصات.<br>🇬🇧 Feature parity reviews + platform progress dashboards.             | 🇸🇦 يزيل التجزئة ويهيئ الطريق لقنوات توزيع جديدة.<br>🇬🇧 Eliminates fragmentation and prepares new distribution channels. |

---

## 📊 دفتر القياس | Measurement Playbook

- 📅 🇸🇦 جدول متابعة شهرية يجمع مؤشرات الأداء والاعتمادية والأمن في لوحة موحدة داخل Looker Studio.<br>🇬🇧 A monthly review pulls performance, reliability, and security indicators into a unified Looker Studio board.
- 🧪 🇸🇦 اربط سيناريوهات [خطة الاختبار](../11-test-plan/11-test-plan.md) بالمقاييس أعلاه وحدد حالة كل هدف (محقق/خطر/غير متتبع).<br>🇬🇧 Link [Test Plan](../11-test-plan/11-test-plan.md) scenarios to the metrics above and tag each target (Met/Risk/Not Tracked).
- 📬 🇸🇦 شارك موجزًا تنفيذيًا ربع سنويًا يلخص الالتزام بالـNFR وأهم العوائق.<br>🇬🇧 Distribute a quarterly executive digest summarising NFR compliance and key blockers.

---

## 📐 سمات ISO/IEC 25010 | ISO/IEC 25010 Quality Attributes

| Attribute (EN)         | الصفة (AR)        | Target / الهدف                          | Evidence / الدليل                                                                                                                |
| ---------------------- | ----------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Functional Suitability | الملاءمة الوظيفية | Cover 100% of documented use cases      | 🇸🇦 مطابقات قصص المستخدم في `/docs` + مراجعات قبول المنتج.<br>🇬🇧 User story traceability in `/docs` + product acceptance reviews. |
| Performance Efficiency | كفاءة الأداء      | < 2s response time                      | 🇸🇦 لوحات الأداء في Cloud Monitoring.<br>🇬🇧 Cloud Monitoring performance dashboards.                                              |
| Compatibility          | التوافقية         | Android/iOS, future Web/Desktop         | 🇸🇦 مراجعات تكافؤ المنصات الفصلية.<br>🇬🇧 Quarterly platform parity reviews.                                                       |
| Usability              | سهولة الاستخدام   | Bilingual UI, intuitive design          | 🇸🇦 تقارير اختبار قابلية الاستخدام.<br>🇬🇧 Usability testing reports.                                                              |
| Reliability            | الاعتمادية        | 99.5% uptime                            | 🇸🇦 تقارير SLA الشهرية.<br>🇬🇧 Monthly SLA reports.                                                                                |
| Security               | الأمن             | RBAC + encryption                       | 🇸🇦 محاضر مراجعة الوصول وتدقيق التشفير.<br>🇬🇧 Access review minutes and encryption audits.                                        |
| Maintainability        | قابلية الصيانة    | Clean Architecture + ≥70% test coverage | 🇸🇦 تقارير التغطية CI + مذكرات مراجعة معمارية.<br>🇬🇧 CI coverage reports + architecture review notes.                             |
| Portability            | قابلية النقل      | Flutter cross-platform                  | 🇸🇦 نتائج بناء الأنظمة المتعددة.<br>🇬🇧 Multi-platform build results.                                                              |

---

## 💡 أفضل الممارسات و FAQ | Best Practices & FAQ

### 🧭 أفضل الممارسات | Best Practices

- 📝 **التوثيق المبكر | Early Documentation:** 🇸🇦 وثّق NFRs في بداية المشروع وراجعها مع جميع أصحاب المصلحة.<br>🇬🇧 Document NFRs early and review them with every stakeholder.
- 🧪 **التحقق المستمر | Continuous Validation:** 🇸🇦 اختبر الالتزام بالـNFR أثناء تنفيذ [خطة الاختبار](../11-test-plan/11-test-plan.md).<br>🇬🇧 Validate NFRs during the [Test Plan](../11-test-plan/11-test-plan.md) execution.
- 📊 **مراقبة المؤشرات | Monitor Metrics:** 🇸🇦 راقب السرعة والتوفر والأخطاء بشكل دوري عبر لوحات المراقبة.<br>🇬🇧 Continuously monitor performance, uptime, and error metrics on dashboards.
- 🏛️ **تحديث معماري | Architecture Alignment:** 🇸🇦 حدّث NFRs عند تغيير [المعمارية](../06-architecture/06-architecture.md).<br>🇬🇧 Refresh NFRs whenever the [Architecture](../06-architecture/06-architecture.md) shifts.
- 📆 **مراجعات ربع سنوية | Quarterly Reviews:** 🇸🇦 أجرِ مراجعة ربع سنوية للأهداف مقابل النتائج الفعلية.<br>🇬🇧 Run quarterly reviews of targets versus actuals.

### ❓ الأسئلة الشائعة | FAQ

**❓ س: كيف نحدد NFR جديدة؟ | Q: How do we define a new NFR?**

- 🇸🇦 اربطها بحاجة عمل أو حالة استخدام أو التزام امتثال واضح.<br>🇬🇧 Tie it to a specific business need, use case, or compliance obligation.
- 🇸🇦 حدد مقياسًا قابلًا للقياس (وقت، نسبة، حد) وطريقة جمعه.<br>🇬🇧 Assign a measurable metric (time, ratio, threshold) and the collection method.

**❓ س: متى نراجع أو نحدث NFRs؟ | Q: When should NFRs be revisited?**

- 🇸🇦 بعد إطلاق ميزة رئيسية، اكتشاف خلل جوهري، أو تغيير كبير في البنية التحتية.<br>🇬🇧 After major feature releases, critical incidents, or infrastructure shifts.

---

## 🧪 سيناريو توضيحي | Example Scenario

> 🇬🇧 During UAT, the team simulates **500 users**; all core journeys finish in under **2s**, validating performance and reliability targets.<br>
> 🇸🇦 أثناء الاختبار التشغيلي، يُحاكي الفريق **500 مستخدم** وتُنجز الرحلات الأساسية في أقل من **ثانيتين**، ما يؤكد تحقيق أهداف الأداء والاعتمادية.

**📈 القياسات المسجلة | Metrics Captured:** 🇸🇦 زمن الاستجابة الوسطي 1.6 ثانية، اكتمال 99% من الطلبات دون أخطاء، عدم وجود تضارب بيانات بعد المزامنة.<br>🇬🇧 Median response 1.6s, 99% of orders completed error-free, zero data conflicts after sync.

---

## 🚀 نصائح جودة متقدمة | Advanced Quality Tips

- 📡 🇸🇦 فعّل أدوات مراقبة الأداء (Firebase Performance، Google Cloud Monitoring) للتنبيه المبكر على التدهور.<br>🇬🇧 Enable Performance Monitoring (Firebase, Cloud Monitoring) for early degradation alerts.
- 🛡️ 🇸🇦 استخدم منصة مركزية لتتبع الأخطاء (Crashlytics، Sentry) وربطها بتنبيهات Slack.<br>🇬🇧 Centralise error tracking (Crashlytics, Sentry) and wire alerts into Slack.
- 🎯 🇸🇦 صِل كل NFR بمؤشر أداء رئيسي (KPI) واضح وقابل للمراجعة التلقائية عبر CI.<br>🇬🇧 Map each NFR to a KPI with automated CI gate checks.
- 🔄 🇸🇦 نفّذ مراجعات جودة بعد كل إطلاق رئيسي لتحديد فرص التطوير عبر خطة عمل.<br>🇬🇧 Run post-release quality retros to surface improvement actions.

---
