import './globals.css'
import { Dosis, Lato } from 'next/font/google'

const fontHeading = Dosis({
  weight: ["800"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontDescription = Lato({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-description",
});

const fontDescriptionBold = Lato({
  weight: ["900"],
  subsets: ["latin"],
  variable: "--font-description-bold",
});

export const metadata = {
  title: 'CTH Test',
  description: 'Login page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fontHeading.variable} ${fontDescription.variable} ${fontDescriptionBold.variable} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
