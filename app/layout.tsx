import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Cracow Robotics & AI Club',
  description: 'Join the Cracow Robotics & AI Club - A community for robotics, AI, IoT, and emerging technology enthusiasts in Kraków, Poland.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Cracow Robotics & AI Club',
    description: 'A community for robotics, AI, IoT, and emerging technology enthusiasts in Kraków, Poland.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_512x512%281%29-E4DHuZAN5AVhr2intXWWZ1jFBPY0Pz.png',
        width: 512,
        height: 512,
        alt: 'Cracow Robotics & AI Club Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Cracow Robotics & AI Club',
    description: 'A community for robotics, AI, IoT, and emerging technology enthusiasts in Kraków, Poland.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_512x512%281%29-E4DHuZAN5AVhr2intXWWZ1jFBPY0Pz.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
