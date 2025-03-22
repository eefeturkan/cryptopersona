import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kripto Kişilik Testi',
  description: 'Hangi kripto para karakterine sahipsin? Hemen test et!',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#0A0F29" />
        <meta name="supported-color-schemes" content="dark" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
