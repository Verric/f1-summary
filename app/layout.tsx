import type { Metadata } from "next"
import Link from "next/link"
import { Montserrat } from "next/font/google"
import Venues from "./components/Venues"
import "./globals.css"

const inter = Montserrat({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "F1 Summary",
  description: "Summary of F1 Races for 2024",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="h-screen w-screen p-4 grid grid-rows-[0.5fr,_1fr_10fr] ">
          <nav className="flex justify-between border-b ">
            <div>
              <Link href="/" className="text-2xl">
                F1 Summary 2024
              </Link>
              <Link href="/about" className="text-2xl ml-4 border-l-2 p-4">
                About
              </Link>
            </div>
          </nav>
          <Venues />

          {children}
        </main>
      </body>
    </html>
  )
}
