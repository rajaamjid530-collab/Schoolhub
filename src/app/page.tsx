"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      emoji: "👥",
      title: "سٹوڈنٹ مینجمنٹ",
      desc: "سٹوڈنٹس کی رجسٹریشن، حاضری اور ریکارڈ"
    },
    {
      emoji: "🏆",
      title: "ریزلٹ کارڈ",
      desc: "پروفیشنل ریزلٹ کارڈ بنائیں اور شیئر کریں"
    },
    {
      emoji: "📚",
      title: "نمبر ٹریکنگ",
      desc: "ہر سٹوڈنٹ کے نمبر اور فیصد کا ریکارڈ"
    },
    {
      emoji: "📤",
      title: "فوری شیئرنگ",
      desc: "پی ڈی ایف میں سیو کر کے سب جگہ شیئر کریں"
    },
    {
      emoji: "📱",
      title: "موبائل فرینڈلی",
      desc: "کسی بھی ڈیوائس سے استعمال کریں"
    },
    {
      emoji: "📄",
      title: "لیٹر ہیڈ",
      desc: "سکول کا اپنا لیٹر ہیڈ ڈیزائن بنائیں"
    }
  ];

  const schools = [
    { name: "سیٹ اپ 1", location: "کشمیر", emoji: "🏫" },
    { name: "سیٹ اپ 2", location: "سرینگر", emoji: "🏛️" },
    { name: "سیٹ اپ 3", location: "گلمرگ", emoji: "🏰" },
    { name: "سیٹ اپ 4", location: "پہلگام", emoji: "🏘️" },
    { name: "سیٹ اپ 5", location: "آنند وٹن", emoji: "🏛️" },
    { name: "سیٹ اپ 6", location: "لیہ", emoji: "🏫" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            کشمیر سکول ہب
          </h1>
          <div className="flex gap-4">
            <button
              onClick={() => router.push("/login")}
              className="px-6 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 transition"
            >
              سائن ان
            </button>
            <button
              onClick={() => router.push("/login")}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition font-semibold"
            >
              رجسٹر کریں
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            خوش آمدید!
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              کشمیر سکول ہب میں
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            اپنے سکول کی تمام ضروری چیزیں ایک جگہ منیج کریں۔ سٹوڈنٹس، ریزلٹ، حاضری - سب کچھ آسانی سے!
          </p>
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <button
              onClick={() => router.push("/login?signup=school")}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition font-semibold text-lg"
            >
              🏫 اپنا سکول رجسٹر کریں
            </button>
            <button
              onClick={() => router.push("/login")}
              className="px-8 py-4 rounded-lg border-2 border-cyan-400 hover:bg-cyan-400/10 transition font-semibold text-lg"
            >
              👤 لاگ ان کریں
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">
            آپ کو ملے گی یہ <span className="text-cyan-400">سہولیات</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{feature.emoji}</div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-slate-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">
            ازاد کشمیر کے <span className="text-cyan-400">سکول</span>
          </h3>
          <p className="text-slate-400 text-center mb-12 text-lg">
            مختلف شہروں سے سکول ہمارے نیٹ ورک میں شامل ہیں
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {schools.map((school, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 p-8 text-center hover:shadow-2xl"
              >
                <div className="text-6xl mb-4">{school.emoji}</div>
                <h4 className="text-xl font-bold mb-2">{school.name}</h4>
                <div className="flex items-center justify-center gap-2 text-slate-400">
                  <span>📍</span>
                  <span>{school.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-800/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            سکول رجسٹریشن کے <span className="text-cyan-400">فوائل</span>
          </h3>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/30 transition">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                ✅ <span>مکمل سٹوڈنٹ ریکارڈ</span>
              </h4>
              <p className="text-slate-400">تمام سٹوڈنٹس کی معلومات، رجسٹریشن نمبر، حاضری اور ریزلٹ ایک جگہ محفوظ رکھیں</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/30 transition">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                ✅ <span>خودکار ریزلٹ کارڈ</span>
              </h4>
              <p className="text-slate-400">نمبر ڈالیں اور خود بخود فیصد، گریڈ اور ریزلٹ کارڈ بن جائے۔ کوئی مینول کام نہیں</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/30 transition">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                ✅ <span>والدین کو خبریں</span>
              </h4>
              <p className="text-slate-400">حاضری، نتائج اور دیگر اہم معلومات والدین کو فوری پیغام میں بھیجیں</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/30 transition">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                ✅ <span>پروفیشنل لیٹرز</span>
              </h4>
              <p className="text-slate-400">سکول کے لیے خوبصورت لیٹر ہیڈ بنائیں اور آسانی سے استعمال کریں</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/30 transition">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                ✅ <span>سب جگہ شیئر کریں</span>
              </h4>
              <p className="text-slate-400">ریزلٹ کارڈ کو پی ڈی ایف میں سیو کر کے WhatsApp، ای میل یا پرنٹ کریں</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/30 transition">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                ✅ <span>مکمل طور پر محفوظ</span>
              </h4>
              <p className="text-slate-400">آپ کے تمام ڈیٹا محفوظ ہے۔ صرف آپ اور والدین دیکھ سکتے ہیں</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-cyan-500/30 rounded-2xl p-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            اپنے سکول کو آج ہی رجسٹر کریں
          </h3>
          <p className="text-lg text-slate-300 mb-8">
            مکمل طور پر مفت! کوئی خفیہ چارج نہیں۔ اپنا ڈیش بورڈ شروع کریں اور سب کچھ منیج کریں
          </p>
          <button
            onClick={() => router.push("/login?signup=school")}
            className="px-10 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition font-bold text-lg transform hover:scale-105"
          >
            ابھی رجسٹر کریں 🚀
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-950/50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2024 Kashmir School Hub - تمام حقوق محفوظ ہیں</p>
          <p className="mt-2 text-sm">اپنے سکول کو منیج کریں، اپنے سٹوڈنٹس کی ترقی میں مدد دیں</p>
        </div>
      </footer>
    </div>
  );
}
