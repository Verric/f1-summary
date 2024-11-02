import type { Metadata } from "next"
import Link from "next/link"
import { Montserrat } from "next/font/google"
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
        <main className="h-screen w-screen p-4 grid grid-rows-[0.5fr_10fr] ">
          <nav className="flex border-b ">
            <Link href="/" className="text-2xl px-4 border-r">
              F1 Summary 2024
            </Link>
            <Link href="/timeline" className="text-2xl px-4 border-r">
              Timelines
            </Link>
            <Link href="/races" className="text-2xl px-4">
              Race Reports
            </Link>
          </nav>

          {children}
        </main>
      </body>
    </html>
  )
}
