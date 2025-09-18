"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase, TrendingUp } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Engineer",
    company: "Babbage Insight PVT LTD",
    location: "Remote",
    period: "May 2025 - July 2025",
    description:
      "I contributed to building and maintaining applications, improving APIs, and ensuring smooth database management for reliable performance. I also supported deployment processes, handled authentication and user management, and worked on enhancing user experiences. This role helped me improve my problem-solving skills, teamwork, and adaptability while delivering meaningful results.",
    technologies: ["Next.js", "Python", "FastAPI", "Docker", "AWS", "PostgreSQL", "Clerk", "ShadCN", "GitHub CLI", "GitHub Actions"],
    achievements: [
      "Developed and maintained full-stack applications using Next.js (Frontend) and Fast API (Backend).",
      "Designed, enhanced, and managed RESTful APIs for scalable system integration.",
      "Managed and optimized PostgreSQL databases for high-performance data storage.",
      "Worked with AWS EC2 instances, Docker containers, and Clerk for authentication and user management.",
      "Integrated and customized ShadCN UI components for modern frontend design.",
      "Handled GitHub CLI, managed repositories, and implemented GitHub Actions for CI/CD workflows"
    ],
  },
  {
    title: "Research Intern",
    company: "PES University, Innovation Labs",
    location: "Bangalore, Karnataka",
    period: "March 2025 - May 2025",
    description:
      "I worked on exploring interaction design in extended reality (XR). I contributed by building interactive prototypes, experimenting with ways to improve usability and performance, and creating engaging user experiences. Along with technical work, I participated in team discussions, shared ideas, and helped with presentations and report writing. This internship allowed me to strengthen my creativity, research mindset, and ability to apply concepts in practical projects.",
    technologies: ["Unity", "C#", "XR", "Interaction Design", "Prototyping", "User Experience", "User Interface"],
    achievements: [
      "Conducted research and development in Interaction Design for Extended Reality (XR), building working prototypes using Unity for immersive experiences while learning C# scripting.",
      "Practiced Unity and C# independently by building interactive games such as 2D Monster Chase, 3D Coin Game, and 3D Endless Game to improve skills and gain hands-on experience.",
      "Developed custom plugins in C# to enhance XR applications, conducted experimentsto improve usability and performance, and contributed to team discussions, presentations, and technical report writing",
    ],
  },
]

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section id="experience" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 from-background via-muted/20"></div>
      <div
        className="morphing-bg absolute top-40 right-10 w-72 h-72 opacity-30"
        style={{ animationDelay: "-2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#00ff88] bg-clip-text text-transparent mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Work Experience
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left side - Company info */}
                <div className="lg:w-1/3 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {exp.period}
                      </Badge>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-[#8b5cf6] font-semibold">
                      <Calendar size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Details */}
                <div className="lg:w-2/3 space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">{exp.description}</p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-foreground font-semibold">
                      <TrendingUp size={18} className="text-[#00ff88]" />
                      <span>Key Achievements</span>
                    </div>
                    <div className="grid gap-3">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-br from-[#00d4ff]/10 to-[#8b5cf6]/10 backdrop-blur-sm border border-[#00d4ff]/20 hover:border-[#00d4ff]/30 transition-colors duration-300"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#00d4ff] mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-[#00d4ff]/10 border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connecting line for flow */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 lg:left-6 bottom-0 w-px h-16 bg-gradient-to-b from-border to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
