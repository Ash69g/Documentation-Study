# 📚 Glossary / القاموس

> Project: **CA Admin**  
> Version: v0.1 — Owner: Abdullah Alshaif  
> Last Updated: YYYY-MM-DD

---

## 1) Introduction / المقدمة
**EN:**  
This glossary defines key terms used in the CA Admin system documentation.  
It ensures consistent understanding across stakeholders, developers, and auditors.  

**AR:**  
يعرّف هذا القاموس المصطلحات الرئيسية المستخدمة في توثيق نظام CA Admin.  
ويساعد على ضمان فهم موحد بين أصحاب المصلحة، المطورين، والمراجعين.

---

## 2) Terms / المصطلحات

| Term (EN)          | المصطلح (AR)       | Definition (EN) | التعريف (AR) |
|---------------------|-------------------|-----------------|---------------|
| **Customer**        | العميل            | End user who requests products via CA Admin. | المستخدم النهائي الذي يطلب منتجات عبر النظام. |
| **Order**           | الطلبية           | A customer request containing product links, quantities, and notes. | طلب العميل الذي يحتوي على روابط المنتجات والكميات والملاحظات. |
| **OrderNo**         | رقم الطلب         | Unique identifier for each order. | معرف فريد لكل طلبية. |
| **Order Items**     | عناصر الطلب       | Individual products linked to an order. | المنتجات المفصلة المرتبطة بالطلبية. |
| **Shipment**        | الشحنة            | Package(s) transported from KSA to Yemen, linked to orders. | الطرد أو الطرود التي يتم شحنها من السعودية إلى اليمن والمرتبطة بالطلبات. |
| **Driver**          | السائق            | Person responsible for transporting shipments. | الشخص المسؤول عن نقل الشحنات. |
| **Finance Log**     | سجل مالي           | Record of financial transactions (payments, deposits, deductions). | سجل للعمليات المالية (مدفوعات، إيداعات، خصومات). |
| **Bank Card**       | البطاقة البنكية    | Company-owned bank card used for transactions. | بطاقة بنكية مملوكة للشركة تُستخدم في العمليات. |
| **Bank Deposit**    | إيداع بنكي         | Amount credited into a bank card. | المبلغ المودع في البطاقة البنكية. |
| **Bank Payment**    | دفعة بنكية         | Amount debited from a bank card. | المبلغ المدفوع من البطاقة البنكية. |
| **Gift Card**       | بطاقة هدية         | Prepaid card (e.g., Shein gift card) used for purchases or refunds. | بطاقة مدفوعة مسبقًا (مثل بطاقة هدية شي إن) تُستخدم في الشراء أو الاسترجاع. |
| **Checkout Log**    | سجل الخروج         | Summary record of reconciled balances for auditing. | سجل ملخص للمبالغ المطابقة بهدف التدقيق. |
| **RBAC**            | التحكم بالأدوار    | Role-Based Access Control: defines permissions by role. | التحكم المبني على الأدوار: يحدد الصلاحيات حسب الدور. |
| **Custom Claims**   | صلاحيات مخصصة      | Firebase Auth feature to assign roles to users. | ميزة في Firebase Auth لتعيين أدوار للمستخدمين. |
| **Firestore**       | قاعدة بيانات Firestore | NoSQL database used as the backend for CA Admin. | قاعدة بيانات NoSQL تُستخدم كخلفية لتطبيق CA Admin. |
| **Offline-First**   | دون إنترنت أولاً    | Design principle where app works offline and syncs later. | مبدأ تصميم بحيث يعمل التطبيق بدون إنترنت ويزامن لاحقًا. |
| **Sync Service**    | خدمة المزامنة      | Component that handles offline-to-online synchronization. | مكون مسؤول عن المزامنة من وضع دون إنترنت إلى متصل. |
| **Audit Log**       | سجل التدقيق        | Record of all changes for compliance and reviews. | سجل لجميع التغييرات لأغراض المراجعة والامتثال. |
| **UAT**             | اختبار القبول       | User Acceptance Testing: verifying system meets stakeholder needs. | اختبار القبول من المستخدم: التحقق من أن النظام يلبي متطلبات أصحاب المصلحة. |
| **CI/CD**           | التكامل/النشر المستمر | Continuous Integration & Continuous Delivery pipeline. | خط أنابيب التكامل المستمر والتوزيع المستمر. |
| **Alpha Release**   | الإصدار الأولي     | Internal-only release for testing. | إصدار أولي داخلي للاختبار. |
| **Beta Release**    | الإصدار التجريبي   | Release to selected users for feedback. | إصدار لمستخدمين محددين لأخذ الملاحظات. |
| **Production**      | الإنتاج            | Final public release for all users. | الإصدار النهائي المتاح لجميع المستخدمين. |

---

## 3) Notes / ملاحظات
- This glossary should be updated whenever new business or technical terms appear.  
- It complements the **Vision**, **Stakeholders**, **Data Model**, and **Security** documents.  
- All team members should use these terms consistently in communication and documentation.  

---
