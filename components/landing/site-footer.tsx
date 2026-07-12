const groups = [
  {
    title: 'Product',
    links: ['Overview', 'Features', 'Specs', 'Compare'],
  },
  {
    title: 'Support',
    links: ['Help center', 'Warranty', 'Returns', 'Contact'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Sustainability'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.5fr_2fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-full bg-foreground text-background">
              <span className="size-2 rounded-full bg-background" />
            </span>
            <span className="text-base font-semibold tracking-tight">Aura</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Sound engineered to disappear, so the music is all that&apos;s left.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Aura Audio. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Terms
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  )
}
