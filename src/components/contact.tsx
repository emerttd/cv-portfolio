import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-24 left-20 w-36 h-36 border border-blue-500/8 rounded-full animate-ping"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-40 right-24 w-24 h-24 border border-green-500/8 rounded-full animate-pulse"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-16 text-blue-500/10 text-5xl animate-bounce"
          style={{ animationDuration: "5s" }}
        >
          📧
        </div>
        <div
          className="absolute top-32 right-1/4 text-green-500/10 text-4xl animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          📱
        </div>
        <div
          className="absolute bottom-32 left-1/3 text-purple-500/10 text-3xl animate-bounce"
          style={{ animationDelay: "2s" }}
        >
          💼
        </div>
      </div>

      <div
        className="absolute inset-0 bg-gradient-radial from-blue-900/5 via-transparent to-purple-900/5 animate-pulse"
        style={{ animationDuration: "8s" }}
      ></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-8">İletişim</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Yeni projeler ve iş birliği fırsatları için benimle iletişime geçin.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link
            href="mailto:emerttd@gmail.com"
            className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-500 group border border-gray-700 hover:border-blue-600/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/10"
          >
            <Mail
              size={32}
              className="text-blue-400 group-hover:text-blue-300 transition-colors animate-pulse"
              style={{ animationDuration: "2s" }}
            />
            <span className="font-medium text-white">Email</span>
            <span className="text-sm text-gray-400">emerttd@gmail.com</span>
          </Link>

          <Link
            href="tel:+905393363881"
            className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-500 group border border-gray-700 hover:border-green-600/50 hover:scale-105 hover:shadow-lg hover:shadow-green-600/10"
          >
            <Phone
              size={32}
              className="text-green-400 group-hover:text-green-300 transition-colors animate-pulse"
              style={{ animationDuration: "2s", animationDelay: "0.5s" }}
            />
            <span className="font-medium text-white">Telefon</span>
            <span className="text-sm text-gray-400">(+90) 539 336 38 81</span>
          </Link>

          <Link
            href="https://github.com/emerttd"
            target="_blank"
            className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-500 group border border-gray-700 hover:border-purple-600/50 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/10"
          >
            <Github
              size={32}
              className="text-blue-400 group-hover:text-blue-300 transition-colors animate-pulse"
              style={{ animationDuration: "2s", animationDelay: "1s" }}
            />
            <span className="font-medium text-white">GitHub</span>
            <span className="text-sm text-gray-400">emerttd</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/ertu%C4%9Frul-dernekli-5b7b97268/"
            target="_blank"
            className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-500 group border border-gray-700 hover:border-blue-600/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/10"
          >
            <Linkedin
              size={32}
              className="text-blue-400 group-hover:text-blue-300 transition-colors animate-pulse"
              style={{ animationDuration: "2s", animationDelay: "1.5s" }}
            />
            <span className="font-medium text-white">LinkedIn</span>
            <span className="text-sm text-gray-400">Ertuğrul Dernekli</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-400">
          <MapPin size={20} className="animate-pulse" />
          <span>Kayseri, Türkiye</span>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-500">
          <p>&copy; 2024 Ertuğrul Mert Dernekli. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </section>
  )
}
