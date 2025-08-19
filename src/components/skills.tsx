const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "React Native", "Tailwind CSS", "TypeScript", "Zustand"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs", "Go"],
  },
  {
    title: "Mobile",
    skills: ["AsyncStorage", "NativeWind", "React Native", "Expo"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub", "AWS S3", "Vercel"],
  },
]

export function Skills() {
  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-24 left-16 text-blue-500/10 text-4xl animate-bounce"
          style={{ animationDuration: "3s" }}
        >
          ⚛️
        </div>
        <div
          className="absolute top-40 right-20 text-green-500/10 text-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          🟢
        </div>
        <div
          className="absolute bottom-32 left-1/4 text-purple-500/10 text-2xl animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        >
          📱
        </div>
        <div
          className="absolute top-60 right-1/3 text-yellow-500/10 text-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        >
          ⚙️
        </div>
        <div
          className="absolute bottom-20 right-12 text-pink-500/10 text-2xl animate-bounce"
          style={{ animationDelay: "4s" }}
        >
          🚀
        </div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Beceriler</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-600/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-600/10"
            >
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-gray-700 text-gray-200 rounded-lg text-sm font-medium border border-gray-600 hover:border-blue-500 hover:text-blue-300 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-900/20 rounded-lg p-6 border border-blue-800 hover:border-blue-600 transition-all duration-500 hover:shadow-lg hover:shadow-blue-600/10">
          <h3 className="text-xl font-bold text-white mb-4">Dil Becerileri</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-200">Türkçe</span>
              <span
                className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-medium animate-pulse"
                style={{ animationDuration: "3s" }}
              >
                Ana Dil
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-200">İngilizce</span>
              <span
                className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium animate-pulse"
                style={{ animationDuration: "3s", animationDelay: "1s" }}
              >
                B1 Seviye
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
