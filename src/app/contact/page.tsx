'use client'

import { useTranslator } from '@/global/translate/Translator.context'
import { motion } from 'framer-motion'
import { fadeIn } from '@/themes/variants'
import { VariantsEnum } from '@/themes/variants.enum'

import Forms from '@/components/Forms'
import DownloadCV from '@/components/Common/DownloadCV'
import SocialMedia from '@/components/Common/SocialMedia'
import { SocialMediaEnum } from '@/components/Common/SocialMedia/socialmedia.enum'
import { Suspense } from 'react'
import Loading from '../loading'

export default function Contact() {
  const { locale, translate } = useTranslator()
  const TRANSLATE = translate[locale].CONTACT_PAGE
  const LOADING = translate[locale].LOADING

  return (
    <Suspense
      fallback={<Loading title={LOADING.TITLE} message={LOADING.MESSAGE} />}
    >
      <section className="no-scrollbar flex h-screen w-full flex-1 flex-col items-center justify-start overflow-y-scroll px-6 pb-36 pt-16 md:mt-36 md:h-screen md:w-screen md:pb-40 md:pt-20">
        <div>
          <motion.h3
            key="h3-title"
            variants={fadeIn(VariantsEnum.DOWN, 0.5)}
            initial="hidden"
            animate="show"
            className="py-4 pl-2 font-alt text-2xl font-bold tracking-tight text-purple-logo md:text-4xl"
          >
            {TRANSLATE.TITLE}
          </motion.h3>
          <motion.section
            key="forms"
            variants={fadeIn(VariantsEnum.LEFT, 0.5)}
            initial="hidden"
            animate="show"
          >
            <Forms />
          </motion.section>
          <motion.section
            key="contact-buttons"
            variants={fadeIn(VariantsEnum.RIGHT, 0.5)}
            initial="hidden"
            animate="show"
            className="ml-2 mt-4 flex w-1/2 flex-1 flex-col items-start space-y-6 sm:w-1/3 md:mt-6 md:w-1/4 md:flex-row md:space-x-6 md:space-y-0"
          >
            <div className="flex flex-row space-x-4">
              <SocialMedia name={SocialMediaEnum.LINKEDIN} />
              <SocialMedia name={SocialMediaEnum.GITHUB} />
            </div>
            <DownloadCV locale={locale} />
          </motion.section>
        </div>
      </section>
    </Suspense>
  )
}
