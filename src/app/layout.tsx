import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ertuğrul Mert Dernekli - Full Stack Developer",
  description:
    "React, Node.js ve modern web teknolojileri ile kullanıcı odaklı, ölçeklenebilir web uygulamaları geliştiren yazılım geliştiricisi.",
  keywords: "full stack developer, react, node.js, javascript, typescript, web development",
  authors: [{ name: "Ertuğrul Mert Dernekli" }],
  openGraph: {
    title: "Ertuğrul Mert Dernekli - Full Stack Developer",
    description:
      "React, Node.js ve modern web teknolojileri ile kullanıcı odaklı, ölçeklenebilir web uygulamaları geliştiren yazılım geliştiricisi.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
