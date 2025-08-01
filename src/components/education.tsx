import { Calendar, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Education() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Eğitim</h2>

        <div className="bg-gray-900 rounded-xl p-8 shadow-xl border border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">İskenderun Teknik Üniversitesi</h3>
              <p className="text-lg text-blue-400 font-semibold">Üniversite Mezunu</p>
            </div>

            <div className="flex flex-col gap-2 mt-4 md:mt-0 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span className="text-sm">25/09/2021 – 25/09/2023</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-sm">Hatay, Türkiye</span>
              </div>
            </div>
          </div>

          <Link
            href="https://iste.edu.tr/"
            target="_blank"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ExternalLink size={16} />
            <span>Üniversite Web Sitesi</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
