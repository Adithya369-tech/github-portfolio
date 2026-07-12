'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { MagneticButton } from './magnetic-button'

const easing = [0.22, 1, 0.36, 1] as const

const headline = ['Sound', 'without', 'limits.']

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.35])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -12])
  const y = useTransform(scrollYProgress, [0, 1], [0, 140])
  const imgOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-28"
    >
      {/* animated gradient background */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-background">
        <div className="animate-drift absolute -left-1/4 top-0 h-[80vh] w-[80vh] rounded-full bg-accent/10 blur-[120px]" />
        <div className="animate-drift absolute -right-1/4 bottom-0 h-[70vh] w-[70vh] rounded-full bg-foreground/5 blur-[120px] [animation-delay:-6s]" />
      </div>

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-accent" />
          Introducing Aura Pro
        </motion.span>

        <h1 className="flex flex-wrap justify-center gap-x-4 text-balance text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          {headline.map((word, i) => (
            <span key={word} className="overflow-hidden py-1">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: easing }}
              >
                {word === 'limits.' ? (
                  <span className="text-accent">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: easing }}
          className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Adaptive noise cancellation, 50 hours of play, and a fit engineered to
          vanish. This is listening, reimagined.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: easing }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <MagneticButton href="#buy">
            Buy from $249
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton href="#features" variant="secondary">
            Explore features
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* floating product */}
      <motion.div
        style={{ scale, rotate, y, opacity: imgOpacity }}
        className="pointer-events-none relative z-0 mt-4 w-full max-w-3xl"
      >
        <div className="animate-float">
          <Image
            src="/earbuds-hero.png"
            alt="Aura Pro wireless earbuds floating"
            width={1200}
            height={900}
            priority
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
