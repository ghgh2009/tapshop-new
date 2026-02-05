'use client'

import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f6f0e8]">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-[15px] font-semibold text-[#7a6f63] hover:text-[#1a1a1a]">
            ← Back / กลับหน้าหลัก
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h1 className="text-3xl font-black text-[#1a1a1a] mb-2">Terms of Service</h1>
          <h2 className="text-xl font-bold text-[#22c55e] mb-4">ข้อกำหนดการใช้บริการ</h2>
          <p className="text-sm text-[#7a6f63] mb-8">
            Effective Date / วันที่มีผลบังคับใช้: January 30, 2026 / 30 มกราคม 2569
          </p>

          <div className="space-y-8 text-[#1a1a1a]">
            {/* Section 1 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">1. Agreement to Terms / การยอมรับข้อกำหนด</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63] mb-3">
                By accessing or using TapShop (&quot;the Service&quot;), operated by Bookd Capital, Inc., 
                a Delaware Corporation, you agree to be bound by these Terms of Service. If you do not agree 
                to these terms, please do not use our Service.
              </p>
              <p className="text-sm leading-relaxed text-[#7a6f63]">
                การเข้าถึงหรือใช้งาน TapShop (&quot;บริการ&quot;) ซึ่งดำเนินการโดย Bookd Capital, Inc. 
                บริษัทที่จดทะเบียนในรัฐเดลาแวร์ ถือว่าท่านยอมรับข้อกำหนดการใช้บริการนี้ 
                หากท่านไม่ยอมรับข้อกำหนดเหล่านี้ กรุณาอย่าใช้บริการของเรา
              </p>
            </section>

            {/* Section 2 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">2. Description of Service / รายละเอียดบริการ</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63] mb-3">
                TapShop is an on-demand marketplace platform that enables Thai merchants to create 
                online shops, manage products, process orders, and arrange same-day deliveries within 
                Bangkok and surrounding areas. Our platform provides:
              </p>
              <ul className="list-disc list-inside text-sm text-[#7a6f63] mb-3 space-y-1">
                <li>Shop creation and management tools</li>
                <li>Product listing and inventory management</li>
                <li>Order processing and tracking</li>
                <li>Integrated delivery services via Lalamove</li>
                <li>PromptPay and Cash on Delivery (COD) payment options</li>
              </ul>
              <p className="text-sm leading-relaxed text-[#7a6f63]">
                TapShop เป็นแพลตฟอร์มตลาดออนไลน์ที่ช่วยให้ผู้ขายชาวไทยสร้างร้านค้าออนไลน์ 
                จัดการสินค้า ประมวลผลคำสั่งซื้อ และจัดส่งสินค้าภายในวันเดียวกันในกรุงเทพฯ และปริมณฑล 
                แพลตฟอร์มของเรามีบริการ: สร้างและจัดการร้านค้า, ลงสินค้าและจัดการสต็อก, 
                ติดตามคำสั่งซื้อ, บริการจัดส่งผ่าน Lalamove, รับชำระผ่าน PromptPay และเก็บเงินปลายทาง
              </p>
            </section>

            {/* Section 3 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">3. User Accounts / บัญชีผู้ใช้</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63] mb-3">
                To use certain features of the Service, you must register for an account using your 
                mobile phone number. When you register, you agree to:
              </p>
              <ul className="list-disc list-inside text-sm text-[#7a6f63] mb-3 space-y-1">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
              <p className="text-sm leading-relaxed text-[#7a6f63]">
                หากต้องการใช้คุณสมบัติบางอย่างของบริการ ท่านต้องลงทะเบียนบัญชีโดยใช้หมายเลขโทรศัพท์มือถือ 
                เมื่อลงทะเบียน ท่านตกลงที่จะ: ให้ข้อมูลที่ถูกต้องและเป็นปัจจุบัน, รักษาความปลอดภัยของบัญชี, 
                รับผิดชอบกิจกรรมทั้งหมดภายใต้บัญชีของท่าน, และแจ้งเราทันทีหากมีการเข้าถึงโดยไม่ได้รับอนุญาต
              </p>
            </section>

            {/* Section 4 - SMS - A2P 10DLC Compliant */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">4. SMS Communications / การสื่อสารผ่าน SMS</h3>
              <div className="bg-[#f0fdf4] border border-[#22c55e]/20 rounded-xl p-4 mb-3">
                <p className="text-sm font-semibold text-[#166534] mb-2">
                  📱 By registering, you consent to receive transactional SMS messages:
                </p>
                <ul className="list-disc list-inside text-sm text-[#166534] space-y-1">
                  <li><strong>OTP Verification:</strong> One-time codes to verify your phone number</li>
                  <li><strong>Order Updates:</strong> Notifications when orders are placed, confirmed, or delivered</li>
                  <li><strong>Delivery Alerts:</strong> Driver assignment and delivery status updates</li>
                  <li><strong>Security Notices:</strong> Important account security notifications</li>
                </ul>
              </div>

              {/* CRITICAL: A2P 10DLC Required Statement */}
              <div className="bg-[#fef2f2] border-2 border-[#ef4444]/30 rounded-xl p-4 mb-3">
                <p className="text-sm text-[#991b1b] font-bold">
                  🔒 No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
                </p>
                <p className="text-sm text-[#991b1b] mt-1">
                  ข้อมูลมือถือจะไม่ถูกแบ่งปันกับบุคคลภายนอกเพื่อการตลาด
                </p>
              </div>

              <p className="text-sm leading-relaxed text-[#7a6f63] font-semibold mb-3">
                ⚠️ We DO NOT send marketing or promotional SMS. All messages are strictly transactional.
              </p>

              {/* Opt-Out Instructions */}
              <div className="bg-[#eff6ff] border border-[#3b82f6]/30 rounded-xl p-4 mb-3">
                <p className="text-sm font-bold text-[#1e40af] mb-2">📵 Opt-Out Instructions:</p>
                <ul className="text-sm text-[#1e40af] space-y-1">
                  <li><strong>STOP:</strong> Reply STOP to unsubscribe from SMS notifications</li>
                  <li><strong>HELP:</strong> Reply HELP for assistance or contact support@tapshop.me</li>
                </ul>
              </div>

              <p className="text-sm leading-relaxed text-[#7a6f63] mb-2">
                <strong>Message Frequency:</strong> Approximately 1-5 messages per transaction.
                <strong> Message and Data Rates:</strong> Standard rates may apply.
              </p>
              <p className="text-sm leading-relaxed text-[#7a6f63]">
                การลงทะเบียนถือว่าท่านยินยอมรับ SMS สำหรับ: รหัส OTP, แจ้งสถานะคำสั่งซื้อ, 
                แจ้งการจัดส่ง ตอบ STOP เพื่อยกเลิก หรือ HELP เพื่อขอความช่วยเหลือ
              </p>
            </section>

            {/* Section 5 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">5. Seller Responsibilities / ความรับผิดชอบของผู้ขาย</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63] mb-3">
                Sellers using TapShop agree to:
              </p>
              <ul className="list-disc list-inside text-sm text-[#7a6f63] mb-3 space-y-1">
                <li>Provide accurate product descriptions, images, and pricing</li>
                <li>Maintain accurate stock levels and update inventory promptly</li>
                <li>Fulfill orders within scheduled delivery timeframes</li>
                <li>Comply with all applicable Thai laws and regulations</li>
                <li>Not sell prohibited, illegal, or counterfeit goods</li>
                <li>Respond to customer inquiries in a timely manner</li>
              </ul>
              <p className="text-sm leading-relaxed text-[#7a6f63]">
                ผู้ขายที่ใช้ TapShop ตกลงที่จะ: ให้ข้อมูลสินค้าที่ถูกต้อง, รักษาสต็อกให้เป็นปัจจุบัน, 
                จัดส่งตามเวลาที่กำหนด, ปฏิบัติตามกฎหมายไทย, ไม่ขายสินค้าต้องห้ามหรือปลอม, 
                และตอบลูกค้าอย่างทันท่วงที
              </p>
            </section>

            {/* Section 6 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">6. Payment Terms / เงื่อนไขการชำระเงิน</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63] mb-3">
                TapShop supports the following payment methods:
              </p>
              <ul className="list-disc list-inside text-sm text-[#7a6f63] mb-3 space-y-1">
                <li><strong>PromptPay:</strong> Direct bank transfer via QR code</li>
                <li><strong>Cash on Delivery (COD):</strong> Payment collected upon delivery (+฿40 fee)</li>
              </ul>
              <p className="text-sm leading-relaxed text-[#7a6f63]">
                Delivery fees are calculated based on distance and are paid by the buyer. 
                Sellers receive payment directly via PromptPay or from the delivery driver for COD orders.
              </p>
              <p className="text-sm leading-relaxed text-[#7a6f63] mt-2">
                TapShop รองรับการชำระเงินผ่าน PromptPay (สแกน QR โอนเงิน) และเก็บเงินปลายทาง (เพิ่ม ฿40) 
                ค่าจัดส่งคำนวณตามระยะทางและผู้ซื้อเป็นผู้ชำระ
              </p>
            </section>

            {/* Section 7 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">7. Delivery Services / บริการจัดส่ง</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63] mb-3">
                Delivery services are provided through third-party partners (Lalamove). TapShop facilitates 
                the connection but is not directly responsible for delivery performance. Delivery is available 
                within Bangkok metropolitan area (within 30km radius).
              </p>
              <p className="text-sm leading-relaxed text-[#7a6f63]">
                บริการจัดส่งดำเนินการผ่าน Lalamove โดย TapShop เป็นตัวกลางเชื่อมต่อ 
                พื้นที่จัดส่งครอบคลุมกรุงเทพฯ และปริมณฑล (รัศมี 30 กม.)
              </p>
            </section>

            {/* Section 8 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">8. Prohibited Activities / กิจกรรมต้องห้าม</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63] mb-3">
                Users shall not:
              </p>
              <ul className="list-disc list-inside text-sm text-[#7a6f63] space-y-1">
                <li>Use the Service for illegal purposes</li>
                <li>Sell counterfeit, stolen, or prohibited goods</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt to circumvent security measures</li>
                <li>Use automated systems to access the Service</li>
                <li>Impersonate others or provide false information</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">9. Limitation of Liability / การจำกัดความรับผิด</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63]">
                TapShop and Bookd Capital, Inc. shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including but not limited to loss of profits, 
                data, business opportunities, or goodwill. Our total liability shall not exceed the fees 
                paid by you in the 12 months preceding the claim.
              </p>
              <p className="text-sm leading-relaxed text-[#7a6f63] mt-2">
                TapShop และ Bookd Capital, Inc. ไม่รับผิดต่อความเสียหายทางอ้อม ความเสียหายพิเศษ 
                หรือความเสียหายที่เป็นผลสืบเนื่อง รวมถึงการสูญเสียกำไรหรือข้อมูล
              </p>
            </section>

            {/* Section 10 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">10. Termination / การยกเลิก</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63]">
                We may suspend or terminate your account at any time for violation of these terms. 
                You may also delete your account by contacting us. Upon termination, your right to use 
                the Service will immediately cease.
              </p>
              <p className="text-sm leading-relaxed text-[#7a6f63] mt-2">
                เราอาจระงับหรือยกเลิกบัญชีของท่านหากละเมิดข้อกำหนด ท่านสามารถลบบัญชีได้โดยติดต่อเรา
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h3 className="text-lg font-bold mb-2">11. Contact Information / ข้อมูลติดต่อ</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63] mb-3">
                For questions about these Terms of Service:
              </p>
              <div className="bg-gray-50 rounded-xl p-4 text-sm text-[#7a6f63]">
                <p className="font-bold text-[#1a1a1a]">Bookd Capital, Inc.</p>
                <p>131 Continental Dr, Suite 305</p>
                <p>Newark, DE 19713, USA</p>
                <p className="mt-2">📧 Email: info@tapshop.me</p>
                <p>📞 Phone: +66 858704317</p>
                <p>🌐 Website: https://tapshop.me</p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-[#7a6f63]">
          <p>© 2026 Bookd Capital, Inc. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="/privacy" className="hover:text-[#1a1a1a] underline">Privacy Policy</Link>
            <Link href="/" className="hover:text-[#1a1a1a] underline">Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
