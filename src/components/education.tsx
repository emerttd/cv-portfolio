import { Calendar, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Education() {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-12 w-40 h-40 border-2 border-blue-500/5 rounded-full animate-spin"
          style={{ animationDuration: "25s" }}
        ></div>
        <div
          className="absolute bottom-32 right-16 w-28 h-28 border border-purple-500/8 rounded-lg rotate-12 animate-pulse"
          style={{ animationDuration: "5s" }}
        ></div>
        <div
          className="absolute top-1/2 right-20 text-blue-500/8 text-6xl animate-bounce"
          style={{ animationDuration: "6s" }}
        >
          🎓
        </div>
        <div
          className="absolute top-32 left-1/3 text-green-500/8 text-4xl animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          📚
        </div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px)",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Eğitim</h2>

        <div className="bg-gray-900 rounded-xl p-8 shadow-xl border border-gray-800 hover:border-blue-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10 hover:scale-[1.02]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">İskenderun Teknik Üniversitesi</h3>
              <p className="text-lg text-blue-400 font-semibold">Bilgisayar Programcılığı</p>
            </div>

            <div className="flex flex-col gap-2 mt-4 md:mt-0 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="animate-pulse" />
                <span className="text-sm">25/09/2021 – 25/09/2023</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="animate-pulse" style={{ animationDelay: "1s" }} />
                <span className="text-sm">Hatay, Türkiye</span>
              </div>
            </div>
          </div>

          <Link
            href="https://iste.edu.tr/"
            target="_blank"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-105"
          >
            <ExternalLink size={16} />
            <span>Üniversite Web Sitesi</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
