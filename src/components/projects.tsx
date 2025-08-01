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
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Projeler</h2>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 shadow-xl border border-gray-800 hover:border-blue-600/50 transition-all duration-300"
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
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
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
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
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
                      className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium border border-blue-800"
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
