"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Code2, Rocket, Target, Zap, Brain } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#00ff88] bg-clip-text text-transparent mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            About Me
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 backdrop-blur-sm border border-[#00d4ff]/30">
                  <Code2 className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">What I Do</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Develop modern web applications using React.js, Next.js, Node.js, Express.js, and FastAPI
                    - Design and manage databases such as MySQL, PostgreSQL, and MongoDB
                    - Work with cloud and DevOps tools like AWS, Docker, Kubernetes, and GitHub Actions (CI/CD)
                    
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-[#8b5cf6]/20 to-[#00ff88]/20 backdrop-blur-sm border border-[#8b5cf6]/30">
                  <Brain className="w-6 h-6 text-[#8b5cf6]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Contributed as an employee to real-world features: building UI components, fixing bugs, collaborating
                    in code reviews, and writing clean, readable code. Learned agile workflows and practical Git usage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-[#00ff88]/20 to-[#ff6b35]/20 backdrop-blur-sm border border-[#00ff88]/30">
                  <Zap className="w-6 h-6 text-[#00ff88]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Beyond Coding</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I enjoy exploring new technologies, collaborating in teams, and constantly challenging myself to learn and grow. Outside tech, I love reading, staying updated with the latest in technology, and spending time with family.
                    My goal is to leverage technology to build impactful solutions**, contribute to innovative projects, and grow into a versatile software engineer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative">
              <div className="relative w-full h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-[#00d4ff]/10 via-card/50 to-[#8b5cf6]/10 backdrop-blur-sm border border-[#00d4ff]/20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 to-[#8b5cf6]/5"></div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="p-[3px] rounded-full bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] mx-auto mb-4">
                      <div className="rounded-full overflow-hidden w-32 h-32 bg-background">
                        <Image
                          src="/placeholder-user.jpg"
                          alt="Your photo"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                    </div>
                    <p className="text-muted-foreground font-medium">Software Engineer</p>
                  </div>
                </div>

                {/* Floating tech elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-[#00d4ff]/20 rounded-full animate-pulse backdrop-blur-sm border border-[#00d4ff]/30"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#8b5cf6]/20 rounded-full animate-pulse delay-300 backdrop-blur-sm border border-[#8b5cf6]/30"></div>
                <div className="absolute top-1/2 left-4 w-8 h-8 bg-[#00ff88]/30 rounded-full animate-pulse delay-500 backdrop-blur-sm border border-[#00ff88]/30"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-[#00d4ff]/10 to-[#8b5cf6]/10 backdrop-blur-sm border border-[#00d4ff]/20">
                <Target className="w-8 h-8 text-[#00d4ff] mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">AI-Powered</div>
                <div className="text-sm text-muted-foreground">Smart Solutions</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-[#8b5cf6]/10 to-[#00ff88]/10 backdrop-blur-sm border border-[#8b5cf6]/20">
                <Rocket className="w-8 h-8 text-[#8b5cf6] mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">Cloud Native</div>
                <div className="text-sm text-muted-foreground">Scalable Architecture</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
