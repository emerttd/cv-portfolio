"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Education } from "@/components/education"
import Loading from "@/components/loading"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds minimum loading time

    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      clearTimeout(timer)
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  return (
    <>
      <Loading isLoading={isLoading} />
      <main
        className={`min-h-screen bg-white transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  )
}
