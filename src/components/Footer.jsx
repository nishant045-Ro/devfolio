import { ArrowUpRight } from 'lucide-react'
import { footerQuickLinks, site } from '../data/site'
import { socialLinks } from '../data/socialLinks'
import SocialLinks from './SocialLinks'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-2">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-sky-400 font-display text-sm font-bold text-white">
                {site.name
                  .split(' ')
                  .map((w) => w[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
              </span>
              <span className="font-display text-lg font-bold text-fg">
                {site.brand}
                <span className="text-brand">{site.brandSuffix}</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mut">
              &ldquo;{site.tagline}&rdquo;
            </p>
            <SocialLinks links={socialLinks} size="sm" className="mt-5" />
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-widest text-fg uppercase">
              Quick Links
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-mut transition-colors hover:text-fg"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-widest text-fg uppercase">
              Get In Touch
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-mut">
              Open to internships, collaborations and freelance opportunities. Let&apos;s build
              something together.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-fg"
            >
              {site.email}
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-soft sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <span className="text-brand">React</span>,
            <span className="text-brand-2">Tailwind</span> &amp;
            <span className="text-pink-400">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer