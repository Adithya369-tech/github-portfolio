'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from './reveal'

const faqs = [
  {
    q: 'How long does the battery really last?',
    a: 'Each earbud plays for up to 8 hours on a single charge. The charging case holds an additional 42 hours, for 50 hours total. A 10-minute quick charge delivers around 4 hours of playback.',
  },
  {
    q: 'Do they work with both iPhone and Android?',
    a: 'Yes. Aura Pro uses Bluetooth 5.4 with universal codecs and multipoint pairing, so you can connect to two devices at once — phone, laptop, or tablet — regardless of platform.',
  },
  {
    q: 'How effective is the noise cancellation?',
    a: 'Adaptive ANC continuously samples your surroundings and cancels up to 45dB of ambient sound. Transparency mode lets the world back in with a single tap.',
  },
  {
    q: 'Are they sweat and water resistant?',
    a: 'The earbuds are rated IPX5, so they comfortably handle sweat, rain, and splashes during workouts and commutes.',
  },
  {
    q: 'What is included in the box?',
    a: 'Aura Pro earbuds, the wireless charging case, three sizes of silicone tips, a USB-C cable, and a two-year limited warranty.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative bg-secondary px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Questions
          </p>
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Good to know.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Everything you might wonder before making Aura Pro yours.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <li key={faq.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-medium">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="grid size-8 shrink-0 place-items-center rounded-full bg-secondary text-foreground"
                    >
                      <Plus className="size-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 leading-relaxed text-muted-foreground">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
