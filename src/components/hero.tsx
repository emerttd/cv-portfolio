"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const blurAmount = Math.min(scrollY * 0.02, 8)
  const opacityAmount = Math.max(1 - scrollY * 0.002, 0.3)

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-black px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * -0.8}px) translateX(${scrollY * -0.3}px)`,
          }}
        >
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl" />
          <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-pink-500/15 rounded-full blur-xl" />
        </div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * -0.5}px) scale(${1 + scrollY * 0.001}) rotate(${scrollY * 0.02}deg)`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-transparent to-emerald-900/10" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 items-start">
            {/* Profile Image */}
            <div
              className="order-2 lg:order-1 lg:col-span-1 lg:pt-2 flex justify-center lg:justify-start"
              style={{
                transform: `translateY(${scrollY * -0.6}px) translateX(${scrollY * -0.4}px) rotate(${scrollY * -0.03}deg)`,
                filter: `blur(${blurAmount}px)`,
                opacity: opacityAmount,
              }}
            >
              <div className="group relative w-[260px] aspect-[4/5] sm:w-[300px] lg:w-full lg:max-w-[360px] lg:aspect-[4/5]">
                <div
                  className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-blue-500/60 to-emerald-500/50 blur-3xl group-hover:blur-[50px] animate-blink transition-all duration-500"
                  style={{
                    transform: `translateY(${scrollY * 0.5}px) translateX(${scrollY * -0.3}px) rotate(${scrollY * -0.08}deg) scale(${1 + scrollY * 0.002})`,
                  }}
                />

                <div
                  className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.7)] bg-zinc-900/40"
                  style={{
                    transform: `translateY(${scrollY * 0.2}px) translateX(${scrollY * 0.1}px)`,
                  }}
                >
                  <Image
                    src="/profile.jpg"
                    alt="Ertuğrul Mert Dernekli"
                    fill
                    sizes="(min-width:1024px) 360px, (min-width:640px) 300px, 260px"
                    className="object-cover object-[50%_25%]"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className="order-1 lg:order-2 lg:col-span-2 text-center lg:text-left"
              style={{
                transform: `translateY(${scrollY * 0.4}px) translateX(${scrollY * 0.3}px)`,
                filter: `blur(${blurAmount * 0.8}px)`,
                opacity: opacityAmount,
              }}
            >
              <p
                className="text-base md:text-lg text-blue-300 mb-2 tracking-wide uppercase animate-blink"
                style={{
                  transform: `translateY(${scrollY * -0.3}px) translateX(${scrollY * 0.2}px)`,
                }}
              >
                Merhaba, ben
              </p>
              <h1
                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                style={{
                  transform: `translateY(${scrollY * 0.2}px) translateX(${scrollY * 0.4}px) rotate(${scrollY * 0.01}deg)`,
                }}
              >
                Ertuğrul Mert
                <span
                  className="block text-blue-400"
                  style={{
                    transform: `translateX(${scrollY * 0.6}px) translateY(${scrollY * 0.1}px)`,
                  }}
                >
                  Dernekli
                </span>
              </h1>
              <p
                className="text-xl md:text-2xl text-blue-200 mb-6"
                style={{
                  transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.25}px)`,
                }}
              >
                Full Stack Developer & Software Engineer
              </p>
              <p
                className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl lg:max-w-2xl"
                style={{
                  transform: `translateY(${scrollY * 0.15}px) translateX(${scrollY * 0.1}px)`,
                }}
              >
                <span className="block md:hidden">
                  Web ve mobil projelerde uçtan uca çözümler üreten bir geliştiriciyim. Yeni teknolojiler öğrenmeyi ve
                  farklı problemleri çözmeyi seviyorum.
                </span>
                <span className="hidden md:block">
                  Web ve mobil projelerde uçtan uca çözümler üreten, kullanıcı deneyimi ve işlevselliği ön planda tutan
                  bir geliştiriciyim. Yeni şeyler öğrenmeyi, farklı problemleri çözmeyi ve fikirleri gerçeğe
                  dönüştürmeyi seviyorum. Takım içinde uyumlu çalışır, gerektiğinde inisiyatif alırım. Detaylara önem
                  vererek, ortaya çıkan ürünün hem teknik hem de estetik açıdan tatmin edici olmasını hedeflerim.
                </span>
              </p>
              <div
                className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8"
                style={{
                  transform: `translateY(${scrollY * 0.5}px) translateX(${scrollY * 0.2}px) scale(${1 - scrollY * 0.0008})`,
                }}
              >
                <Link
                  href="mailto:emerttd@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                  İletişim
                </Link>
                <Link
                  href="https://github.com/emerttd"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition-colors text-sm sm:text-base"
                >
                  <Github size={18} className="sm:w-5 sm:h-5" />
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ertu%C4%9Frul-dernekli-5b7b97268/"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition-colors text-sm sm:text-base"
                >
                  <Linkedin size={18} className="sm:w-5 sm:h-5" />
                  LinkedIn
                </Link>
              </div>

              <div
                className="text-xs sm:text-sm text-gray-400 space-y-1"
                style={{
                  transform: `translateY(${scrollY * 0.4}px) translateX(${scrollY * 0.15}px)`,
                }}
              >
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <Phone size={14} className="sm:w-4 sm:h-4" />
                  (+90) 539 336 38 81
                </p>
                <p>Kayseri, Türkiye • 20/07/2001</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            filter: `blur(${blurAmount * 0.5}px)`,
            opacity: opacityAmount,
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                transform: `translateY(${scrollY * (-0.2 - i * 0.1)}px) translateX(${scrollY * (-0.05 - i * 0.02)}px) scale(${1 + scrollY * 0.001})`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </section>
      <style jsx global>{`
        @keyframes smooth-blink { 0%,100%{opacity:1} 50%{opacity:.15} }
        .animate-blink { animation: smooth-blink 3s ease-in-out infinite; }
      `}</style>
    </>
  )
}
