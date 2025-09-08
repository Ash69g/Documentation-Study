

# 👥 Stakeholders Analysis / تحليل أصحاب المصلحة

> **Project:** CA Admin  
> **Version:** v0.1 — Owner: Abdullah Alshaif — Last Updated: YYYY-MM-DD

---

## 1. Introduction / المقدمة

<div align="center">
  <img src="https://img.icons8.com/color/96/000000/conference-call.png" width="80" alt="stakeholders"/>
</div>

**EN:**
Stakeholders are all individuals, groups, or entities who have an interest in the CA Admin system, whether internal (staff, finance, IT) or external (customers, vendors). Identifying and analyzing stakeholders ensures that requirements are clear and priorities are aligned.

**AR:**
أصحاب المصلحة هم جميع الأفراد أو المجموعات أو الجهات التي لها علاقة بنظام CA Admin، سواء داخليًا (الموظفون، المالية، التقنية) أو خارجيًا (العملاء، المتاجر). تحديدهم وتحليلهم يساعد على وضوح المتطلبات وتوافق الأولويات.

---

## 1.1 Stakeholder Interaction Map / خريطة تفاعل أصحاب المصلحة

```mermaid
flowchart LR
    Customer((عميل)) -- "طلب/تتبع/دفع" --> App[تطبيق CA Admin]
    App -- "إشعارات/تقارير" --> Customer
    App -- "إدارة/إعدادات" --> Admin[الإدارة]
    App -- "تقارير مالية" --> Finance[المالية]
    App -- "تسليم/تحديث حالة" --> Staff[الموظفون]
    App -- "تكامل API" --> Vendor[المتاجر العالمية]
    App -- "مراجعة/تدقيق" --> Auditor[المدقق]
```

---

## 2. Stakeholder List / قائمة أصحاب المصلحة

| Stakeholder (EN) | Stakeholder (AR) | Description / الوصف | Interest / الدور | Example Scenario / سيناريو عملي |
|------------------|------------------|----------------------|------------------|-------------------------------|
| **Customer** | العميل | End-users placing product requests via app | Wants simple order flow, payment transparency, shipment tracking | "Ali places an order, tracks his shipment, and pays online." |
| **Saudi Office Staff** | موظفو مكتب السعودية | Receive shipments, consolidate packages | Ensure accurate consolidation & timely forwarding | "Sara receives packages, scans them, and prepares for Yemen." |
| **Yemen Office Staff** | موظفو مكتب اليمن | Handle local delivery to customers | Deliver accurately and update system | "Ahmed delivers packages to customers in Sana'a and updates status." |
| **Drivers / Couriers** | السائقون / المندوبون | Transport shipments (KSA → Yemen / local) | Keep shipments safe and update statuses | "Mohammed drives from KSA to Yemen, updates delivery status." |
| **Finance Officer** | الموظف المالي | Manage invoices, payments, deductions, deposits | Maintain accurate logs & reports | "Fatima logs payments and generates weekly reports." |
| **Admin / IT Manager** | المدير / مدير التقنية | Oversee the entire system, assign roles | System stability, security, scalability | "Omar assigns roles and monitors system health." |
| **Developers** | المطورون | Flutter & Firebase developers | Implement requirements, ensure maintainability | "The dev team adds a new feature for order search." |
| **Vendors (Shein, Amazon, iHerb, Noon)** | المتاجر العالمية | Provide products and order APIs | Reliable APIs, correct order fulfillment | "Shein API sends order confirmation to the system." |
| **Auditor / Reviewer** | المدقق | Internal/external reviewer of financial logs | Ensure compliance & transparency | "External auditor reviews financial logs for compliance." |

---

## 2.1 Communication Channels / قنوات التواصل

| Stakeholder | Channel (EN) | القناة (AR) |
|-------------|-------------|-------------|
| Customer | Mobile App, Email, SMS | تطبيق الجوال، بريد إلكتروني، رسائل نصية |
| Staff | Mobile App, Web Dashboard | تطبيق الجوال، لوحة تحكم ويب |
| Finance | Web Dashboard, Reports | لوحة تحكم ويب، تقارير |
| Admin | Web Dashboard, Email | لوحة تحكم ويب، بريد إلكتروني |
| Developers | GitHub, Documentation | GitHub، التوثيق |
| Vendors | API Integration, Email | تكامل API، بريد إلكتروني |
| Auditor | Reports, Dashboard | تقارير، لوحة تحكم |

---

## 3. Stakeholder Classification / تصنيف أصحاب المصلحة

```mermaid
quadrantChart
    title Influence vs Interest
    x-axis Low Interest --> High Interest
    y-axis Low Influence --> High Influence
    "IT Manager" : [0.8, 0.9]
    "Finance Officer" : [0.7, 0.9]
    "Saudi Office Staff" : [0.6, 0.8]
    "Vendors" : [0.2, 0.8]
    "Auditor" : [0.3, 0.7]
    "Customer" : [0.9, 0.3]
    "Yemen Staff" : [0.8, 0.4]
    "Drivers" : [0.7, 0.4]
    "Temp Staff" : [0.2, 0.2]
```

---

## 4. RACI Matrix / مصفوفة المسؤوليات

| Task / المهمة | Responsible (منفذ) | Accountable (مسؤول رئيسي) | Consulted (مستشار) | Informed (مطلع) |
|---------------|----------------------|--------------------------|---------------------|-----------------|
| Collect customer orders | Yemen Staff | IT Manager | Customer | Finance |
| Purchase from vendors | Saudi Staff | IT Manager | Vendors | Finance |
| Shipment consolidation | Saudi Staff | IT Manager | Drivers | Yemen Staff |
| Local delivery | Yemen Staff + Drivers | Office Manager | Customer | Finance |
| Payment collection | Finance Officer | IT Manager | Auditor | Customer |
| Financial reporting | Finance Officer | Auditor | IT Manager | Admin |
| System maintenance | Developers | IT Manager | Finance | All Staff |

---

## 5. Needs & Expectations / الاحتياجات والتوقعات

```mermaid
mindmap
  root((Stakeholders))
    Customer
      Easy order
      Transparent pricing
      Reliable tracking
    Staff
      Simple workflows
      Fewer manual errors
    Finance
      Accurate logs
      Automated reports
      Reconciliation
    Admin
      Security
      Performance
      Scalability
    Developers
      Clear requirements
      Clean architecture
      Documentation
    Auditor
      Transparent reports
      Compliance
```

---

## 6. Impact of Feedback / أثر ملاحظات أصحاب المصلحة

- **EN:** Stakeholder feedback is continuously collected through the app, meetings, and support channels. It directly influences feature prioritization, bug fixes, and roadmap updates.
- **AR:** يتم جمع ملاحظات أصحاب المصلحة باستمرار عبر التطبيق والاجتماعات وقنوات الدعم، وتؤثر مباشرة في ترتيب الأولويات، إصلاح المشاكل، وتحديث خارطة الطريق.

---

## 7. Notes / ملاحظات

- Stakeholder expectations will guide **User Stories** and **Use Cases**.
- Updates to roles/responsibilities must be reflected in **Security & Roles (RBAC)** documentation.

---
