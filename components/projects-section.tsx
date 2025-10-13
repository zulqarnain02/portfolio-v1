"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "FocusLearn",
    description:
      "Focus Learn is a personalized learning platform designed to help students minimize distractions and stay focused while studying. The platform enables real-time progress tracking, ensuring learners can monitor their journey effectively. It features a built-in rich text editor that allows users to create and download chapter-specific notes for offline reference. Additionally, Focus Learn promotes collaborative learning by allowing users to explore and fork public learning journeys, tailoring them to their own preferences. The platform delivers a seamless and interactive learning experience.",
    image: "/focusLearn.png",
    technologies: ["React.js", "Node.js", "MySQL", "YouTube API", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://focuslearn-frontend.onrender.com",
    githubUrl: "https://github.com/zulqarnain02/focusLearn",
  },
  {
    title: "Fi-Money Inventory Management System",
    description:
      "Inventory Management System is a full-stack application that helps businesses efficiently track and manage their products. It includes secure user authentication with JWT, and supports adding, updating, viewing, and deleting products with details like SKU, type, description, and images. Built with Node.js (Express) and PostgreSQL on the backend using a Controller-Route-Service architecture, and Next.js, TypeScript, Tailwind CSS, and shadcn/ui on the frontend, the system offers a responsive, intuitive interface along with fast product search by name, SKU, or type.",
    image: "/fiMoney.png",
    technologies: ["Next.js","TypeScript","Tailwind CSS","shadcn/ui","Node.js","Express.js","PostgreSQL","JWT","bcryptjs"],
    liveUrl: "https://fi-inventories-dashboard.onrender.com",
    githubUrl: "https://github.com/zulqarnain02/FI-INVENTORIES-MANAGEMENT",
  },
  {
    title: "Portfolio Website",
    description:
      "This is a portfolio website built with Next.js, Tailwind CSS, and shadcn/ui. It includes a home page, about me page, skills page, experience page, projects page, and contact page. It also includes a blog page that is built with Markdown and is hosted on GitHub Pages.",
    image: "/portfolio.png",
    technologies: ["Next.js","TypeScript","Tailwind CSS","shadcn/ui","nodeMailer"],
    liveUrl: "https://zulqarnain-portfolio-v1.vercel.app/",
    githubUrl: "https://github.com/zulqarnain02/portfolio-v1",
  },
  {
    title: "HealLink - Doctor Appointment Booking",
    description:
      "This is a web application that streamlines the process of booking doctor consultations and managing patient-doctor interactions. It provides secure authentication for patients and doctors, detailed doctor profiles with specialization, fees, and availability, and quick appointment booking. Patients can track their transaction history, while doctors can manage time slots, approve or reject appointments, and update their profiles. The platform ensures a smooth and efficient healthcare booking experience.",
    image: "/healLink.png",
    technologies: ["React.js","Tailwind CSS","Node.js","Express.js","MongoDB","Mongoose","JWT"],
    liveUrl: "https://heallink.onrender.com",
    githubUrl: "https://github.com/zulqarnain02/HealLink---Doctor-Appointment-Booking",
  },
  {
    title: "PDFtoXML Converter",
    description:
      "This is a full-stack PDF to XML Converter application that enables users to seamlessly convert PDF documents into well-structured XML format. It offers a modern React + Vite frontend with a clean and intuitive UI for uploading and managing files, along with real-time conversion tracking. The backend, built with Node.js and Express, handles secure file upload, processing, storage, and integration with the PDF.co API for reliable and accurate conversions. Additional features include user authentication, email verification, password reset, conversion history tracking, and export functionality. The system ensures secure, accurate, and user-friendly document conversion, making it suitable for various PDF formats and layouts.",
    image: "/PDFtoXML.png",
    technologies: ["React.js","Vite","Tailwind CSS","Lucide React","Node.js","Express.js","MongoDB","Mongoose","JWT","PDF.co API"],
    liveUrl: "https://pdftoxml-app.onrender.com",
    githubUrl: "https://github.com/zulqarnain02/PDFtoXML",
  },
  {
    title: "Credential-issue Engine",
    description:
      "This is a full-stack web application designed to issue digital credentials. The system takes a JSON payload, checks if a credential with the same content has already been issued, and returns a unique credential ID upon successful issuance. The project is a monorepo containing  two main packages: backend-ts, a Node.js and Express backend server, and frontend, a React and Vite frontend application. The backend is fully containerized using Docker, deployed and running on an AWS EC2 instance for easy deployment and scalability. It is also configured to run over HTTPS to encrypt data in transit. The frontend is a single-page application that provides the user interface for submitting credential data and displaying the results, communicating with the backend via REST API calls.",
    image: "/credential-issue.png",
    technologies: ["React","TypeScript","Vite","Tailwind CSS","shadcn/ui","React Router","Node.js","Express.js","MongoDB","Mongoose","Docker","AWS EC2"],
    liveUrl: "https://kube-credential-issue.onrender.com/",
    githubUrl: "https://github.com/zulqarnain02/Kube-credential-issue",
  },

  {
    title: "Credential-verify Engine",
    description:
      "The Kube-Credential-Verify project is a full-stack web application designed to validate the authenticity of digital credentials. The system features a modern frontend built with React, where users can submit a credential in JSON format. The TypeScript-based Node.js backend receives this credential, canonicalizes the JSON to create a stable representation, and then hashes it to generate a unique, deterministic ID. This ID is checked against a MongoDB database to determine if the credential has been previously issued. The application is fully containerized with Docker, ensuring a consistent and portable environment for both development and deployment. The backend also supports HTTPS to secure data in transit.",
    image: "/credential-verify.png",
    technologies: ["React","TypeScript","Vite","Tailwind CSS","shadcn/ui","React Router","Node.js","Express.js","MongoDB","Mongoose","Docker","AWS EC2"],
    liveUrl: "https://kube-credential-verify.onrender.com/",
    githubUrl: "https://github.com/zulqarnain02/Kube-credential-verify",
  },

  {
    title: "Crypto Dashboard",
    description:
      "This is a Crypto Dashboard application that provides users with an interactive and secure platform to monitor cryptocurrency data. It showcases the top 10 cryptocurrencies by market cap with real-time price updates, along with detailed information for each coin. Users can set custom price alerts and receive notifications via email, ensuring they never miss key market movements. The system includes secure authentication with JWT, along with a password recovery feature for user convenience. With its clean React + Tailwind UI and robust Node.js + Express backend, the platform delivers a reliable and user-friendly experience for crypto tracking and management.",
    image: "/crypto.png",
    technologies:["React.js","Tailwind CSS","Node.js","Express.js","MongoDB","JWT","Nodemailer"],
    liveUrl: "#",
    githubUrl: "https://github.com/zulqarnain02/Crypto-Dashboard",
  },
  {
    title: "Task Management System",
    description:
      "This is a Task Management System built with Django that helps users efficiently create, assign, and track tasks. It supports task creation with descriptions, assignment to users, due date tracking, and status updates for better workflow management. The application includes secure user authentication using Django’s built-in system and is designed with a responsive interface to ensure smooth usability across devices. With its simple yet powerful features, it provides an organized way to manage tasks and improve productivity.",
    image: "/task.png",
    technologies: ["Django 5.0.6","MySQL","HTML","CSS","JavaScript","Django Authentication"],
    liveUrl: "#",
    githubUrl: "https://github.com/zulqarnain02/TaskManagement",
  },

  {
    title: "Loan Management System",
    description:
      "This is a Loan Management System designed to simplify and streamline loan application, tracking, and repayment processes. It supports multiple loan categories such as personal, micro, business, home, and education loans. Users can view loan details including customer info, loan amount, credit score, and lender eligibility. The system features EMI calculation and management, allowing users to track pending and paid installments, along with full payment history. Additional features include an application form, status tracking, and credit score integration. With an intuitive interface and robust backend, it provides a complete solution for efficient loan management.",
    image: "/loan.png",
    technologies: ["Django","HTML","CSS","JavaScript","MySQL","mysqlclient"],
    liveUrl: "",
    githubUrl: "https://github.com/zulqarnain02/Loan-Management-System",
  },
  {
    title: "DHCP Client-server",
    description:
      "This project implements a DHCP (Dynamic Host Configuration Protocol) system using Node.js, featuring both a client and server. The client sends Discover requests to obtain IP leases, while the server assigns IPs dynamically or statically based on MAC addresses. It supports configurable network settings (subnet mask, DNS, router, broadcast) and lease management with renewal and rebinding times. With event hooks for Discover, Request, and Release, it provides a customizable setup for simulating or testing DHCP environments.",
    image: "",
    technologies: ["Node.js","Express.js (optional for API endpoints if extended)","dhcp (Node.js DHCP library)","JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/zulqarnain02/DHCP-Client-server",
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("all")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Reveal once, then stop observing to avoid flicker
          obs.unobserve(entry.target)
        }
      },
      {
        // Trigger as soon as any part is visible, with a slight bottom margin
        threshold: 0,
        rootMargin: "0px 0px -10% 0px",
      },
    )

    observer.observe(element)

    // Fallback: if it's already in view on mount but callback didn't fire yet
    const rect = element.getBoundingClientRect()
    const inView = rect.top < window.innerHeight && rect.bottom > 0
    if (inView) setIsVisible(true)

    return () => observer.disconnect()
  }, [])

  const filteredProjects = projects

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#00ff88] bg-clip-text text-transparent mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Featured Projects
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] mx-auto mb-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>

          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className={`group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button asChild size="sm" variant="secondary" className="opacity-90">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="secondary" className="opacity-90">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
