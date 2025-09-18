"use client"

import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [particles, setParticles] = useState<
    Array<{ id: number; type: string; delay: number; top: string; left: string; content?: string }>
  >([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []

      // Matrix rain particles
      const matrixChars = ["0", "1", "{", "}", "<", ">", "/", "\\", "|", "-", "+", "="]
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          type: "matrix-particle",
          delay: Math.random() * 8,
          top: "-20px",
          left: `${Math.random() * 100}%`,
          content: matrixChars[Math.floor(Math.random() * matrixChars.length)],
        })
      }

      // Binary code elements
      const binaryStrings = ["01010", "11001", "00110", "10101", "01100"]
      for (let i = 20; i < 35; i++) {
        newParticles.push({
          id: i,
          type: "binary-code",
          delay: Math.random() * 6,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          content: binaryStrings[Math.floor(Math.random() * binaryStrings.length)],
        })
      }

      // Code snippets
      const codeSnippets = ["const", "function", "return", "import", "export", "class", "async", "await"]
      for (let i = 35; i < 45; i++) {
        newParticles.push({
          id: i,
          type: "code-snippet",
          delay: Math.random() * 12,
          top: "100vh",
          left: `${Math.random() * 100}%`,
          content: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        })
      }

      // Circuit elements
      for (let i = 45; i < 55; i++) {
        newParticles.push({
          id: i,
          type: "circuit-element",
          delay: Math.random() * 4,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        })
      }

      // Hexagon tech shapes
      for (let i = 55; i < 65; i++) {
        newParticles.push({
          id: i,
          type: "hexagon-tech",
          delay: Math.random() * 10,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        })
      }

      // Enhanced floating particles with colors
      for (let i = 65; i < 85; i++) {
        newParticles.push({
          id: i,
          type: "floating-particle",
          delay: Math.random() * 6,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        })
      }

      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="animated-bg">
      <div className="tech-grid" />

      <div
        className="morphing-bg"
        style={{
          width: "400px",
          height: "400px",
          top: "10%",
          left: "10%",
        }}
      />
      <div
        className="morphing-bg"
        style={{
          width: "500px",
          height: "500px",
          top: "60%",
          right: "10%",
          animationDelay: "-4s",
        }}
      />
      <div
        className="morphing-bg"
        style={{
          width: "300px",
          height: "300px",
          top: "30%",
          left: "50%",
          animationDelay: "-2s",
        }}
      />

      <div
        className="glow-orb"
        style={{
          width: "250px",
          height: "250px",
          top: "20%",
          right: "20%",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: "200px",
          height: "200px",
          bottom: "20%",
          left: "15%",
          animationDelay: "-2s",
        }}
      />

      <div className="circuit-line" style={{ top: "25%", width: "200px", left: "20%", animationDelay: "0s" }} />
      <div className="circuit-line" style={{ top: "45%", width: "300px", right: "15%", animationDelay: "-2s" }} />
      <div className="circuit-line" style={{ top: "65%", width: "250px", left: "30%", animationDelay: "-4s" }} />
      <div className="circuit-line" style={{ top: "85%", width: "180px", right: "25%", animationDelay: "-1s" }} />

      <div className="terminal-cursor" style={{ top: "15%", left: "80%", animationDelay: "0s" }} />
      <div className="terminal-cursor" style={{ top: "35%", left: "15%", animationDelay: "-0.5s" }} />
      <div className="terminal-cursor" style={{ top: "75%", left: "60%", animationDelay: "-1s" }} />

      {particles.map((particle) => (
        <div
          key={particle.id}
          className={particle.type}
          style={{
            top: particle.top,
            left: particle.left,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.content}
        </div>
      ))}
    </div>
  )
}
