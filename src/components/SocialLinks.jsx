import { cn } from '../utils/helpers'

const SIZES = {
  sm: 'h-9 w-9 rounded-lg',
  md: 'h-11 w-11 rounded-xl',
  lg: 'h-14 w-14 rounded-2xl',
}

const ICON_SIZES = {
  sm: 16,
  md: 19,
  lg: 24,
}

/**
 * Reusable social icon row driven entirely by the data in the links prop.
 * Entries without a url render as muted, non-clickable "coming soon" badges.
 */
export function SocialLinks({ links = [], size = 'md', showPlaceholders = false, className }) {
  const visible = showPlaceholders ? links : links.filter((l) => l.url)

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {visible.map((link) => {
        const Icon = link.icon
        const styles = { '--acc': link.accent || '#8b5cf6' }
        const cls = cn(
          'group inline-flex items-center justify-center border bg-panel text-mut transition-all duration-300',
          SIZES[size],
          'border-line hover:-translate-y-1',
        )

        if (!link.url) {
          return (
            <span
              key={link.id}
              title={`${link.name} — coming soon`}
              className={cn(cls, 'cursor-not-allowed opacity-40')}
            >
              <Icon size={ICON_SIZES[size]} />
            </span>
          )
        }

        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            title={link.name}
            style={styles}
            className={cn(
              cls,
              'hover:border-transparent hover:shadow-[0_10px_30px_-6px_var(--acc)]',
              'hover:text-(--acc)',
            )}
          >
            <Icon size={ICON_SIZES[size]} className="transition-transform duration-300 group-hover:scale-110" />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks