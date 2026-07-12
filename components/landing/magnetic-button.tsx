'use client'

import { cn } from '@/lib/utils'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { useRef, type ReactNode } from 'react'

type MagneticButtonProps = {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
}

export function MagneticButton({
  children,
  className,
  variant = 'primary',
  href,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 250, damping: 18 })
  const springY = useSpring(y, { stiffness: 250, damping: 18 })

  function handleMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(relX * 0.35)
    y.set(relY * 0.35)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  const base =
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-sm font-medium tracking-tight transition-colors duration-300 will-change-transform'
  const styles =
    variant === 'primary'
      ? 'bg-foreground text-background hover:bg-accent'
      : 'border border-border bg-background/70 text-foreground hover:border-foreground/30'

  return (
    <motion.a
      ref={ref}
      href={href ?? '#'}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={cn(base, styles, className)}
    >
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-background/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.a>
  )
}
