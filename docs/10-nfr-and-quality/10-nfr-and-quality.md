# 🧱 المتطلبات غير الوظيفية والجودة | Non-Functional Requirements & Quality

| العنصر             | التفاصيل                                                                                                                                                                                                                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| المنتج             | منصة الوساطة الشرائية CA Admin<br>CA Admin Shopping Mediation Platform                                                                                                                                                                         |
| الإصدار            | 0.1 – آخر تحديث 2025-09-08 – المالك: عبدالله الشائف<br>Version 0.1 – Last Updated 2025-09-08 – Owner: Abdullah Alshaif                                                                                                                         |
| الهدف              | ربط المتطلبات غير الوظيفية بسمات الجودة لضمان الأداء، الثبات، والأمن<br>Connect NFRs to quality attributes to guarantee performance, stability, and security                                                                                   |
| المستندات المساندة | `docs/05-data-model/05-data-model.md`، `docs/06-architecture/06-architecture.md`، `docs/11-test-plan/11-test-plan.md`<br>`docs/05-data-model/05-data-model.md`, `docs/06-architecture/06-architecture.md`, `docs/11-test-plan/11-test-plan.md` |

> 🔑 **الخلاصة السريعة:** استخدم هذه الورقة كلوحة تحكم تربط السمات بالقياسات وخطط الاختبار لضمان جودة قابلة للرصد.
> 🔑 **Quick Summary:** Treat this as a cockpit linking attributes, metrics, and test plans for observable quality.

---

## 1. نظرة عامة | Overview

- 🧭 يوضح الوثيقة كيفية قياس الأداء، الاعتمادية، الأمن، سهولة الاستخدام، وغيرها.
  🧭 Explains how performance, reliability, security, usability, and other attributes are measured.
- 🎯 يربط كل سمة بهدف قابل للقياس وأداة متابعة محددة.
  🎯 Maps each attribute to a measurable target and monitoring tool.
- 🧠 يقدم ملاحظات هندسية تساعد على تفعيل القياسات مبكرًا أثناء البناء.
  🧠 Provides engineering notes for activating metrics early in the lifecycle.

---

## 2. بطاقة السمات السريعة | Quick Attribute Scorecard

| السمة Attribute                            | الهدف Target                                                                                                                                                                          | القياس Measurement                                                                                                                                      | القيمة Value                                                                                                                              |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ⚡ الأداء<br>Performance                   | دعم 500 مستخدم متزامن وإنهاء الرحلات الحرجة في ≤2 ثانية واستعلامات Firestore ≤500 مللي ثانية.<br>Handle 500 concurrent users, finish critical journeys ≤2s, Firestore queries ≤500ms. | k6 Load Tests، Firebase Performance Monitoring، لوحات Cloud Monitoring.<br>k6 load tests, Firebase Performance Monitoring, Cloud Monitoring dashboards. | يحافظ على تجربة سريعة حتى أوقات الذروة ويقلل التصعيدات التشغيلية.<br>Maintains fast UX at peak times and reduces operational escalations. |
| 🔁 الاعتمادية<br>Reliability               | زمن تشغيل 99.5% مع مزامنة تلقائية ومنع فقدان البيانات.<br>99.5% uptime with auto-sync and zero data loss.                                                                             | تنبيهات Cloud Monitoring، تدريبات الأعطال الربع سنوية، مراجعة سجلات الأخطاء.<br>Cloud Monitoring alerts, quarterly outage drills, error log reviews.    | يضمن استمرارية الخدمة للفرق والزبائن دون انقطاع.<br>Ensures service continuity for teams and customers.                                   |
| 🎨 سهولة الاستخدام<br>Usability            | معدل إكمال >95%، زمن تعلم <10 دقائق، رضا >4/5 نقاط.<br>Completion rate >95%, onboarding <10 minutes, satisfaction >4/5.                                                               | دراسات UX، استطلاعات ثنائية اللغة، جلسات استخدام زمنية.<br>UX studies, bilingual surveys, timed usability sessions.                                     | يخفض تذاكر الدعم ويرفع التبني متعدد المناطق.<br>Lowers support tickets and boosts multi-region adoption.                                  |
| 🔐 الأمن<br>Security                       | RBAC مفصل، مراجعة أدوار شهرية، نتائج اختراق ≥80%.<br>Fine-grained RBAC, monthly role reviews, penetration score ≥80%.                                                                 | تقارير Firebase Auth، مراجعات الامتثال، اختبارات اختراق.<br>Firebase Auth reports, compliance reviews, penetration tests.                               | يحمي البيانات الحساسة ويلبي اللوائح المحلية.<br>Protects sensitive data while meeting local regulations.                                  |
| 🧩 القابلية للصيانة<br>Maintainability     | تغطية اختبارات ≥70%، الالتزام بـ Clean Architecture، دليل تغيير خلال 24 ساعة.<br>Test coverage ≥70%, Clean Architecture compliance, change guide inside 24h.                          | تقارير CI، مراجعات هندسية، Linters.<br>CI reports, architecture reviews, linters.                                 | يمكّن الفرق من التطوير السريع مع تقليل الأخطاء المتكررة.<br>Enables rapid development with fewer defects.         |
| 🌍 الملاءمة الإقليمية<br>Regional Fit      | دعم كامل للوضع دون اتصال، توافق KSA/Yemen، حزم لغة مزدوجة.<br>Full offline support, KSA/Yemen compliance, bilingual assets.                                                           | اختبارات قنوات متعددة، مراجعات قانونية محلية، مراقبة البلاغات.<br>Multi-channel tests, local legal reviews, incident monitoring.                        | يحافظ على تجربة متوافقة مع القوانين واللغة الإقليمية.<br>Keeps experience aligned with regional law and language.                         |

---

## 3. مصفوفة السمة والقياس | Attribute-to-Metric Map

| السمة                               | الفئة Category             | المؤشر الأساسي Primary KPI                                          | القياس العملي Practical Measure                                                   |
| ----------------------------------- | -------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| الأداء<br>Performance               | تشغيلية<br>Operational     | زمن الاستجابة بعد 500 مستخدم<br>Response time at 500 users          | Firebase Performance Monitoring + k6                                              |
| الاعتمادية<br>Reliability           | تشغيلية<br>Operational     | عدد حوادث الانقطاع<br>Outage count                                  | SLA Reports + Incident Logs                                                       |
| الأمن<br>Security                   | أمنية<br>Security          | RBAC + التشفير<br>RBAC + Encryption                                 | تقارير مراجعة الوصول + تدقيق التشفير<br>Access review reports + encryption audits |
| القابلية للصيانة<br>Maintainability | هندسية<br>Engineering      | Clean Architecture + 70% تغطية<br>Clean Architecture + 70% coverage | تقارير CI + ملاحظات مراجعة البنية<br>CI reports + architecture review notes       |
| الملاءمة الإقليمية<br>Regional Fit  | تجربة مستخدم<br>Experience | توافق العربية/الإنجليزية<br>Arabic/English parity                   | نتائج جلسات الاختبار ثنائية اللغة<br>Bilingual test session outcomes              |

---

## 4. الممارسات الأساسية لضمان الجودة | Core Quality Practices

- 📘 توثيق المتطلبات غير الوظيفية مبكرًا ومراجعتها مع جميع أصحاب المصلحة.
  📘 Document NFRs early and review with stakeholders.
- 🔁 التحقق المستمر أثناء تنفيذ خطة الاختبار وربط النتائج بخطط التحسين.
  🔁 Continuously validate during test execution and link findings to improvement plans.
- 📊 مراقبة لوحات الأداء والاعتمادية باستمرار لرصد الانحرافات.
  📊 Monitor performance and reliability dashboards to spot deviations early.
- 🏛️ تحديث المتطلبات بعد أي تغيير معماري أو إطلاق رئيسي.
  🏛️ Refresh NFRs after architectural changes or major releases.
- 🗓️ عقد مراجعات فصلية لمقارنة الأهداف بالنتائج وتوثيق المعالجات.
  🗓️ Hold quarterly reviews comparing targets vs. actuals and log remediations.

---

## 5. الأسئلة الشائعة | FAQ

| السؤال                                                              | الإجابة                                                                                                                                                              |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ❓ كيف نعرّف متطلبًا غير وظيفي جديد؟<br>How do we define a new NFR? | ربطه بحاجة عمل أو التزام قانوني مع قياس رقمي واضح وخطة جمع بيانات.<br>Relate it to a business need or compliance requirement with a measurable metric and data plan. |
| ❓ متى تتم مراجعة NFR؟<br>When should NFRs be revisited?            | بعد الإصدارات الكبرى، الحوادث الحرجة، أو تغييرات البنية التحتية.<br>After major releases, critical incidents, or infrastructure shifts.                              |

> 📝 مثال: أثناء اختبار القبول، نجح الفريق في محاكاة 500 مستخدم أنجزوا الرحلات الحرجة في أقل من 2 ثانية، مؤكّدين تحقيق أهداف الأداء والاعتمادية.
> 📝 Example: During UAT, 500 simulated users finished critical journeys under 2 seconds, validating performance and reliability goals.

---

## 6. نصائح الجودة المتقدمة | Advanced Quality Tips

- 📡 تفعيل مراقبة الأداء مبكرًا للحصول على تنبيهات استباقية.
  📡 Enable performance monitoring early for proactive alerts.
- 🧭 ربط كل NFR بمؤشر KPI وتطبيقه ضمن بوابات CI الآلية.
  🧭 Link each NFR to a KPI and enforce it via automated CI gates.
- 🧪 تشغيل اختبارات الأمان والضغط على بيئات staging قبل النشر.
  🧪 Run security and stress tests on staging before production. |
- 🧵 عقد جلسات ما بعد الإصدار لتغذية خطط التحسين المستمرة.
  🧵 Hold post-release retrospectives to fuel continuous improvement plans.

---

## 7. روابط مرجعية | Reference Links

- 🔁 [خطة الاختبار](../11-test-plan/11-test-plan.md) تربط المقاييس باختبارات قابلة للتنفيذ.<br>🔁 [Test Plan](../11-test-plan/11-test-plan.md) maps metrics to executable tests.
- 🏛️ [البنية](../06-architecture/06-architecture.md) تشرح سياق الأمن والاستقرار.<br>🏛️ [Architecture](../06-architecture/06-architecture.md) explains security and stability context.
- 🧱 [نموذج البيانات](../05-data-model/05-data-model.md) يدمج الفهارس والأداء مع السيناريوهات.<br>🧱 [Data Model](../05-data-model/05-data-model.md) ties indexes and performance to scenarios.

> 🧾 **ملاحظة ختامية:** حدِّث هذه الوثيقة مع أي تغيير في الأهداف أو القياسات لتبقى الجودة متزامنة مع الواقع.
> 🧾 **Closing Note:** Update this document whenever targets or measurements change so quality stays aligned with reality.
