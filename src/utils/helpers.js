export function cn(...parts) {
  return parts.filter(Boolean).join(' ')
}

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function openInNewTab(url) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

export const LANGUAGE_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  PHP: '#4f5d95',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Shell: '#89e051',
  'C++': '#f34b7d',
  C: '#555555',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Swift: '#F05138',
  Rust: '#dea584',
  Go: '#00ADD8',
  Vue: '#41b883',
  Ruby: '#701516',
  SQL: '#e38c00',
}