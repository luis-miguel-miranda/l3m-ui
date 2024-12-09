import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
import { NextUIProvider } from '@nextui-org/react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'L3M Personal Page',
  description: 'L3M Personal Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark text-foreground bg-background min-h-screen flex flex-col">
        <NextUIProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </NextUIProvider>
      </body>
    </html>
  )
}