# 📌 Vision Document / وثيقة الرؤية

> Project: **CA Admin** — Admin, Customers, Shipments & Financial Management  
> Stack: **Flutter** + **Firebase** (Firestore, Auth, Storage, Functions)  
> Version: v0.1 (Vision) — Owner: Abdullah Alshaif — Last Updated: YYYY-MM-DD

---

## 1) Introduction / المقدمة
**EN**  
CA Admin is a unified system to operate an online purchasing intermediary business. It centralizes customer orders, purchasing from global websites (Shein, iHerb, Amazon, Noon…), cross-border shipping (KSA → Yemen), local last-mile, and financial operations.

**AR**  
يهدف CA Admin إلى توحيد تشغيل مشروع الوساطة في المشتريات عبر نظام مركزي لإدارة طلبات العملاء، والشراء من المنصات العالمية، والشحن من السعودية إلى اليمن، والتسليم المحلي، وجميع العمليات المالية.

---

## 2) Problem Statement / المشكلة
**EN**  
Current operations are manual and fragmented: scattered spreadsheets, chat-based order intake, weak shipment visibility, and error-prone financial reconciliation.

**AR**  
العمليات الحالية يدوية ومجزأة (جداول متفرقة، استقبال الطلبات عبر المحادثات، ضعف شفافية التتبع، وأخطاء في المطابقة المالية).

---

## 3) Vision & Value / الرؤية والقيمة
**EN**  
Provide a **centralized, transparent, and automated** platform that:
- Captures customer orders quickly.
- Orchestrates purchasing & consolidation.
- Tracks international & local shipments in real time.
- Maintains accurate financial logs and reports.
- Scales with multi-language (AR/EN) and offline-first usage.

**AR**  
تقديم منصة **مركزية وشفافة ومؤتمتة** لالتقاط الطلبات، وتنظيم الشراء والتجميع، وتتبع الشحنات لحظيًا، وحفظ السجلات المالية الدقيقة وإصدار التقارير، مع دعم تعدد اللغات والعمل دون إنترنت.

---

## 4) Objectives / الأهداف
**EN**
1. Single source of truth for customers, orders, shipments, finance.
2. Real-time status and notifications (purchase → shipped → arrived → delivered).
3. Offline-first with safe two-way sync to Firebase.
4. Role-based access control (Admin, Finance, Staff, Driver, Customer).
5. Weekly auto-reports (financial + shipments).
6. AR/EN UI with RTL/LTR switching.

**AR**
1. مصدر بيانات موحد للعملاء والطلبات والشحن والمالية.  
2. تتبع لحظي وإشعارات للحالات.  
3. عمل دون إنترنت مع مزامنة ثنائية آمنة إلى Firebase.  
4. صلاحيات مبنية على الأدوار.  
5. تقارير أسبوعية تلقائية.  
6. واجهة عربية/إنجليزية مع تبديل الاتجاه.

---

## 5) Scope / النطاق

### In-Scope / ضمن النطاق
- Customer accounts & order intake (links, SKU, qty, notes).
- Purchase workflow & consolidation (KSA office).
- Cross-border shipping + local delivery (drivers).
- Finance: invoices, payments, deductions, deposits, card logs, gift cards.
- Dashboards & reports.
- Security rules (Firestore) + RBAC via Custom Claims.

### Out-of-Scope (Phase-1) / خارج النطاق (المرحلة الأولى)
- Online payment gateway integration (handled manually first).
- Advanced analytics/AI (recommendations/forecast).
- Multi-country logistics beyond KSA–Yemen corridor.

---

## 6) Success Metrics (KPIs) / معايير النجاح
- **Order intake time** ≤ 60s per order (P90).
- **Status freshness**: 95% of shipments updated within ≤ 2h of change.
- **Financial reconciliation errors**: ↓ 90% مقابل الوضع الحالي.
- **Report generation**: weekly reports auto-generated ≤ 30s.
- **Customer satisfaction (CSAT)** ≥ 85%.

---

## 7) High-Level Features / الميزات عالية المستوى
- **Orders**: create, edit, link items, attach images/notes.
- **Shipments**: stages (purchased, shipped, arrived KSA, forwarded, arrived Yemen, sorted, delivered).
- **Finance**: customer balances, bank cards, deposits, payments, gift cards, logs/audit.
- **Notifications**: status changes, payment confirmations.
- **Search & Filters**: by customer, status, date, orderNo.
- **Multi-language** & **offline-first**.

---

## 8) Constraints & Assumptions / القيود والافتراضات
- **Connectivity**: intermittent; offline cache mandatory.
- **Primary DB**: Firestore; local cache via on-device storage.
- **Devices**: Android/iOS mid-range phones; optional Web/Desktop later.
- **Security**: Firestore Security Rules + Custom Claims; GDPR-like data hygiene.

---

## 9) Risks & Mitigations / المخاطر والمعالجات
| Risk | Impact | Mitigation |
|------|--------|------------|
| Data conflicts during sync | Incorrect balances/status | Upsert strategy + conflict resolution rules + audit log |
| Index limits / hot spots | Slow queries | Planned composite indexes, sharding keys, pagination |
| Role misconfiguration | Data exposure | RBAC matrix + tests + rule simulator |
| Human data entry errors | Financial mismatches | Validation, required fields, guided flows |

---

## 10) Release Plan (Phases) / خطة الإصدارات
- **MVP (4–6 weeks)**: Orders, basic shipments, finance basics, AR/EN, offline cache, core rules.
- **Phase 2**: Extended finance (gift cards, deductions dashboards), richer reports.
- **Phase 3**: Integrations (Shein/iHerb APIs), web portal, advanced analytics.

---

## 11) Glossary / القاموس المختصر
- **OrderNo**: رقم الطلب.  
- **Consolidation**: تجميع طرود العملاء في شحنة واحدة.  
- **RBAC**: صلاحيات حسب الدور.  
- **Reconciliation**: مطابقة قيود المالية مع الواقع.  

---
