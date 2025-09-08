
# ⚙️ Non-Functional Requirements & Quality / المتطلبات غير الوظيفية والجودة

> **Project:** CA Admin  
> **Version:** v0.1 — Owner: Abdullah Alshaif  
> **Last Updated:** 2025-09-08

---

## 1. Introduction / المقدمة

<div align="center">
	<img src="https://img.icons8.com/color/96/000000/checked-2--v2.png" width="80" alt="quality"/>
</div>

**EN:**
Non-functional requirements (NFRs) define the **quality attributes** of the CA Admin system, including performance, reliability, usability, security, and maintainability. These ensure the system is practical, stable, and user-friendly.

**AR:**
المتطلبات غير الوظيفية تحدد **سمات الجودة** لنظام CA Admin مثل الأداء، الموثوقية، سهولة الاستخدام، الأمان، وقابلية الصيانة. وهي تضمن أن يكون النظام عمليًا ومستقرًا وسهل الاستخدام.

---

## 2. NFR Mindmap / خريطة ذهنية للمتطلبات غير الوظيفية

```mermaid
mindmap
	root((NFRs))
		Performance
			Response Time < 2s
			500+ Concurrent Users
		Reliability
			Uptime 99.5%
			Auto Sync
		Usability
			Bilingual (AR/EN)
			Mobile-first
		Security
			RBAC
			Encryption
			Audit Logs
		Maintainability
			Clean Architecture
			70%+ Test Coverage
		Scalability
			5000+ Customers
			Auto-scaling
```

---

## 3. Performance / الأداء

- **EN:** System must handle at least **500 concurrent users** with < 2s response time.
- **AR:** يجب أن يدعم النظام **500 مستخدم متزامن** بزمن استجابة أقل من ثانيتين.
- **EN:** Firestore queries should return results within **500ms** for indexed fields.
- **AR:** يجب أن تعود استعلامات Firestore بالنتائج خلال **500 مللي ثانية** للحقول المفهرسة.

---

## 4. Reliability & Availability / الموثوقية والتوافر

- **EN:** System uptime target: **99.5%**.
- **AR:** الهدف أن يكون النظام متاحًا بنسبة **99.5%**.
- **EN:** Automatic sync and conflict resolution ensures no data loss during outages.
- **AR:** المزامنة التلقائية وحل التعارض يضمنان عدم فقدان البيانات أثناء الانقطاعات.

---

## 5. Usability / سهولة الاستخدام

- **EN:** Support **Arabic & English** with automatic **RTL/LTR** switching.
- **AR:** دعم **العربية والإنجليزية** مع التبديل التلقائي بين **RTL/LTR**.
- **EN:** Mobile-first design optimized for Android/iOS mid-range devices.
- **AR:** تصميم يعتمد **الهاتف أولاً** ومناسب لأجهزة Android/iOS المتوسطة.
- **EN:** Max 3 steps to complete main workflows (place order, track shipment, record payment).
- **AR:** لا تزيد الخطوات الرئيسية (إنشاء طلب، تتبع شحنة، تسجيل دفعة) عن 3 خطوات.

---

## 6. Security / الأمان

- **EN:** Role-Based Access Control (RBAC) with Firebase Custom Claims.
- **AR:** تحكم في الصلاحيات عبر **RBAC** باستخدام Firebase Custom Claims.
- **EN:** All data encrypted in transit (TLS 1.2+) and at rest.
- **AR:** تشفير جميع البيانات أثناء النقل (TLS 1.2+) وأثناء التخزين.
- **EN:** Audit logs maintained for all financial and role-related actions.
- **AR:** الاحتفاظ بسجلات تدقيق لجميع العمليات المالية والمتعلقة بالصلاحيات.

---

## 7. Maintainability / قابلية الصيانة

- **EN:** Codebase follows **Clean Architecture** with layered separation.
- **AR:** يعتمد الكود على **Clean Architecture** مع فصل الطبقات.
- **EN:** Unit and integration tests must cover **≥ 70%** of business logic.
- **AR:** يجب أن تغطي اختبارات الوحدة والتكامل **70% على الأقل** من منطق الأعمال.
- **EN:** All APIs and modules documented in `/docs`.
- **AR:** توثيق جميع الـ APIs والوحدات في مجلد `/docs`.

---

## 8. Scalability / القابلية للتوسع

- **EN:** System should support scaling to **5000+ active customers** without redesign.
- **AR:** يجب أن يدعم النظام **5000+ عميل نشط** دون الحاجة لإعادة تصميم.
- **EN:** Use Firebase auto-scaling for Firestore and Functions.
- **AR:** استخدام خاصية **التوسع التلقائي** في Firestore و Functions.

---

## 9. ISO/IEC 25010 Quality Attributes / سمات الجودة (ISO/IEC 25010)

| Attribute (EN)         | الصفة (AR)         | Target / الهدف                         |
|------------------------|--------------------|----------------------------------------|
| Functional Suitability | الملاءمة الوظيفية   | Cover 100% of documented use cases     |
| Performance Efficiency | كفاءة الأداء        | < 2s response time                     |
| Compatibility          | التوافقية           | Android/iOS, future Web/Desktop        |
| Usability              | سهولة الاستخدام     | Bilingual UI, intuitive design         |
| Reliability            | الموثوقية           | 99.5% uptime                           |
| Security               | الأمان              | RBAC + encryption                      |
| Maintainability        | قابلية الصيانة       | Clean Architecture + 70% test coverage |
| Portability            | قابلية النقل        | Flutter cross-platform                 |

---

## 10. Notes / ملاحظات

- NFRs must be validated during testing ([Test Plan](../11-test-plan/11-test-plan.md)).
- Any update in [Architecture](../06-architecture/06-architecture.md) may affect NFR targets.
- These requirements must be reviewed quarterly.

---
