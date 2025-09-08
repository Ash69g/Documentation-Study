# 🔄 Process Flows / تدفقات العمليات

> Project: **CA Admin**  
> Version: v0.1 — Owner: Abdullah Alshaif  
> Last Updated: YYYY-MM-DD

---

## 1) Introduction / المقدمة
**EN:**  
Process flows describe the sequence of activities in the CA Admin system.  
We use **BPMN (Business Process Model and Notation)** for business flows and **DFD (Data Flow Diagrams)** for data movement.  

**AR:**  
تصف تدفقات العمليات تسلسل الأنشطة في نظام CA Admin.  
نستخدم **BPMN** لتوضيح سير الأعمال و **DFD** لتوضيح تدفق البيانات.

---

## 2) High-Level BPMN / مخطط BPMN عام

```mermaid
flowchart LR
  C[Customer] -->|Submit order| O1[Order Intake]
  O1 -->|Validate & Store| SYS[CA Admin System]
  SYS -->|Confirm order| C
  SYS -->|Forward order| SO[Saudi Office Staff]
  SO -->|Purchase & Consolidate| SH[Shipment]
  SH -->|Forward to Yemen| YO[Yemen Office Staff]
  YO -->|Sort & Prepare delivery| D[Driver]
  D -->|Deliver package| C
  C -->|Payment| F[Finance Officer]
  F -->|Record Transaction| SYS
3) Detailed BPMN Steps / خطوات BPMN بالتفصيل
Customer submits order links → System generates OrderNo.

Saudi Office Staff purchase items from vendors.

Packages consolidated into a Shipment.

Shipment forwarded to Yemen Office Staff.

Yemen staff sort packages per customer.

Driver delivers to customer.

Finance Officer records payments, reconciles logs.

System generates reports.

4) Data Flow Diagram (DFD Level 0) / مخطط تدفق البيانات (المستوى 0)
mermaid
Copy code
flowchart TD
  C[Customer] -->|Order Data| SYS[CA Admin System]
  SYS -->|Order Confirmation| C
  SO[Saudi Office Staff] -->|Purchase Data| SYS
  YO[Yemen Office Staff] -->|Delivery Updates| SYS
  D[Driver] -->|Shipment Status| SYS
  F[Finance Officer] -->|Payments & Logs| SYS
  SYS -->|Reports| A[Admin/IT Manager]
5) Data Flow Diagram (DFD Level 1 - Orders) / مخطط تدفق البيانات (المستوى 1 - الطلبات)
mermaid
Copy code
flowchart LR
  C[Customer] -->|Order Info| ORD[Orders Module]
  ORD -->|Order Confirmation| C
  ORD -->|Order Data| DB[(Firestore DB)]
  ORD -->|Trigger Shipment| SHIP[Shipments Module]
6) Notes / ملاحظات
BPMN diagrams show who does what (business roles).

DFD diagrams show how data moves between modules.

These flows must align with Use Cases and User Stories.

Updates in processes should be reflected here and in /06-architecture.

yaml
Copy code

---

🔹 الآن عندك:  
- **BPMN عام** يوضح رحلة الطلب من العميل حتى الدفع.  
- **DFD Level 0 & Level 1** يوضح تدفق البيانات الأساسي وتدفق الطلبات.  
- ربط واضح مع Use Cases والـ Architecture.

هل ترغب أن ننتقل الآن إلى الملف الثامن **`/docs/08-security-and-roles/08-security-and-roles.md`** لتوثيق **RBAC + Firebase Security Rules**؟





