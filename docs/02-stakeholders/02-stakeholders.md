# 👥 Stakeholders Analysis / تحليل أصحاب المصلحة

---

## 1. Introduction / المقدمة
**English:**  
Stakeholders are individuals, groups, or entities who influence or are affected by the CA Admin system.  
Identifying them is critical to ensure the system meets both business and user needs.

**العربية:**  
أصحاب المصلحة هم الأفراد أو المجموعات أو الجهات التي تؤثر أو تتأثر بنظام CA Admin.  
تحديدهم بدقة أمر أساسي لضمان أن النظام يلبي احتياجات العمل والمستخدمين معًا.

---

## 2. Stakeholder List / قائمة أصحاب المصلحة

| Stakeholder | Description (English) | الوصف (العربية) | Interest/Role |
|-------------|------------------------|-----------------|---------------|
| **Customer** | End users who request products from international websites (Shein, iHerb, Amazon, Noon, etc.) | العملاء الذين يطلبون المنتجات من المواقع العالمية | Track orders, receive notifications, pay invoices |
| **Saudi Office Staff** | Employees who receive shipments in Saudi Arabia and consolidate them | موظفو المكتب السعودي الذين يستقبلون الشحنات ويجمعونها | Verify products, prepare for Yemen shipping |
| **Yemen Office Staff** | Employees handling local distribution to customers | موظفو المكتب اليمني المسؤولون عن التوزيع المحلي | Receive consolidated shipments, deliver to customers |
| **Drivers / Couriers** | People transporting shipments from Saudi to Yemen or within Yemen | السائقون/المندوبون الذين ينقلون الشحنات | Ensure safe and timely delivery |
| **Finance/Admin** | Staff responsible for payments, invoices, reconciliations, and financial reports | موظفو المالية/الإدارة للمسؤولية عن المدفوعات والتقارير | Maintain accurate logs, manage financial flows |
| **IT Manager** | Oversees the system development, deployment, and operations | مدير تقنية المعلومات المسؤول عن تطوير وتشغيل النظام | Ensure system stability, plan upgrades |
| **System Developers** | Flutter & Firebase developers | مطورو النظام (Flutter & Firebase) | Build, maintain, and improve the system |
| **External Vendors** | Online stores (Shein, iHerb, Amazon, Noon) | المتاجر الخارجية (شي إن، آيهيرب، أمازون، نون) | Provide order APIs, handle payments, ship products |
| **Auditor / Reviewer** | Internal or external auditor | المراجع أو المدقق الداخلي/الخارجي | Verify financial logs and system compliance |

---

## 3. Stakeholder Classification / تصنيف أصحاب المصلحة
**English:**  
We can classify stakeholders based on their influence and interest:

- **High Influence & High Interest:** IT Manager, Finance/Admin, Saudi Office Staff  
- **High Influence & Low Interest:** External Vendors, Auditor  
- **Low Influence & High Interest:** Customers, Yemen Office Staff, Drivers  
- **Low Influence & Low Interest:** Occasional partners, seasonal staff  

**العربية:**  
يمكن تصنيف أصحاب المصلحة بناءً على التأثير والاهتمام:

- **تأثير عالٍ + اهتمام عالٍ:** مدير التقنية، الإدارة المالية، موظفو مكتب السعودية  
- **تأثير عالٍ + اهتمام منخفض:** المتاجر الخارجية، المراجع  
- **تأثير منخفض + اهتمام عالٍ:** العملاء، موظفو مكتب اليمن، السائقون  
- **تأثير منخفض + اهتمام منخفض:** شركاء موسميون أو موظفون مؤقتون  

---

## 4. RACI Matrix / مصفوفة المسؤوليات (RACI)

| Task / المهمة | Responsible (منفذ) | Accountable (مسؤول رئيسي) | Consulted (مستشار) | Informed (مطلع) |
|---------------|----------------------|--------------------------|---------------------|-----------------|
| Collecting customer orders | Yemen Office Staff | IT Manager | Customer | Finance/Admin |
| Purchasing from vendors | Saudi Office Staff | IT Manager | Vendors | Finance/Admin |
| Shipment consolidation | Saudi Office Staff | IT Manager | Drivers | Yemen Office Staff |
| Local delivery to customers | Yemen Office Staff / Drivers | Office Manager | Customer | Finance/Admin |
| Payment collection | Finance/Admin | IT Manager | Auditor | Customer |
| Financial reporting | Finance/Admin | Auditor | IT Manager | Management |
| System maintenance | Developers | IT Manager | Finance/Admin | All Staff |

---

## 5. Stakeholder Needs & Expectations / احتياجات وتوقعات أصحاب المصلحة
**English:**  
- Customers: Easy ordering, transparent tracking, accurate billing.  
- Office Staff: Simple tools to register orders and shipments.  
- Finance: Reliable logs, error-free reconciliation.  
- IT Manager: Scalable, secure, and maintainable system.  
- Developers: Clear requirements and consistent documentation.  
- Auditor: Transparent reports and compliance with standards.

**العربية:**  
- العملاء: طلب سهل، تتبع شفاف، فواتير دقيقة.  
- موظفو المكاتب: أدوات بسيطة لتسجيل الطلبات والشحنات.  
- المالية: سجلات دقيقة، مطابقة بلا أخطاء.  
- مدير التقنية: نظام آمن، قابل للتوسع والصيانة.  
- المطورون: متطلبات واضحة وتوثيق متسق.  
- المراجع: تقارير شفافة، والالتزام بالمعايير.  

---
