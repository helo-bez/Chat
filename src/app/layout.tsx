import Header from '@/components/Organisms/Header'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree, Inter, Noto_Sans, Noto_Serif } from 'next/font/google'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import toast, { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" })
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-noto-sans'
})
const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-noto-serif'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`${roboto.variable} ${notoSans.variable} ${notoSerif.variable} ${inter.variable} font-noto-sans bg-gray-900 text-gray-100 scrollbar-none bg-gray-middle text-white`}>
        <main key={'main'} className={twMerge(" flex flex-col min-h-screen bg-gray-middle text-white")}>
          <Header />
          <Toaster position="bottom-center" toastOptions={{
            style: {
              background: '#363636',
              color: '#fff',
            }
          }} />
         
          {children}
        </main>
      </body>
    </html>
  )
}
