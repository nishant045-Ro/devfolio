import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  XIcon,
  TikTokIcon,
} from '../components/icons/BrandIcons'

/**
 * Single source of truth for every social profile on the site.
 *
 * To add a new social account later, add one entry here — nothing else
 * needs to change. Placeholder accounts (empty url) render as muted
 * "coming soon" badges instead of fake links.
 *
 *   {
 *     id: 'youtube',
 *     name: 'YouTube',
 *     url: 'https://youtube.com/@username',
 *     icon: YouTubeIcon,
 *   }
 */
export const socialLinks = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/nishant045-Ro',
    icon: GitHubIcon,
    accent: '#a78bfa',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nishant-poudel-91825b419/',
    icon: LinkedInIcon,
    accent: '#38bdf8',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: '',
    icon: InstagramIcon,
    accent: '#f472b6',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: '',
    icon: FacebookIcon,
    accent: '#60a5fa',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    url: '',
    icon: TikTokIcon,
    accent: '#22d3ee',
  },
  {
    id: 'twitter',
    name: 'Twitter / X',
    url: '',
    icon: XIcon,
    accent: '#e2e8f0',
  },
]

export const activeSocialLinks = socialLinks.filter((s) => s.url)

export default socialLinks