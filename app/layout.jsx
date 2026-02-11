import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata = {
  title: '9-Day Fitness Challenge - BackstagePass',
  description: 'Join the 9-day fitness challenge and build consistency',
}

export const viewport = {
  themeColor: '#ffffff',
  userScalable: true,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  )
}
