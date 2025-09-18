"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Globe, Cpu, Users, Zap, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "#00d4ff",
    skills: [
      { name: "Java", icon: "☕" },
      { name: "JavaScript", icon: "🟨" },
      { name: "Python", icon: "🐍" },
      { name: "C++", icon: "⚡" },
      { name: "MySQL", icon: "🗄️" },
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: Globe,
    color: "#8b5cf6",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "GitHub", icon: "🐙" },
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "⚙️" },
      { name: "Postman", icon: "📮" },
    ],
  },
  {
    title: "Core Concepts",
    icon: Cpu,
    color: "#00ff88",
    skills: [
      { name: "OOP", icon: "🏗️" },
      { name: "Data Structures & Algorithms", icon: "🧮" },
      { name: "Database Management", icon: "💾" },
      { name: "Computer Networks", icon: "🌐" },
      { name: "Operating Systems", icon: "💻" },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "#ff6b35",
    skills: [
      { name: "Problem Solving", icon: "🧩" },
      { name: "Teamwork", icon: "🤝" },
      { name: "Communication", icon: "💬" },
      { name: "Decision Making", icon: "🎯" },
      { name: "Active Learning", icon: "📚" },
      { name: "Leadership", icon: "👑" },
      { name: "Adaptability", icon: "🔄" },
    ],
  },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedCategories, setAnimatedCategories] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate categories with staggered delays
          skillCategories.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedCategories((prev) => [...prev, index])
            }, index * 300)
          })
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#00ff88] bg-clip-text text-transparent mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Skills & Expertise
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
          ></div>
          
        </div>

        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.title}
                className={`transition-all duration-1000 ${animatedCategories.includes(categoryIndex) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  } box-shodow-[${category.color}20]`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="p-3 rounded-full backdrop-blur-sm border"
                    style={{
                      backgroundColor: `${category.color}20`,
                      borderColor: `${category.color}30`,
                      boxShadow: `0 0 20px ${category.color}20`,
                    }}
                  >
                    <IconComponent className="w-8 h-8" style={{ color: category.color }} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{category.title}</h3>
                  <div
                    className="flex-1 h-px bg-gradient-to-r to-transparent"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${category.color}50, transparent)`,
                    }}
                  ></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`group relative p-4 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:scale-105 hover:shadow-lg transition-all duration-500 ${animatedCategories.includes(categoryIndex)
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                        }`}
                      style={{
                        transitionDelay: `${categoryIndex * 300 + skillIndex * 100}ms`,
                      }}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <h4 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </h4>
                      </div>

                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                        style={{
                          background: `linear-gradient(135deg, ${category.color}10, ${category.color}05)`,
                          boxShadow: `0 0 20px ${category.color}20`,
                        }}
                      ></div>

                      <div
                        className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ borderColor: `${category.color}50` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00d4ff]/10 to-[#8b5cf6]/10 backdrop-blur-sm border border-[#00d4ff]/20">
            <Terminal className="w-5 h-5 text-[#00d4ff]" />
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent font-medium">
              Always Learning & Growing
            </span>
            <Zap className="w-5 h-5 text-[#00ff88]" />
          </div>
        </div>
      </div>
    </section>
  )
}
