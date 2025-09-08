# 🗄️ Data Model / نموذج البيانات

> Project: **CA Admin**  
> Version: v0.1 — Owner: Abdullah Alshaif — Last Updated: YYYY-MM-DD

---

## 1) Introduction / المقدمة
**EN:**  
The Data Model defines the entities, attributes, and relationships required to support the CA Admin system. It starts with a conceptual ERD and then maps into Firebase Firestore schema.  

**AR:**  
نموذج البيانات يعرّف الكيانات والخصائص والعلاقات المطلوبة لدعم نظام CA Admin. يبدأ بمخطط ERD تصوري ثم يتم تحويله إلى مخطط Firebase Firestore.

---

## 2) Conceptual ERD / المخطط التصوري للكيانات

```mermaid
erDiagram
    CUSTOMERS ||--o{ CUSTOMER_ORDERS : places
    CUSTOMER_ORDERS ||--|{ ORDER_ITEMS : contains
    CUSTOMER_ORDERS ||--o{ SHIPMENTS : linked_to
    SHIPMENTS ||--o{ DRIVERS : handled_by
    FINANCIAL_LOGS ||--o{ CUSTOMER_ORDERS : reconciles
    BANK_CARDS ||--o{ BANK_DEPOSITS : records
    BANK_CARDS ||--o{ BANK_PAYMENTS : pays
    BANK_CARDS ||--o{ SHEIN_GIFT_CARDS : tracks
    IMAGES ||--o{ CUSTOMER_ORDERS : attached_to
    CHECKOUT_LOG ||--o{ CUSTOMER_ORDERS : reconciles


Entities:

Customers: Customer info, contact details.

Customer Orders: Main orders linked to customers.

Order Items: Specific products (SKU, quantity, price).

Shipments: Shipping records (status, date, driver).

Drivers: Couriers delivering shipments.

Financial Logs: Global log of all financial activities.

Bank Cards: Cards used for payments/deposits.

Bank Deposits / Payments: Incoming/outgoing transactions.

Shein Gift Cards: Gift card usage & refunds.

Images: Attachments (receipts, product images).

Checkout Log: Closing summary for auditing.

3) Logical Data Model / النموذج المنطقي للبيانات
Customers
customerId (string, unique)

name (string)

phone (string)

address (string)

createdAt (timestamp)

Customer Orders
orderId (string, unique)

customerId (ref → Customers)

orderNo (string)

status (enum: new, purchased, shipped, arrived, delivered)

totalSAR (number)

exchangeRate (number)

totalYER (calc: totalSAR * exchangeRate)

paid (number)

remaining (calc: totalYER - paid - cashOffice)

createdAt (timestamp)

Order Items
itemId (string)

orderId (ref → Orders)

sku (string)

productName (string)

quantity (int)

price (number)

image (string)

Shipments
shipmentId (string)

orderId (ref → Orders)

status (enum: in-transit, arrived-KSA, forwarded, arrived-Yemen, sorted, delivered)

driverId (ref → Drivers)

boxes (int)

createdAt (timestamp)

Drivers
driverId (string)

name (string)

phone (string)

Financial Logs
logId (string)

type (enum: payment, deposit, deduction, refund)

amountUSD (number)

currency (string)

relatedId (ref → Orders/BankCards/etc.)

createdAt (timestamp)

Bank Cards
cardId (string)

cardName (string)

cardHolder (string)

bankBalance (number)

Bank Deposits
depositId (string)

cardId (ref → BankCards)

amount (number)

createdAt (timestamp)

Bank Payments
paymentId (string)

cardId (ref → BankCards)

paymentSource (string)

amountPaid (number)

createdAt (timestamp)

Shein Gift Cards
cardId (string)

cardNumber (string)

cardBalance (number)

amountRefunded (number)

giftCardDiscount (number)

Images
imageId (string)

orderId (ref → Orders)

url (string)

type (enum: product, receipt)

Checkout Log
checkoutId (string)

totalToPay (number)

totalCash (number)

remaining (number)

note (string)

createdAt (timestamp)

4) Firestore Schema / مخطط Firestore
Collections & Subcollections



/customers/{customerId}
  name
  phone
  address
  createdAt
  -> /orders/{orderId}
       orderNo
       status
       totalSAR
       exchangeRate
       totalYER
       paid
       remaining
       createdAt
       -> /items/{itemId}
            sku
            productName
            quantity
            price
            image

/shipments/{shipmentId}
  orderId
  status
  driverId
  boxes
  createdAt

/drivers/{driverId}
  name
  phone

/financialLogs/{logId}
  type
  amountUSD
  relatedId
  createdAt

/bankCards/{cardId}
  cardName
  cardHolder
  bankBalance
  -> /deposits/{depositId}
       amount
       createdAt
  -> /payments/{paymentId}
       paymentSource
       amountPaid
       createdAt
  -> /giftCards/{giftCardId}
       cardNumber
       cardBalance
       amountRefunded
       giftCardDiscount

/images/{imageId}
  orderId
  url
  type

/checkoutLogs/{checkoutId}
  totalToPay
  totalCash
  remaining
  note
  createdAt



5) Notes / ملاحظات
The ERD shows conceptual relationships, while Firestore schema adapts them for NoSQL (denormalization & subcollections).

Composite indexes will be needed for queries like:

Orders by customer + status + date.

Payments by card + date.

All changes must be reflected in Indexes & Queries (/09-indexes-and-queries).



🔹 هذا الملف الآن يحتوي على:  
- ERD تصوري (Mermaid).  
- وصف كيانات مع الحقول الرئيسية.  
- مخطط Firestore Collections/Subcollections.  
- ملاحظات عن الفهارس والعلاقات.

هل ترغب أن أجهز لك الملف السادس **`/docs/06-architecture/06-architecture.md`** بحيث نرسم فيه بنية التطبيق وفق **Clean Architecture (Flutter & Firebase)**؟




