"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar, Brain } from "lucide-react"

const education = [
  {
    degree: "B-Tech in Computer Science and Engineering",
    school: "PES University (RR Campus), Bengaluru",
    period: "2021 - 2025",
    description:
      "Pursuing B-Tech in Computer Science and Engineering with a focus on software development, data structures, algorithms, operating systems, and computer networks. Actively involved in projects and internships that enhanced skills in full-stack development, cloud computing, and extended reality.",
    achievements: [
      "Active in research and development projects",
      "Hands-on experience through multiple internships",
      "400+ problems solved on LeetCode",
    ],
    type: "degree",
  },
  {
    degree: "Pre-University (Science)",
    school: "Shaheen PU College, Bidar, Karnataka",
    period: "2019 - 2021",
    description:
      "Focused on Physics, Chemistry, Mathematics, and Computer Science with excellent academic performance.",
    achievements: ["Scored 94.66% overall"],
    type: "puc",
  },
  {
    degree: "High School - State Board",
    school: "Shadaan High School, Humnabad, Bidar, Karnataka",
    description:
      "Completed secondary education with consistent performance and a strong academic foundation.",
    achievements: ["Scored 88.48% in board examinations"],
    type: "school",
  },
]

const certifications = [
  {
    name: "Introduction to AI with Java",
    issuer: "Infosys Springboard",
    date: "2023",
    type: "certification",
  },
  {
    name: "Build Web App with Angular, Node.js, and Firebase",
    issuer: "PESUIO",
    date: "2023",
    type: "certification",
  },
  {
    name: "Problem Solving - Intermediate",
    issuer: "HackerRank",
    date: "2022",
    type: "certification",
  },
  {
    name: "Programming Fundamentals: Command Line Interface & OS Commands",
    issuer: "Infosys Springboard",
    date: "2022",
    type: "certification",
  },
]

export function EducationSection() {
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
    <section id="education" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#00ff88] bg-clip-text text-transparent mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Education & Certifications
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3
              className={`text-2xl font-semibold text-foreground mb-8 flex items-center gap-3 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <GraduationCap className="text-primary" size={28} />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-[#00d4ff]/10 via-card/50 to-[#8b5cf6]/10 backdrop-blur-sm border border-[#00d4ff]/20 duration-700 delay-600 hover:shadow-lg transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.school}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2 mt-2 sm:mt-0">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar size={12} />
                        {edu.period}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>

                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-2">Achievements:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement) => (
                        <Badge key={achievement} variant="outline" className="text-xs bg-gradient-to-br from-[#00d4ff]/10 to-[#8b5cf6]/10 backdrop-blur-sm border border-[#00d4ff]/20">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3
              className={`text-2xl font-semibold text-foreground mb-8 flex items-center gap-3 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <Award className="text-primary" size={28} />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className={`rounded-2xl bg-gradient-to-br from-[#00d4ff]/10 to-[#8b5cf6]/10 backdrop-blur-sm border border-[#00d4ff]/20 p-4 border-border hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {cert.date}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>

            <div
              className={`mt-8 p-6 bg-gradient-to-br from-[#00d4ff]/5 to-[#8b5cf6]/5 rounded-lg border border-[#00d4ff]/20 backdrop-blur-sm transition-all duration-700 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#00d4ff]" />
                Continuous Learning
              </h4>
              <p className="text-sm text-muted-foreground">
                I believe in continuous learning and regularly pursue certifications, workshops, and projects to stay
                updated with emerging technologies and improve my technical and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
