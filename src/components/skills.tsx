const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "React Native", "Tailwind CSS", "TypeScript", "Zustand"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "JWT", "RESTful APIs", "Multer", "Go"],
  },
  {
    title: "Mobile",
    skills: [ "AsyncStorage", "NativeWind", "React Native", "Expo"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub", "AWS S3", "Vercel"],
  },
]

export function Skills() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Beceriler</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-gray-700 text-gray-200 rounded-lg text-sm font-medium border border-gray-600 hover:border-blue-500 hover:text-blue-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-900/20 rounded-lg p-6 border border-blue-800">
          <h3 className="text-xl font-bold text-white mb-4">Dil Becerileri</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-200">Türkçe</span>
              <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-medium">Ana Dil</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-200">İngilizce</span>
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">B1 Seviye</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
