"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data?.error || 'Failed to send message')
      }
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Message sent successfully!')
    } catch (err: any) {
      alert(err.message || 'Something went wrong')
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zulqarnain4292@gmail.com",
      href: "mailto:zulqarnain4292@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7338676845",
      href: "tel:+917338676845",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka, India",
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#00ff88] bg-clip-text text-transparent mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Get In Touch
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] mx-auto mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
          ></div>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Ready to build the future together? As a Code Architect and Innovation Driver, I'm passionate about tackling
            complex challenges and transforming them into elegant, performant solutions. I craft scalable digital
            applications using cutting-edge technologies like AI/ML, blockchain, and cloud-native practices. Let's
            discuss how my expertise can drive real business impact for your next breakthrough project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`relative overflow-hidden rounded-3xl p-4 sm:p-8 bg-gradient-to-br from-[#00d4ff]/10 via-card/50 to-[#8b5cf6]/10 backdrop-blur-sm border border-[#00d4ff]/20 duration-700 delay-600 hover:shadow-lg transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">Let's Connect & Innovate</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="flex items-center gap-6 p-4 rounded-2xl bg-gradient-to-br from-[#00d4ff]/10 to-[#8b5cf6]/10 backdrop-blur-sm border border-[#00d4ff]/20"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-primary" size={20} />
                  </div>
                  <div className="flex items-center gap-6 flex-1 min-w-0">
                    <span className="text-sm text-muted-foreground whitespace-nowrap hidden md:block">{info.label}</span>
                    <a
                      href={info.href}
                      className="text-foreground font-medium hover:text-primary transition-colors duration-300 truncate"
                      title={info.value}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4 sm:gap-5 md:gap-6">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full hover:scale-110 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-[#00d4ff]/30 hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 text-gray-300 hover:text-[#00d4ff]"
                  onClick={() => window.open("https://github.com/zulqarnain02", "_blank")}
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full hover:scale-110 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-[#8b5cf6]/30 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 text-gray-300 hover:text-[#8b5cf6]"
                  onClick={() => window.open("https://www.linkedin.com/in/mohammed-zulqarnain/", "_blank")}
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full hover:scale-110 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-[#00ff88]/30 hover:border-[#00ff88] hover:bg-[#00ff88]/10 text-gray-300 hover:text-[#00ff88]"
                  onClick={() => window.open("mailto:zulqarnain4292@gmail.com", "_blank")}
                  rel="noopener noreferrer"
                >
                  <Mail size={20} />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card
            className={`relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-[#00d4ff]/10 via-card/50 to-[#8b5cf6]/10 backdrop-blur-sm border border-[#00d4ff]/20 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 to-[#8b5cf6]/5"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    required
                    className="transition-all duration-300 focus:scale-105 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
