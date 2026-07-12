'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { MagneticButton } from './magnetic-button'
import { Reveal } from './reveal'

export function FinalCta() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1.1])

  return (
    <section id="buy" ref={ref} className="relative overflow-hidden px-6 py-28 md:py-40">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="animate-drift absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]" />
        <div className="animate-float absolute left-[12%] top-[20%] size-24 rounded-full border border-border" />
        <div className="animate-float absolute right-[14%] top-[30%] size-16 rounded-3xl border border-border [animation-delay:-2s]" />
        <div className="animate-float absolute bottom-[18%] left-[20%] size-10 rounded-full bg-accent/20 [animation-delay:-4s]" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div style={{ y, scale }} className="w-full max-w-lg">
          <Image
            src="/earbuds-case.png"
            alt="Aura Pro earbuds in charging case"
            width={900}
            height={700}
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        <Reveal className="mt-6">
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Hear what you&apos;ve been missing.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Free two-day shipping, 30-day returns, and a two-year warranty.
            Yours from $249.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MagneticButton href="#buy">
              Buy Aura Pro
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton href="#features" variant="secondary">
              Compare models
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
