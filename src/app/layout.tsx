import { ReactNode } from 'react'

import {
  Bai_Jamjuree as BaiJamjuree,
  Orbitron,
  Roboto_Flex as Roboto,
} from 'next/font/google'
import { ThemeProvider } from './theme-provider'
import { TranslatorProvider } from '@/global/translate/Translator.context'
import { Toaster } from 'react-hot-toast'

import TransitionProvider from '@/components/TransitionProvider'

import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-roboto',
})
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron',
})

export const metadata = {
  title: 'G.O DEV',
  description:
    "Guilherme Oliveira's Portfolio buitted with React, Next.js, TailwindCSS and TypeScript.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} ${orbitron.variable} overflow-y-hidden bg-gradient-to-t from-purple-100 via-purple-50 to-gray-50 bg-auto font-sans text-purple-900 duration-500 dark:from-gray-800 dark:via-purple-900 dark:to-gray-950 dark:text-purple-50`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster position="top-right" />
          <TranslatorProvider>
            <TransitionProvider>{children}</TransitionProvider>
          </TranslatorProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
