import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-green-500/30 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-500/20 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-60 right-1/3 w-1 h-1 bg-yellow-500/25 rounded-full animate-bounce"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-2 h-2 bg-pink-500/20 rounded-full animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5 animate-pulse"
        style={{ animationDuration: "8s" }}
      ></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">İş Deneyimi</h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-600"></div>

          <div className="relative pl-12">
            <div className="absolute left-0 top-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-600/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-600/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Full Stack Geliştirici</h3>
                <div className="flex items-center gap-4 text-gray-300 mt-2 md:mt-0">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span className="text-sm">20/05/2025 – 20/06/2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span className="text-sm">Freelance</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Yönetici ve çalışan rolleri için yetkilendirme destekli, sipariş ve kullanıcı yönetimi sunan full-stack
                web uygulaması geliştirdim.
              </p>

              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                  <span>React & Node.js ile uçtan uca (full-stack) geliştirme</span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <span>JWT ile kimlik doğrulama, rol bazlı yetkilendirme sistemi</span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse"
                    style={{ animationDelay: "2s" }}
                  ></div>
                  <span>Mobil uyumlu, modern ve erişilebilir arayüz tasarımı</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
