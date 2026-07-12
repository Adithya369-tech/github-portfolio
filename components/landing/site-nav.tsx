'use client'

import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'

const links = [
  { label: 'Overview', href: '#showcase' },
  { label: 'Features', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specs', href: '#specs' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteNav() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled
            ? 'glass border border-border/70 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)]'
            : 'border border-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-full bg-foreground text-background">
            <span className="size-2 rounded-full bg-background" />
          </span>
          <span className="text-base font-semibold tracking-tight">Aura</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#buy"
          className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-accent"
        >
          Buy now
        </a>
      </nav>
    </motion.header>
  )
}
