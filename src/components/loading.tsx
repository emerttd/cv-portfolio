"use client"

import { useEffect, useState } from "react"

interface LoadingProps {
  isLoading: boolean
}

export default function Loading({ isLoading }: LoadingProps) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      setFadeOut(true)
    }
  }, [isLoading])

  if (!isLoading && fadeOut) {
    return null
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative">
        {/* Ana loading circle */}
        <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>

        {/* İç loading circle */}
        <div className="absolute inset-2 w-8 h-8 border-2 border-blue-400/30 border-b-blue-400 rounded-full animate-spin animate-reverse"></div>

        {/* Merkez nokta */}
        <div className="absolute inset-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full animate-pulse"></div>
      </div>

      {/* Loading text */}
      <div className="absolute mt-24 text-blue-400 text-sm font-medium animate-pulse">Yükleniyor...</div>

      {/* Subtle background animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
    </div>
  )
}
