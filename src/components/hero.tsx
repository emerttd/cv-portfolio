'use client'

import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Profile Image */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start mb-8 lg:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded-full blur-lg"></div>
                <Image
                  src="/profile.jpg"
                  alt="Ertuğrul Mert Dernekli"
                  width={260}
                  height={260}
                  className="relative rounded-xl shadow-2xl border-4 border-blue-900/40 object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 lg:col-span-2 text-center lg:text-left">
              <p className="text-base md:text-lg text-blue-300 mb-2 tracking-wide uppercase animate-blink">Merhaba, ben</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ertuğrul Mert
                <span className="block text-blue-400">Dernekli</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-6">Full Stack Developer & Software Engineer</p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Web ve mobil projelerde uçtan uca çözümler üreten, kullanıcı deneyimi ve işlevselliği ön planda tutan bir geliştiriciyim. Yeni şeyler öğrenmeyi, farklı problemleri çözmeyi ve fikirleri gerçeğe dönüştürmeyi seviyorum. Takım içinde uyumlu çalışır, gerektiğinde inisiyatif alırım. Detaylara önem vererek, ortaya çıkan ürünün hem teknik hem de estetik açıdan tatmin edici olmasını hedeflerim.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <Link
                  href="mailto:emerttd@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail size={20} />
                  İletişim
                </Link>
                <Link
                  href="https://github.com/emerttd"
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition-colors"
                >
                  <Github size={20} />
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/ertugrul-dernekli"
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </Link>
              </div>

              <div className="text-sm text-gray-400 space-y-1">
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <Phone size={16} />
                  (+90) 539 336 38 81
                </p>
                <p>Kayseri, Türkiye • 20/07/2001</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx global>{`
        @keyframes smooth-blink { 0%,100%{opacity:1} 50%{opacity:.15} }
        .animate-blink { animation: smooth-blink 3s ease-in-out infinite; }
      `}</style>
    </>
  )
}
