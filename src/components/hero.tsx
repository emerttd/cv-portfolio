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
          className="absolute inset-0 opacity-40"
          style={{
            transform: `translateY(${scrollY * -0.8}px) translateX(${scrollY * -0.3}px) rotate(${scrollY * 0.05}deg)`,
          }}
        >
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-40 right-20 w-48 h-48 bg-emerald-500/25 rounded-full blur-2xl animate-bounce-slow" />
          <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slower" />
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-float" />
          <div className="absolute top-10 right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl animate-spin-slow" />
          <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-yellow-500/15 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div
          className="absolute inset-0 opacity-15"
          style={{
            transform: `translateY(${scrollY * -0.5}px) scale(${1 + scrollY * 0.001}) rotate(${scrollY * 0.02}deg)`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/15 via-transparent to-emerald-900/15 animate-gradient-shift" />
        </div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * -0.3}px) scale(${1 + scrollY * 0.002}) rotate(${scrollY * -0.03}deg)`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-purple-900/10 via-transparent to-pink-900/10 animate-gradient-shift-reverse" />
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
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${
                i % 4 === 0
                  ? "w-3 h-3 bg-blue-400/30"
                  : i % 4 === 1
                    ? "w-2 h-2 bg-emerald-400/25"
                    : i % 4 === 2
                      ? "w-4 h-4 bg-purple-400/20"
                      : "w-1 h-1 bg-pink-400/35"
              } ${i % 3 === 0 ? "animate-float" : i % 3 === 1 ? "animate-bounce-slow" : "animate-pulse-slow"}`}
              style={{
                left: `${10 + ((i * 7) % 80)}%`,
                top: `${20 + ((i * 11) % 60)}%`,
                transform: `translateY(${scrollY * (-0.15 - i * 0.08)}px) translateX(${scrollY * (-0.03 - i * 0.015)}px) scale(${1 + scrollY * 0.0008}) rotate(${scrollY * (0.02 + i * 0.01)}deg)`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * 0.01}deg)`,
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className={`absolute border border-blue-400/20 ${
                i % 2 === 0 ? "w-16 h-16 rounded-full animate-spin-slow" : "w-12 h-12 rotate-45 animate-pulse-slower"
              }`}
              style={{
                left: `${15 + ((i * 12) % 70)}%`,
                top: `${25 + ((i * 15) % 50)}%`,
                transform: `translateY(${scrollY * (-0.1 - i * 0.05)}px) translateX(${scrollY * (0.05 + i * 0.02)}px) scale(${0.8 + scrollY * 0.0005})`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
        </div>
      </section>

      <style jsx global>{`
        @keyframes smooth-blink { 0%,100%{opacity:1} 50%{opacity:.15} }
        @keyframes pulse-slow { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.8;transform:scale(1.05)} }
        @keyframes pulse-slower { 0%,100%{opacity:.2;transform:scale(1)} 50%{opacity:.6;transform:scale(1.1)} }
        @keyframes bounce-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 33%{transform:translateY(-8px) rotate(2deg)} 66%{transform:translateY(4px) rotate(-1deg)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes gradient-shift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes gradient-shift-reverse { 0%,100%{background-position:100% 50%} 50%{background-position:0% 50%} }
        
        .animate-blink { animation: smooth-blink 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-gradient-shift { animation: gradient-shift 8s ease-in-out infinite; background-size: 200% 200%; }
        .animate-gradient-shift-reverse { animation: gradient-shift-reverse 10s ease-in-out infinite; background-size: 200% 200%; }
      `}</style>
    </>
  )
}
