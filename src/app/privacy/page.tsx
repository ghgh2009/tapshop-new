'use client'

import Link from 'next/link'

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-black text-[#1a1a1a] mb-2">Privacy Policy</h1>
          <h2 className="text-xl font-bold text-[#22c55e] mb-4">นโยบายความเป็นส่วนตัว</h2>
          <p className="text-sm text-[#7a6f63] mb-8">
            Effective Date / วันที่มีผลบังคับใช้: January 30, 2026 / 30 มกราคม 2569
          </p>

          <div className="space-y-8 text-[#1a1a1a]">
            {/* Section 1 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">1. Introduction / บทนำ</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63] mb-3">
                TapShop, operated by Bookd Capital, Inc. (a Delaware Corporation), is committed to 
                protecting your privacy. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our marketplace platform.
              </p>
              <p className="text-sm leading-relaxed text-[#7a6f63]">
                TapShop ดำเนินการโดย Bookd Capital, Inc. (บริษัทจดทะเบียนในรัฐเดลาแวร์) 
                มุ่งมั่นปกป้องความเป็นส่วนตัวของท่าน นโยบายนี้อธิบายวิธีที่เราเก็บรวบรวม ใช้ 
                เปิดเผย และปกป้องข้อมูลของท่านเมื่อใช้แพลตฟอร์มของเรา
              </p>
            </section>

            {/* Section 2 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">2. Information We Collect / ข้อมูลที่เราเก็บรวบรวม</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63] mb-3">
                We collect information you provide directly to us:
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-sm mb-2">📱 Phone Number / เบอร์โทรศัพท์</p>
                  <p className="text-sm text-[#7a6f63]">
                    Used for account verification via OTP (One-Time Password) and transactional SMS notifications.
                    <br />ใช้สำหรับยืนยันตัวตนผ่าน OTP และแจ้งเตือนคำสั่งซื้อ
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-sm mb-2">🏪 Shop Information / ข้อมูลร้านค้า (Sellers)</p>
                  <p className="text-sm text-[#7a6f63]">
                    Shop name, pickup address, GPS coordinates, PromptPay ID, and business details.
                    <br />ชื่อร้าน ที่อยู่รับสินค้า พิกัด GPS PromptPay และรายละเอียดธุรกิจ
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-sm mb-2">📦 Product Information / ข้อมูลสินค้า</p>
                  <p className="text-sm text-[#7a6f63]">
                    Product names, descriptions, prices, images, and stock levels uploaded by sellers.
                    <br />ชื่อสินค้า รายละเอียด ราคา รูปภาพ และจำนวนสต็อกที่ผู้ขายอัพโหลด
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-sm mb-2">📍 Delivery Information / ข้อมูลการจัดส่ง (Buyers)</p>
                  <p className="text-sm text-[#7a6f63]">
                    Customer name, delivery address, GPS location, and contact phone number.
                    <br />ชื่อลูกค้า ที่อยู่จัดส่ง ตำแหน่ง GPS และเบอร์โทรติดต่อ
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">3. How We Use Your Information / วิธีการใช้ข้อมูล</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63] mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-sm text-[#7a6f63] space-y-2">
                <li><strong>Verify Identity:</strong> Send OTP codes via SMS to confirm phone numbers / ส่งรหัส OTP ยืนยันเบอร์โทร</li>
                <li><strong>Process Orders:</strong> Facilitate transactions between buyers and sellers / ประมวลผลคำสั่งซื้อ</li>
                <li><strong>Arrange Deliveries:</strong> Share necessary details with delivery partners / จัดการจัดส่งกับพาร์ทเนอร์</li>
                <li><strong>Send Notifications:</strong> Order confirmations, delivery updates, alerts / แจ้งเตือนคำสั่งซื้อและจัดส่ง</li>
                <li><strong>Provide Support:</strong> Respond to inquiries and resolve issues / ให้บริการลูกค้า</li>
                <li><strong>Improve Services:</strong> Analyze usage to enhance platform features / ปรับปรุงบริการ</li>
              </ul>
            </section>

            {/* Section 4 - SMS Critical Section - A2P 10DLC Compliant */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">4. SMS Communications / การสื่อสารผ่าน SMS</h3>
              
              <div className="bg-[#f0fdf4] border-2 border-[#22c55e]/30 rounded-xl p-5 mb-4">
                <p className="font-bold text-[#166534] mb-3 flex items-center gap-2">
                  📱 SMS Opt-In Consent / การยินยอมรับ SMS
                </p>
                <p className="text-sm text-[#166534] mb-3">
                  By creating an account on TapShop, you explicitly consent to receive the following 
                  transactional SMS messages to the phone number you provide:
                </p>
                <ul className="list-none text-sm text-[#166534] space-y-2">
                  <li className="flex items-start gap-2">
                    <span>✅</span>
                    <span><strong>Account Verification:</strong> One-time password (OTP) codes to verify your phone number during sign-up and login</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✅</span>
                    <span><strong>Order Notifications:</strong> Updates when orders are placed, confirmed, picked up, and delivered</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✅</span>
                    <span><strong>Delivery Alerts:</strong> Driver assignment notifications and real-time delivery status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✅</span>
                    <span><strong>Security Alerts:</strong> Important notifications regarding account security</span>
                  </li>
                </ul>
              </div>

              {/* CRITICAL: A2P 10DLC Required Statement */}
              <div className="bg-[#fef2f2] border-2 border-[#ef4444]/30 rounded-xl p-5 mb-4">
                <p className="font-bold text-[#991b1b] flex items-center gap-2 mb-2">
                  🔒 Mobile Information Privacy / ความเป็นส่วนตัวของข้อมูลมือถือ
                </p>
                <p className="text-sm text-[#991b1b] font-semibold">
                  No mobile information will be shared with third parties or affiliates for marketing 
                  or promotional purposes.
                </p>
                <p className="text-sm text-[#991b1b] mt-2">
                  ข้อมูลมือถือจะไม่ถูกแบ่งปันกับบุคคลภายนอกหรือบริษัทในเครือเพื่อวัตถุประสงค์ทางการตลาดหรือส่งเสริมการขาย
                </p>
              </div>

              <div className="bg-[#fef3c7] border border-[#f59e0b]/30 rounded-xl p-4 mb-4">
                <p className="font-bold text-[#92400e] flex items-center gap-2">
                  ⚠️ No Marketing SMS / ไม่มี SMS โฆษณา
                </p>
                <p className="text-sm text-[#92400e] mt-2">
                  We DO NOT send promotional, marketing, or advertising SMS messages. 
                  All SMS communications are strictly transactional and service-related.
                </p>
                <p className="text-sm text-[#92400e] mt-2">
                  เราไม่ส่ง SMS โฆษณาหรือส่งเสริมการขาย ข้อความทั้งหมดเป็นข้อความเชิงธุรกรรมเท่านั้น
                </p>
              </div>

              {/* Sample Messages */}
              <div className="bg-gray-50 rounded-xl p-5 mb-4">
                <p className="font-bold text-[#1a1a1a] mb-3">📝 Sample Messages / ตัวอย่างข้อความ</p>
                <div className="space-y-3 text-sm">
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <p className="text-xs text-[#7a6f63] mb-1">OTP Verification:</p>
                    <p className="font-mono text-[#1a1a1a]">&quot;TapShop: Your verification code is 123456. Do not share this code with anyone.&quot;</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <p className="text-xs text-[#7a6f63] mb-1">Order Update:</p>
                    <p className="font-mono text-[#1a1a1a]">&quot;TapShop: Your order #TPS-240204-0001 has been confirmed and is being prepared for delivery.&quot;</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <p className="text-xs text-[#7a6f63] mb-1">Delivery Alert:</p>
                    <p className="font-mono text-[#1a1a1a]">&quot;TapShop: Your order is out for delivery! Driver will arrive in approximately 30 minutes.&quot;</p>
                  </div>
                </div>
              </div>

              {/* Opt-Out Instructions - A2P 10DLC Required */}
              <div className="bg-[#eff6ff] border border-[#3b82f6]/30 rounded-xl p-5 mb-4">
                <p className="font-bold text-[#1e40af] mb-2">📵 How to Opt-Out / วิธียกเลิกการรับ SMS</p>
                <ul className="text-sm text-[#1e40af] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">STOP:</span>
                    <span>Reply STOP to any message to unsubscribe from all SMS notifications.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">HELP:</span>
                    <span>Reply HELP to any message for assistance or contact support@tapshop.me</span>
                  </li>
                </ul>
                <p className="text-sm text-[#1e40af] mt-3">
                  ตอบ STOP เพื่อยกเลิกการรับ SMS ทั้งหมด หรือตอบ HELP เพื่อขอความช่วยเหลือ
                </p>
              </div>

              <div className="text-sm text-[#7a6f63] space-y-2">
                <p>
                  <strong>Message Frequency:</strong> You will receive SMS only when triggered by your actions 
                  (signing up, placing orders) or when there are updates to your orders. Approximately 1-5 messages per transaction.
                </p>
                <p>
                  <strong>Message and Data Rates:</strong> Standard message and data rates may apply. 
                  Contact your carrier for details about your plan.
                </p>
                <p>
                  <strong>ความถี่ของข้อความ:</strong> ท่านจะได้รับ SMS เฉพาะเมื่อมีการดำเนินการ เช่น ลงทะเบียน สั่งซื้อ 
                  หรือเมื่อมีการอัพเดทคำสั่งซื้อ ประมาณ 1-5 ข้อความต่อธุรกรรม อาจมีค่าบริการ SMS ตามปกติ
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">5. Data Sharing / การแบ่งปันข้อมูล</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63] mb-3">
                We may share your information with the following trusted third parties:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-[#7a6f63]">
                  <span className="bg-gray-100 px-2 py-1 rounded font-mono text-xs">Twilio</span>
                  <span>SMS service provider for OTP verification and order notifications</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#7a6f63]">
                  <span className="bg-gray-100 px-2 py-1 rounded font-mono text-xs">Lalamove</span>
                  <span>Delivery partner - receives pickup/dropoff addresses and contact numbers</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#7a6f63]">
                  <span className="bg-gray-100 px-2 py-1 rounded font-mono text-xs">Supabase</span>
                  <span>Secure cloud database for storing account and order data</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#7a6f63]">
                  <span className="bg-gray-100 px-2 py-1 rounded font-mono text-xs">Firebase</span>
                  <span>Phone authentication service by Google</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#7a6f63] mt-3">
                เราแบ่งปันข้อมูลกับพาร์ทเนอร์ที่เชื่อถือได้: Twilio (SMS), Lalamove (จัดส่ง), 
                Supabase (ฐานข้อมูล), Firebase (ยืนยันตัวตน)
              </p>
            </section>

            {/* Section 6 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">6. Data Security / ความปลอดภัยของข้อมูล</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63] mb-3">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-sm text-[#7a6f63] space-y-1">
                <li>HTTPS encryption for all data transmission</li>
                <li>Secure authentication with Firebase Phone Auth</li>
                <li>Row Level Security (RLS) on database</li>
                <li>Regular security audits and updates</li>
              </ul>
              <p className="text-sm leading-relaxed text-[#7a6f63] mt-3">
                เราใช้มาตรการรักษาความปลอดภัยมาตรฐานอุตสาหกรรม: การเข้ารหัส HTTPS, Firebase Auth, 
                Row Level Security และการตรวจสอบความปลอดภัยอย่างสม่ำเสมอ
              </p>
            </section>

            {/* Section 7 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">7. Data Retention / การเก็บรักษาข้อมูล</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63]">
                We retain your personal information for as long as your account is active or as needed 
                to provide services. Order history is retained for 2 years for business records. 
                You may request deletion of your account and associated data at any time.
              </p>
              <p className="text-sm leading-relaxed text-[#7a6f63] mt-2">
                เราเก็บข้อมูลตราบเท่าที่บัญชียังใช้งานอยู่ ประวัติคำสั่งซื้อเก็บไว้ 2 ปี 
                ท่านสามารถขอลบบัญชีและข้อมูลได้ทุกเมื่อ
              </p>
            </section>

            {/* Section 8 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">8. Your Rights / สิทธิ์ของท่าน</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63] mb-3">
                You have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-sm text-[#7a6f63] space-y-1">
                <li><strong>Access:</strong> Request a copy of your personal data / ขอสำเนาข้อมูลส่วนตัว</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data / ขอแก้ไขข้อมูลที่ไม่ถูกต้อง</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data / ขอลบบัญชีและข้อมูล</li>
                <li><strong>Portability:</strong> Request export of your data / ขอส่งออกข้อมูล</li>
              </ul>
              <p className="text-sm leading-relaxed text-[#7a6f63] mt-3">
                To exercise these rights, contact us at info@tapshop.me
              </p>
            </section>

            {/* Section 9 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">9. Cookies and Tracking / คุกกี้และการติดตาม</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63]">
                We use essential cookies for session management and cart functionality. 
                We do not use advertising cookies or third-party tracking for marketing purposes.
              </p>
              <p className="text-sm leading-relaxed text-[#7a6f63] mt-2">
                เราใช้คุกกี้ที่จำเป็นสำหรับเซสชันและตะกร้าสินค้า เราไม่ใช้คุกกี้โฆษณาหรือติดตามเพื่อการตลาด
              </p>
            </section>

            {/* Section 10 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">10. Children&apos;s Privacy / ความเป็นส่วนตัวของเด็ก</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63]">
                TapShop is not intended for use by individuals under the age of 18. We do not knowingly 
                collect personal information from children.
              </p>
              <p className="text-sm leading-relaxed text-[#7a6f63] mt-2">
                TapShop ไม่ได้มีไว้สำหรับผู้ที่อายุต่ำกว่า 18 ปี เราไม่เก็บข้อมูลจากเด็กโดยเจตนา
              </p>
            </section>

            {/* Section 11 */}
            <section className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold mb-2">11. Changes to This Policy / การเปลี่ยนแปลงนโยบาย</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63]">
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new policy on this page and updating the effective date.
              </p>
              <p className="text-sm leading-relaxed text-[#7a6f63] mt-2">
                เราอาจอัพเดทนโยบายนี้เป็นครั้งคราว โดยจะแจ้งให้ทราบผ่านหน้านี้และอัพเดทวันที่มีผลบังคับใช้
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h3 className="text-lg font-bold mb-2">12. Contact Us / ติดต่อเรา</h3>
              <p className="text-sm leading-relaxed text-[#7a6f63] mb-3">
                For questions about this Privacy Policy or to exercise your data rights:
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
            <Link href="/terms" className="hover:text-[#1a1a1a] underline">Terms of Service</Link>
            <Link href="/" className="hover:text-[#1a1a1a] underline">Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
