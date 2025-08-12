import { Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Dijital Arşivleme Platformu",
    description: "Baro, avukat ve başvuru sahiplerinin süreçleri dijital olarak yönetebildiği tam entegre platform.",
    technologies: ["React.js", "Express.js", "MongoDB", "JWT", "AWS S3"],
    features: [
      "React.js ile responsive ve kullanıcı dostu arayüz",
      "Express.js + MongoDB ile RESTful API ve veri modelleri",
      "JWT ile kimlik doğrulama, rol bazlı yetkilendirme",
      "AWS S3 entegrasyonu ile dosya yükleme sistemi",
    ],
    github: "https://github.com/emrehasilik/ard_project",
  },
  {
    title: "RemoteTech - Video Tabanlı Mülakat Sistemi",
    description:
      "Şirketlerin mülakat süreçlerini yönettiği, adayların video ile katılım sağladığı çift panel yapısına sahip full-stack web uygulaması.",
    technologies: ["React.js", "Zustand", "Tailwind CSS", "Express.js", "MongoDB", "TypeScript"],
    features: [
      "React.js, Zustand ve Tailwind CSS ile kullanıcı & admin panelleri",
      "Express.js + MongoDB ile RESTful API ve veri modeli",
      "JWT ile authentication, rol bazlı erişim ve güvenliğ",
      "TypeScript destekli backend ve Vercel üzerinden tam deploy süreci",
      "AWS S3 & Multer ile video yükleme ve izleme altyapısı",
      "Dinamik soru paketleri, mülakat yönetimi ve özel linkli aday erişimi sistemlerinin implementesi",
    ],
    github: "https://github.com/emerttd/RemoteTech3",
  },
  {
    title: "Mobil Randevu Uygulaması",
    description:
      "Kullanıcıların randevu almasını, işletmelerin hizmet ve rezervasyon yönetimini sağladığı modern mobil uygulama. (Sadece frontend geliştirildi)",
    technologies: ["React Native", "Expo", "NativeWind", "Tailwind CSS", "AsyncStorage"],
    features: [
      "React Native + Expo ile kullanıcı & işletme arayüzleri",
      "NativeWind & Tailwind ile responsive UI/UX tasarımı",
      "Randevu, hizmet, işletme profili ve yorum/puanlama ekranları",
      "React Native ve AsyncStorage ile mobil uygulama akışı yönetimi",
    ],
    github: "https://github.com/kadirkattas/zivo-frontend",
  },
]

export function Projects() {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-32 left-20 w-32 h-32 border border-blue-500/10 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute bottom-40 right-16 w-24 h-24 border border-purple-500/10 rounded-lg rotate-45 animate-pulse"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-16 h-16 border border-green-500/10 rounded-full animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-20 right-1/3 w-20 h-20 border border-yellow-500/10 rounded-lg animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        ></div>
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-tr from-blue-900/3 via-purple-900/3 to-green-900/3 animate-pulse"
        style={{ animationDuration: "10s" }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Projeler</h2>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 shadow-xl border border-gray-800 hover:border-blue-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10 hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
                </div>

                <div className="flex gap-3 lg:ml-6">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <Github size={16} />
                    GitHub
                  </Link>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3">Özellikler:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-gray-300">
                      <div
                        className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse"
                        style={{ animationDelay: `${featureIndex * 0.3}s` }}
                      ></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Teknolojiler:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium border border-blue-800 hover:border-blue-600 hover:bg-blue-900/70 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
