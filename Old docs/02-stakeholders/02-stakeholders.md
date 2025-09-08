# 👥 Stakeholders Analysis / تحليل أصحاب المصلحة

> Project: **CA Admin**  
> Version: v0.1 — Owner: Abdullah Alshaif — Last Updated: YYYY-MM-DD

---

## 1) Introduction / المقدمة
**EN:**  
Stakeholders are all individuals, groups, or entities who have an interest in the CA Admin system, whether internal (staff, finance, IT) or external (customers, vendors).  
Identifying and analyzing stakeholders ensures that requirements are clear and priorities are aligned.

**AR:**  
أصحاب المصلحة هم جميع الأفراد أو المجموعات أو الجهات التي لها علاقة بنظام CA Admin، سواء داخليًا (الموظفون، المالية، التقنية) أو خارجيًا (العملاء، المتاجر).  
تحديدهم وتحليلهم يساعد على وضوح المتطلبات وتوافق الأولويات.

---

## 2) Stakeholder List / قائمة أصحاب المصلحة

| Stakeholder (EN) | Stakeholder (AR) | Description / الوصف | Interest / الدور |
|------------------|------------------|----------------------|------------------|
| **Customer** | العميل | End-users placing product requests via app | Wants simple order flow, payment transparency, shipment tracking |
| **Saudi Office Staff** | موظفو مكتب السعودية | Receive shipments, consolidate packages | Ensure accurate consolidation & timely forwarding |
| **Yemen Office Staff** | موظفو مكتب اليمن | Handle local delivery to customers | Deliver accurately and update system |
| **Drivers / Couriers** | السائقون / المندوبون | Transport shipments (KSA → Yemen / local) | Keep shipments safe and update statuses |
| **Finance Officer** | الموظف المالي | Manage invoices, payments, deductions, deposits | Maintain accurate logs & reports |
| **Admin / IT Manager** | المدير / مدير التقنية | Oversee the entire system, assign roles | System stability, security, scalability |
| **Developers** | المطورون | Flutter & Firebase developers | Implement requirements, ensure maintainability |
| **Vendors (Shein, Amazon, iHerb, Noon)** | المتاجر العالمية | Provide products and order APIs | Reliable APIs, correct order fulfillment |
| **Auditor / Reviewer** | المدقق | Internal/external reviewer of financial logs | Ensure compliance & transparency |

---

## 3) Stakeholder Classification / تصنيف أصحاب المصلحة

**EN:** Stakeholders classified by **Influence vs Interest**.  
**AR:** تصنيف أصحاب المصلحة حسب **التأثير والاهتمام**.

- **High Influence + High Interest:** IT Manager, Finance Officer, Saudi Office Staff.  
- **High Influence + Low Interest:** Vendors, Auditor.  
- **Low Influence + High Interest:** Customers, Yemen Staff, Drivers.  
- **Low Influence + Low Interest:** Seasonal partners, temp staff.  

---

## 4) RACI Matrix / مصفوفة المسؤوليات

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

## 5) Needs & Expectations / الاحتياجات والتوقعات

- **Customer / العميل:**  
  - EN: Easy order placement, transparent pricing, reliable tracking.  
  - AR: سهولة الطلب، شفافية الأسعار، تتبع موثوق.

- **Staff / الموظفون:**  
  - EN: Simple workflows, minimal manual errors.  
  - AR: سير عمل بسيط، تقليل الأخطاء اليدوية.

- **Finance / المالية:**  
  - EN: Accurate logs, automated reports, reconciliation.  
  - AR: سجلات دقيقة، تقارير مؤتمتة، مطابقة مالية.

- **Admin / المدير:**  
  - EN: System security, performance, scalability.  
  - AR: أمان النظام، الأداء، قابلية التوسع.

- **Developers / المطورون:**  
  - EN: Clear requirements, clean architecture, documentation.  
  - AR: متطلبات واضحة، بنية نظيفة، توثيق كامل.

- **Auditor / المدقق:**  
  - EN: Transparent financial reports, compliance with standards.  
  - AR: تقارير مالية شفافة، الالتزام بالمعايير.

---

## 6) Notes / ملاحظات
- Stakeholder expectations will guide **User Stories** and **Use Cases**.  
- Updates to roles/responsibilities must be reflected in **Security & Roles (RBAC)** documentation.

---
