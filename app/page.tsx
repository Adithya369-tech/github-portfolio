import { Faq } from '@/components/landing/faq'
import { Features } from '@/components/landing/features'
import { FinalCta } from '@/components/landing/final-cta'
import { Gallery } from '@/components/landing/gallery'
import { Hero } from '@/components/landing/hero'
import { Preloader } from '@/components/landing/preloader'
import { Reviews } from '@/components/landing/reviews'
import { ScrollProgress } from '@/components/landing/scroll-progress'
import { Showcase } from '@/components/landing/showcase'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteNav } from '@/components/landing/site-nav'
import { Specs } from '@/components/landing/specs'

export default function Page() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <SiteNav />
      <main className="relative overflow-x-clip">
        <Hero />
        <Showcase />
        <Features />
        <Gallery />
        <Specs />
        <Reviews />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
