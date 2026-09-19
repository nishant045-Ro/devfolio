export const site = {
  name: 'Nishant Poudel',
  firstName: 'Nishant',
  brand: 'nishant045',
  // brandSuffix: '.dev',
  role: 'Full-Stack / Web Developer',
  status: 'BCA Student / Fresher',
  tagline: 'Building, Learning, and Growing Through Code.',
  description:
    "I'm a BCA student passionate about building web applications, backend systems and modern interactive experiences.",
  email: 'nishantpoudel36@gmail.com',
  location: 'Nawalpur, Nepal',
  githubUsername: 'nishant045-Ro',
  githubUrl: 'https://github.com/nishant045-Ro',
  linkedinUrl: 'https://www.linkedin.com/in/nishant-poudel-91825b419/',
  cvPath: '/cv/Nishant-Poudel-CV.pdf',
  roles: [
    'Full-Stack Developer',
    'Web Developer',
    'JavaScript Developer',
    'PHP & Laravel Learner',
    'Android Developer',
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export const sectionIds = navLinks
  .map((l) => l.href.slice(1))
  .concat(['github'])

export const footerQuickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Journey', href: '#journey' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
]

export default site