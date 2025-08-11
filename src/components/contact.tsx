import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">İletişim</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Yeni projeler ve iş birliği fırsatları için benimle iletişime geçin.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link
            href="mailto:emerttd@gmail.com"
            className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group border border-gray-700"
          >
            <Mail size={32} className="text-blue-400 group-hover:text-blue-300" />
            <span className="font-medium text-white">Email</span>
            <span className="text-sm text-gray-400">emerttd@gmail.com</span>
          </Link>

          <Link
            href="tel:+905393363881"
            className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group border border-gray-700"
          >
            <Phone size={32} className="text-green-400 group-hover:text-green-300" />
            <span className="font-medium text-white">Telefon</span>
            <span className="text-sm text-gray-400">(+90) 539 336 38 81</span>
          </Link>

          <Link
            href="https://github.com/emerttd"
            target="_blank"
            className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group border border-gray-700"
          >
            <Github size={32} className="text-blue-400 group-hover:text-blue-300" />
            <span className="font-medium text-white">GitHub</span>
            <span className="text-sm text-gray-400">emerttd</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/ertu%C4%9Frul-dernekli-5b7b97268/"
            target="_blank"
            className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group border border-gray-700"
          >
            <Linkedin size={32} className="text-blue-400 group-hover:text-blue-300" />
            <span className="font-medium text-white">LinkedIn</span>
            <span className="text-sm text-gray-400">Ertuğrul Dernekli</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-400">
          <MapPin size={20} />
          <span>Kayseri, Türkiye</span>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-500">
          <p>&copy; 2024 Ertuğrul Mert Dernekli. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </section>
  )
}
