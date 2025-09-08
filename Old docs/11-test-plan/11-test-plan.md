# 🧪 Test Plan / خطة الاختبار

> Project: **CA Admin**  
> Version: v0.1 — Owner: Abdullah Alshaif  
> Last Updated: YYYY-MM-DD

---

## 1) Introduction / المقدمة
**EN:**  
The Test Plan ensures that CA Admin meets both **functional requirements (Use Cases)** and **non-functional requirements (NFRs)**.  
It defines the scope, strategy, test types, environments, and acceptance criteria.

**AR:**  
تضمن خطة الاختبار أن يلبي نظام CA Admin **المتطلبات الوظيفية (Use Cases)** و **غير الوظيفية (NFRs)**.  
تحدد نطاق الاختبار، الاستراتيجية، أنواع الاختبارات، بيئات التنفيذ، ومعايير القبول.

---

## 2) Test Objectives / أهداف الاختبار
- **EN:** Verify functionality, performance, security, and usability.  
- **AR:** التحقق من الوظائف، الأداء، الأمان، وسهولة الاستخدام.  

---

## 3) Scope / نطاق الاختبار
- **In-Scope / ضمن النطاق:**  
  - Orders: creation, update, status tracking  
  - Shipments: status updates, driver assignments  
  - Finance: payments, deposits, deductions, reports  
  - User Management: roles & permissions (RBAC)  
  - Offline Sync & Conflict resolution  
- **Out-of-Scope / خارج النطاق:**  
  - Payment Gateway integrations (future phases)  
  - AI/Analytics modules  

---

## 4) Test Types / أنواع الاختبارات

| Test Type (EN)      | النوع (AR)         | Purpose / الهدف |
|----------------------|-------------------|-----------------|
| Unit Tests           | اختبارات الوحدة   | Validate individual functions (e.g., calculations) |
| Integration Tests    | اختبارات التكامل  | Validate modules working together (Orders ↔ Finance ↔ Shipments) |
| UI/UX Tests          | اختبارات الواجهة  | Ensure user-friendly experience (multi-language, RTL/LTR) |
| Performance Tests    | اختبارات الأداء   | Validate response time, load handling |
| Security Tests       | اختبارات الأمان   | Validate RBAC, Security Rules |
| Acceptance Tests     | اختبارات القبول   | Validate against Use Cases & User Stories |

---

## 5) Test Environments / بيئات الاختبار
- **Development Environment:** Firebase Emulator Suite + Local DB (Hive/SQLite).  
- **Staging Environment:** Firebase test project with sample data.  
- **Production Environment:** Live Firebase project (with restricted access).  

---

## 6) Test Data / بيانات الاختبار
**EN:**  
Test data includes dummy customers, orders, shipments, and financial records.  
Sensitive data must not be used in testing.

**AR:**  
تتضمن بيانات الاختبار عملاء وهميين، طلبات، شحنات، وسجلات مالية.  
يُمنع استخدام بيانات حساسة أثناء الاختبار.

---

## 7) Acceptance Criteria / معايير القبول
- **Orders:** Must be created in ≤ 60s, status updated correctly.  
- **Shipments:** Driver updates must reflect to customers in ≤ 2 min.  
- **Finance:** Balances reconciled automatically, reports generated weekly.  
- **NFRs:**  
  - Response time < 2s  
  - Uptime ≥ 99.5%  
  - Multi-language UI works correctly  

---

## 8) Test Schedule / جدول الاختبار
- **Unit Testing:** Continuous during development.  
- **Integration Testing:** End of each sprint.  
- **System Testing:** Before release candidate.  
- **User Acceptance Testing (UAT):** By stakeholders before final release.  

---

## 9) Roles & Responsibilities / الأدوار والمسؤوليات

| Role (EN)         | الدور (AR)     | Responsibility / المسؤولية |
|-------------------|----------------|-----------------------------|
| Developers        | المطورون       | Write unit/integration tests |
| QA/Test Engineer  | مهندس الاختبار | Execute test plan, report issues |
| IT Manager        | مدير التقنية   | Oversee testing strategy |
| Finance Officer   | الموظف المالي  | Validate financial test cases |
| Saudi/Yemen Staff | الموظفون       | Validate order & shipment flows |

---

## 10) Tools / الأدوات
- **Flutter Test** → Unit & integration testing  
- **Mockito** → Mock dependencies  
- **Firebase Emulator Suite** → Firestore/Auth/Functions local testing  
- **Postman** → API testing  
- **GitHub Actions** → CI/CD automated tests  

---

## 11) Risk & Mitigation / المخاطر والمعالجات
- **Data conflicts in offline sync** → Use audit logs + conflict resolution.  
- **Uncovered edge cases** → Expand regression testing.  
- **Security gaps** → Continuous pen-testing & rule validation.  

---

## 12) Notes / ملاحظات
- Test results must be documented and linked with `/04-use-cases` & `/10-nfr-and-quality`.  
- Bugs must be logged with severity level (Critical, High, Medium, Low).  
- Test coverage target: **≥ 70% business logic**.  

---
