# 📝 User Stories / قصص المستخدم

> Project: **CA Admin**  
> Version: v0.1 — Owner: Abdullah Alshaif — Last Updated: YYYY-MM-DD

---

## 1) Introduction / المقدمة
**EN:**  
User Stories describe system features from the perspective of the end-users or stakeholders.  
They are written in a simple structure to clarify what the user wants and why.  
Each story should have **Acceptance Criteria** to make it testable.

**AR:**  
قصص المستخدم تصف ميزات النظام من منظور المستخدمين النهائيين أو أصحاب المصلحة.  
تُكتب بشكل مبسط لتوضيح ما يريده المستخدم ولماذا.  
يجب أن تحتوي كل قصة على **معايير قبول** لتكون قابلة للاختبار.

---

## 2) Template / القالب
- **As a [role]**, I want [feature] so that [benefit].  
- **بصفتي [الدور]**، أريد [الميزة] لكي [الفائدة].

**Acceptance Criteria / معايير القبول:**  
- **Given** (الحالة الأولية)  
- **When** (الحدث)  
- **Then** (النتيجة المتوقعة)  

---

## 3) User Story Examples / أمثلة قصص المستخدم

### Category A: Customer Stories / قصص العملاء

**Story C1: Place an order**
- EN: As a **Customer**, I want to **submit product links and quantities** so that I can **buy items easily**.  
- AR: بصفتي **عميل**، أريد **إرسال روابط المنتجات والكميات** لكي أتمكن من **الشراء بسهولة**.  

**Acceptance Criteria:**  
- Given product links are valid  
- When the customer submits the order  
- Then the system generates an OrderNo and stores it in Firestore  

---

**Story C2: Track shipment**
- EN: As a **Customer**, I want to **view shipment status** so that I know **when to expect delivery**.  
- AR: بصفتي **عميل**، أريد **عرض حالة الشحنة** لكي أعرف **متى ستصل**.  

**Acceptance Criteria:**  
- Given the shipment is in the system  
- When the customer opens “My Orders”  
- Then the current status is displayed  

---

**Story C3: Pay invoice**
- EN: As a **Customer**, I want to **see my balance and pay invoices** so that I stay updated financially.  
- AR: بصفتي **عميل**، أريد **رؤية رصيدي ودفع الفواتير** لكي أبقى مطلعًا ماليًا.  

**Acceptance Criteria:**  
- Given an invoice exists  
- When the customer pays  
- Then the system updates the balance  

---

### Category B: Staff Stories / قصص الموظفين

**Story S1: Register incoming shipment**
- EN: As **Saudi Office Staff**, I want to **register incoming packages** so that they can be consolidated.  
- AR: بصفتي **موظف مكتب السعودية**، أريد **تسجيل الطرود الواردة** لكي يتم تجميعها.  

**Acceptance Criteria:**  
- Given a shipment arrives  
- When staff register it  
- Then it is linked to customer orders  

---

**Story S2: Deliver packages**
- EN: As **Yemen Office Staff**, I want to **mark deliveries as complete** so that records are accurate.  
- AR: بصفتي **موظف مكتب اليمن**، أريد **تحديد الطرود كمُسلمة** لكي تكون السجلات دقيقة.  

**Acceptance Criteria:**  
- Given a package is out for delivery  
- When staff mark it delivered  
- Then the system updates customer status  

---

### Category C: Finance Stories / قصص المالية

**Story F1: Record customer payment**
- EN: As a **Finance Officer**, I want to **record customer payments** so that balances remain correct.  
- AR: بصفتي **موظف مالي**، أريد **تسجيل مدفوعات العملاء** لكي تبقى الأرصدة صحيحة.  

**Acceptance Criteria:**  
- Given a payment amount  
- When it is logged in the system  
- Then the customer balance decreases  

---

**Story F2: Generate weekly report**
- EN: As a **Finance Officer**, I want to **generate weekly reports** so that I can review trends.  
- AR: بصفتي **موظف مالي**، أريد **إنشاء تقارير أسبوعية** لكي أراجع الاتجاهات.  

**Acceptance Criteria:**  
- Given the system has financial logs  
- When the report is requested  
- Then the system outputs a PDF/Excel  

---

### Category D: Admin / IT Stories / قصص الإدارة والتقنية

**Story A1: Manage user roles**
- EN: As an **Admin**, I want to **assign staff roles** so that access is controlled.  
- AR: بصفتي **مدير**، أريد **تعيين أدوار الموظفين** لكي يكون الوصول مضبوطًا.  

**Acceptance Criteria:**  
- Given a staff account  
- When the role is updated  
- Then permissions are applied immediately  

---

**Story A2: System sync offline/online**
- EN: As an **IT Manager**, I want the app to **work offline and sync later** so that staff can work without internet.  
- AR: بصفتي **مدير تقنية**، أريد أن يعمل التطبيق **بدون إنترنت ويزامن لاحقًا** لكي يتمكن الموظفون من العمل باستمرار.  

**Acceptance Criteria:**  
- Given no internet connection  
- When staff enter data  
- Then it is cached locally and synced on reconnect  

---

## 4) Suggested Categories / التصنيفات المقترحة
- Customers / العملاء  
- Staff (Saudi & Yemen) / الموظفون (السعودية واليمن)  
- Finance / المالية  
- Admin / الإدارة  
- IT / التقنية  

---

## 5) Notes / ملاحظات
- Each User Story should map to at least one **Use Case**.  
- Acceptance Criteria will be reused in the **Test Plan**.  
- Stories evolve; update them as scope changes.  

---
