"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code, Terminal } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-10 md:mb-12 animate-fade-in-up">
            <Terminal className="w-8 h-8 text-[#00d4ff]" />
            <span className="text-lg font-mono bg-gradient-to-r from-[#00d4ff] to-[#00ff88] bg-clip-text text-transparent">
              Full Stack Developer
            </span>
            <Code className="w-8 h-8 text-[#8b5cf6]" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 md:mb-10 animate-fade-in-up">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#00ff88] bg-clip-text text-transparent animate-pulse">
              Mohammed Zulqarnain
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Crafting innovative digital experiences with cutting-edge technologies. Passionate about building scalable
            applications that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 justify-center items-center mb-20 md:mb-24 animate-fade-in-up animate-delay-300">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] hover:from-[#00d4ff]/90 hover:to-[#8b5cf6]/90 text-white px-10 py-4 md:px-12 md:py-5 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00d4ff]/25 rounded-full border-0"
            >
              <a href="/ZULQARNAIN_RESUME.pdf" download rel="noopener noreferrer">
                Preview Resume
                <ArrowDown className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <div className="flex gap-4 sm:gap-5 md:gap-6">
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full hover:scale-110 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-[#00d4ff]/30 hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 text-gray-300 hover:text-[#00d4ff]"
                asChild
              >
                <a href="https://github.com/zulqarnain02/" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full hover:scale-110 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-[#8b5cf6]/30 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 text-gray-300 hover:text-[#8b5cf6]"
                asChild
              >
                <a href="https://www.linkedin.com/in/mohammed-zulqarnain/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full hover:scale-110 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-[#00ff88]/30 hover:border-[#00ff88] hover:bg-[#00ff88]/10 text-gray-300 hover:text-[#00ff88]"
                asChild
              >
                <a href="mailto:zulqarnain4292@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail size={20} />
                </a>
              </Button>
            </div>
          </div>

          <div className="animate-bounce animate-delay-500 mt-8 md:mt-10">
            <div
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#00d4ff]/20 backdrop-blur-sm flex items-center justify-center mx-auto cursor-pointer hover:bg-[#00d4ff]/30 transition-colors duration-300 border border-[#00d4ff]/30"
              onClick={scrollToProjects}
            >
              <ArrowDown size={20} className="text-[#00d4ff]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
