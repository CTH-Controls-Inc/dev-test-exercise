import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CTH Controls Login',
  description: 'Test Login Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#CAD2C5]'>{children}</body>
    </html>
  )
}
