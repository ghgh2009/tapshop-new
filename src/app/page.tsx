'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-dvh relative overflow-x-hidden">
      {/* Ambient Lights */}
      <div className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 top-[-150px] right-[-100px] blur-[80px] bg-[radial-gradient(circle,rgba(134,239,172,0.25)_0%,transparent_70%)] animate-[drift1_20s_ease-in-out_infinite]" />
      <div className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0 bottom-[100px] left-[-100px] blur-[80px] bg-[radial-gradient(circle,rgba(253,224,71,0.2)_0%,transparent_70%)] animate-[drift2_25s_ease-in-out_infinite]" />

      {/* Glass Bubbles */}
      <div className="bubble w-[180px] h-[180px] top-[8%] right-[5%] animate-[float1_18s_ease-in-out_infinite]" />
      <div className="bubble w-[140px] h-[140px] top-[55%] right-[3%] animate-[float2_22s_ease-in-out_infinite]" />
      <div className="bubble w-[120px] h-[120px] bottom-[15%] left-[2%] animate-[float3_20s_ease-in-out_infinite]" />
      <div className="bubble w-[80px] h-[80px] top-[25%] left-[5%] animate-[float4_16s_ease-in-out_infinite]" />
      <div className="bubble w-[70px] h-[70px] top-[40%] right-[8%] animate-[float5_19s_ease-in-out_infinite]" />
      <div className="bubble w-[60px] h-[60px] bottom-[35%] right-[6%] animate-[float6_17s_ease-in-out_infinite]" />
      <div className="bubble w-[40px] h-[40px] top-[15%] left-[12%] animate-[float1_14s_ease-in-out_infinite]" />
      <div className="bubble w-[35px] h-[35px] top-[35%] left-[8%] animate-[float2_15s_ease-in-out_infinite]" />
      <div className="bubble w-[30px] h-[30px] top-[60%] left-[6%] animate-[float3_13s_ease-in-out_infinite]" />
      <div className="bubble w-[25px] h-[25px] top-[70%] right-[12%] animate-[float4_12s_ease-in-out_infinite]" />
      <div className="bubble w-[20px] h-[20px] top-[20%] right-[15%] animate-[float5_11s_ease-in-out_infinite]" />
      <div className="bubble w-[45px] h-[45px] bottom-[25%] left-[10%] animate-[float6_16s_ease-in-out_infinite]" />
      <div className="bubble-yellow w-[18px] h-[18px] top-[30%] left-[15%] animate-[float1_10s_ease-in-out_infinite]" />
      <div className="bubble-yellow w-[15px] h-[15px] top-[50%] right-[18%] animate-[float2_9s_ease-in-out_infinite]" />
      <div className="bubble-yellow w-[12px] h-[12px] bottom-[40%] left-[18%] animate-[float3_8s_ease-in-out_infinite]" />

      {/* Container */}
      <div className="max-w-[480px] mx-auto px-5 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center py-4 animate-fadeIn">
          <Link href="/" className="text-2xl font-black tracking-tight">
            <span className="text-[#1a1a1a]">Tap</span>
            <span className="text-[#22c55e]">Shop</span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(true)}
              className="w-10 h-10 bg-white/50 backdrop-blur-xl rounded-xl flex flex-col items-center justify-center gap-1 border border-white/60 hover:bg-white/70 hover:scale-105 transition-all"
            >
              <span className="w-[18px] h-0.5 bg-[#1a1a1a] rounded-full" />
              <span className="w-[18px] h-0.5 bg-[#1a1a1a] rounded-full" />
              <span className="w-[18px] h-0.5 bg-[#1a1a1a] rounded-full" />
            </button>
          </div>
        </header>

        {/* Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-[100]">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
            <div className="absolute top-4 right-4 left-4 max-w-[480px] mx-auto">
              <div className="glass-card !rounded-3xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-extrabold text-[#1a1a1a]">
                    Tap<span className="text-[#22c55e]">Shop</span>
                  </span>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="w-10 h-10 glass-card !rounded-xl flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-2">
                  <Link
                    href="/seller/signup"
                    className="flex items-center gap-3 p-4 glass-card-inner !rounded-2xl"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-xl">🏪</span>
                    <div>
                      <p className="font-bold text-[#1a1a1a]">สร้างร้านค้า</p>
                      <p className="text-xs text-[#7a6f63]">เริ่มต้นฟรี</p>
                    </div>
                  </Link>
                  <Link
                    href="/seller/login"
                    className="flex items-center gap-3 p-4 glass-card-inner !rounded-2xl"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-xl">👤</span>
                    <div>
                      <p className="font-bold text-[#1a1a1a]">เข้าสู่ระบบ</p>
                      <p className="text-xs text-[#7a6f63]">จัดการร้านค้า</p>
                    </div>
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center gap-3 p-4 glass-card-inner !rounded-2xl"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-xl">📖</span>
                    <div>
                      <p className="font-bold text-[#1a1a1a]">ข้อมูลเพิ่มเติม</p>
                      <p className="text-xs text-[#7a6f63]">เรียนรู้เกี่ยวกับ TapShop</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hero */}
        <section className="text-center py-8 pb-10">
          <h1 className="text-[clamp(36px,10vw,48px)] font-black leading-[1.05] tracking-tight mb-4 animate-fadeInUp">
            ขายออนไลน์<br />ง่ายกว่าที่คิด
          </h1>
          <p className="text-[15px] text-[#7a6f63] leading-relaxed mb-8 animate-fadeInUp animation-delay-100">
            สร้างร้าน ใส่สินค้า แชร์ลิงก์ แค่นั้น<br />
            เราจัดการส่งของและเก็บเงินให้ทั้งหมด
          </p>
          <div className="flex flex-col gap-3 animate-fadeInUp animation-delay-200">
            <Link
              href="/seller/signup"
              className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white py-[18px] px-8 rounded-2xl text-base font-bold shadow-[0_8px_32px_rgba(26,26,26,0.25)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(26,26,26,0.35)] transition-all flex items-center justify-center gap-2"
            >
              เปิดร้านเลย <span>→</span>
            </Link>
            <Link
              href="/seller/login"
              className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-[30px] text-[#1a1a1a] py-[18px] px-8 rounded-2xl text-base font-bold border-[1.5px] border-white hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(139,115,85,0.12)] transition-all"
            >
              เข้าสู่ระบบ
            </Link>
          </div>
        </section>

        {/* Single Big Phone */}
        <section className="py-10 animate-fadeInUp animation-delay-300">
          <div className="flex justify-center perspective-[1500px] relative">
            {/* Phone Glow */}
            <div className="absolute w-[350px] h-[400px] bg-[radial-gradient(ellipse,rgba(34,197,94,0.2)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[60px] -z-10 pointer-events-none" />

            {/* iPhone */}
            <div className="w-[260px] h-[530px] sm:w-[280px] sm:h-[580px] bg-gradient-to-b from-[#1d1d1f] to-[#0a0a0a] rounded-[48px] sm:rounded-[54px] p-3 sm:p-[14px] relative shadow-[0_50px_100px_rgba(0,0,0,0.35),0_25px_50px_rgba(0,0,0,0.25),inset_0_0_0_2px_#3a3a3c] hover:-translate-y-3 hover:scale-[1.02] transition-transform duration-500">
              {/* Dynamic Island */}
              <div className="absolute top-4 sm:top-[18px] left-1/2 -translate-x-1/2 w-[100px] sm:w-[110px] h-[30px] sm:h-[34px] bg-black rounded-[18px] z-10" />

              {/* Side Button */}
              <div className="absolute -right-[3px] top-[130px] w-1 h-[60px] bg-gradient-to-b from-[#3a3a3c] to-[#2a2a2c] rounded-r" />

              {/* Screen */}
              <div className="w-full h-full rounded-[38px] sm:rounded-[42px] overflow-hidden relative bg-gradient-to-b from-[#fdfcfa] to-[#f8f6f2]">
                <div className="h-full pt-14 sm:pt-[56px] px-3 sm:px-[14px] pb-3 sm:pb-[14px]">
                  {/* Shop Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-full flex items-center justify-center text-lg sm:text-xl shadow-[0_6px_16px_rgba(236,72,153,0.3)]">
                      👗
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold">Nana Vintage</h3>
                      <div className="text-[10px] text-[#22c55e] font-semibold flex items-center gap-1">
                        ✓ ยืนยันแล้ว
                      </div>
                    </div>
                  </div>

                  {/* Shop Bio */}
                  <div className="text-[10px] sm:text-[11px] text-[#7a6f63] bg-black/[0.03] rounded-xl px-3 py-2.5 mb-3 leading-relaxed">
                    เสื้อผ้า Vintage คัดมาแล้ว ของดีราคาเบาๆ 🌿✨
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                    <div className="bg-white rounded-[14px] p-2 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                      <div className="w-full aspect-square rounded-[10px] bg-gradient-to-br from-[#fef3c7] to-[#fde68a] flex items-center justify-center text-2xl sm:text-[32px] mb-1.5 relative">
                        <span className="absolute top-1.5 left-1.5 bg-gradient-to-br from-[#ef4444] to-[#dc2626] text-white text-[7px] font-extrabold px-2 py-0.5 rounded-full">
                          HOT
                        </span>
                        👕
                      </div>
                      <p className="text-[10px] sm:text-[11px] font-semibold text-[#1a1a1a] mb-0.5">เสื้อยืด Levi&apos;s</p>
                      <p className="text-[12px] sm:text-[13px] font-extrabold text-[#1a1a1a]">฿450</p>
                    </div>
                    <div className="bg-white rounded-[14px] p-2 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                      <div className="w-full aspect-square rounded-[10px] bg-gradient-to-br from-[#fce7f3] to-[#fbcfe8] flex items-center justify-center text-2xl sm:text-[32px] mb-1.5">
                        👖
                      </div>
                      <p className="text-[10px] sm:text-[11px] font-semibold text-[#1a1a1a] mb-0.5">กางเกงยีนส์</p>
                      <p className="text-[12px] sm:text-[13px] font-extrabold text-[#1a1a1a]">฿890</p>
                    </div>
                    <div className="bg-white rounded-[14px] p-2 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                      <div className="w-full aspect-square rounded-[10px] bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe] flex items-center justify-center text-2xl sm:text-[32px] mb-1.5">
                        👗
                      </div>
                      <p className="text-[10px] sm:text-[11px] font-semibold text-[#1a1a1a] mb-0.5">เดรส 90s</p>
                      <p className="text-[12px] sm:text-[13px] font-extrabold text-[#1a1a1a]">฿650</p>
                    </div>
                    <div className="bg-white rounded-[14px] p-2 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                      <div className="w-full aspect-square rounded-[10px] bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0] flex items-center justify-center text-2xl sm:text-[32px] mb-1.5">
                        👔
                      </div>
                      <p className="text-[10px] sm:text-[11px] font-semibold text-[#1a1a1a] mb-0.5">เชิ้ตลายสก็อต</p>
                      <p className="text-[12px] sm:text-[13px] font-extrabold text-[#1a1a1a]">฿550</p>
                    </div>
                  </div>

                  {/* Cart Bar */}
                  <div className="absolute bottom-3 sm:bottom-[14px] left-3 sm:left-[14px] right-3 sm:right-[14px] bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white py-3 sm:py-[14px] px-4 sm:px-[18px] rounded-full flex justify-between items-center text-[11px] sm:text-[13px] font-bold shadow-[0_8px_24px_rgba(26,26,26,0.35)]">
                    <span>🛒 2 ชิ้น · ฿1,340</span>
                    <span>สั่งซื้อ →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Label */}
          <div className="text-center mt-6">
            <p className="text-[15px] font-bold text-[#1a1a1a]">หน้าร้านของคุณ</p>
            <p className="text-[13px] text-[#7a6f63]">ลูกค้าเห็นแบบนี้</p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12">
          <h2 className="text-[11px] font-bold uppercase tracking-[3px] text-[rgba(166,154,140,0.8)] text-center mb-6">
            วิธีใช้งาน
          </h2>
          <div className="flex flex-col gap-3">
            <div className="step-card flex items-center gap-4 bg-gradient-to-br from-white/85 to-white/65 backdrop-blur-[40px] rounded-[20px] py-[18px] px-5 border-[1.5px] border-white/95 shadow-[0_4px_24px_rgba(139,115,85,0.06)]">
              <div className="w-12 h-12 bg-gradient-to-br from-white/95 to-white/70 rounded-[14px] flex items-center justify-center text-[22px] flex-shrink-0 border border-white shadow-[0_4px_12px_rgba(139,115,85,0.06)]">
                🚀
              </div>
              <div>
                <h3 className="text-[15px] font-bold mb-0.5">สร้างร้านใน 2 นาที</h3>
                <p className="text-[12px] text-[#7a6f63] leading-relaxed">
                  ใส่ชื่อร้าน เพิ่มสินค้า พร้อมขาย<br />ไม่ต้องรู้โค้ด ไม่ต้องเซ็ตอัพอะไร
                </p>
              </div>
            </div>
            <div className="step-card flex items-center gap-4 bg-gradient-to-br from-white/85 to-white/65 backdrop-blur-[40px] rounded-[20px] py-[18px] px-5 border-[1.5px] border-white/95 shadow-[0_4px_24px_rgba(139,115,85,0.06)]">
              <div className="w-12 h-12 bg-gradient-to-br from-white/95 to-white/70 rounded-[14px] flex items-center justify-center text-[22px] flex-shrink-0 border border-white shadow-[0_4px_12px_rgba(139,115,85,0.06)]">
                🛵
              </div>
              <div>
                <h3 className="text-[15px] font-bold mb-0.5">ส่งตามเวลาที่คุณกำหนด</h3>
                <p className="text-[12px] text-[#7a6f63] leading-relaxed">
                  เราจัดการเรื่องส่งให้ทั้งหมด<br />ไม่ต้องรอรถ ไม่ต้องออกไปส่งเอง
                </p>
              </div>
            </div>
            <div className="step-card flex items-center gap-4 bg-gradient-to-br from-white/85 to-white/65 backdrop-blur-[40px] rounded-[20px] py-[18px] px-5 border-[1.5px] border-white/95 shadow-[0_4px_24px_rgba(139,115,85,0.06)]">
              <div className="w-12 h-12 bg-gradient-to-br from-white/95 to-white/70 rounded-[14px] flex items-center justify-center text-[22px] flex-shrink-0 border border-white shadow-[0_4px_12px_rgba(139,115,85,0.06)]">
                💸
              </div>
              <div>
                <h3 className="text-[15px] font-bold mb-0.5">จ่ายผ่าน PromptPay หรือ COD</h3>
                <p className="text-[12px] text-[#7a6f63] leading-relaxed">
                  ลูกค้าจ่ายค่าสินค้าผ่าน QR<br />หรือเก็บเงินปลายทางก็ได้
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-8 pb-12">
          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-[50px] rounded-3xl py-6 px-5 border-[1.5px] border-white/95 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/50 to-transparent pointer-events-none rounded-t-3xl" />
            <p className="text-base font-bold text-[#1a1a1a] mb-1.5 relative">
              เปิดร้านฟรี <span className="text-[#22c55e]">ไม่มีค่ารายเดือน</span>
            </p>
            <p className="text-[13px] text-[#7a6f63] relative">จ่ายเฉพาะค่าส่ง เมื่อมีออเดอร์</p>
          </div>
        </section>

        {/* Info Link */}
        <div className="text-center pb-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7a6f63] py-3 px-6 bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-xl border border-white/80 rounded-full hover:bg-white/80 hover:-translate-y-0.5 transition-all"
          >
            ดูข้อมูลเพิ่มเติม
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-[12px] text-[rgba(166,154,140,0.8)]">
          <p className="mb-2">
            © 2026 Bookd Capital, Inc. · TapShop
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/terms" className="text-[#7a6f63] hover:underline">
              Terms / ข้อกำหนด
            </Link>
            <span>·</span>
            <Link href="/privacy" className="text-[#7a6f63] hover:underline">
              Privacy / ความเป็นส่วนตัว
            </Link>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .bubble {
          position: fixed;
          border-radius: 50%;
          background: linear-gradient(135deg,
            rgba(255, 255, 255, 0.7) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0.1) 100%);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          pointer-events: none;
          z-index: 1;
        }
        .bubble-yellow {
          position: fixed;
          border-radius: 50%;
          background: linear-gradient(135deg,
            rgba(251, 191, 36, 0.5) 0%,
            rgba(251, 191, 36, 0.2) 100%);
          border: 1px solid rgba(251, 191, 36, 0.3);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          pointer-events: none;
          z-index: 1;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25px); } }
        @keyframes float2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-15px, -20px); } }
        @keyframes float3 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-18px); } }
        @keyframes float4 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(10px, -15px); } }
        @keyframes float5 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(20px); } }
        @keyframes float6 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-12px, -10px); } }
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 20px) scale(1.05); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, -30px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease forwards;
          opacity: 0;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  )
}
