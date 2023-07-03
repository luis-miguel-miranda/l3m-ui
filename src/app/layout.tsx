import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "../components/NavBar";


export const metadata = {
  title: 'L3M Personal Page',
  description: 'L3M Personal Page',
}

export default function RootLayout({children,}: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
