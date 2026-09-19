import {
  FileCode,
  Palette,
  Braces,
  CodeXml,
  Route,
  Database,
  Coffee,
  GitBranch,
  SquareCode,
  Smartphone,
  Server,
} from 'lucide-react'
import { GitHubIcon } from '../components/icons/BrandIcons'

export const skillCategories = ['Frontend', 'Backend', 'Database', 'Programming', 'Tools', 'Currently Learning']

export const skills = [
  {
    name: 'HTML5',
    category: 'Frontend',
    icon: FileCode,
    color: '#e34f26',
    desc: 'Semantic, accessible markup & clean page structure.',
    level: 90,
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    icon: Palette,
    color: '#38bdf8',
    desc: 'Modern layouts, flexbox, grid & responsive design.',
    level: 85,
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    icon: Braces,
    color: '#f7df1e',
    desc: 'DOM, ES6+, async patterns and interactive UIs.',
    level: 78,
  },
  {
    name: 'PHP',
    category: 'Backend',
    icon: FileCode,
    color: '#8b8ce8',
    desc: 'Server-side logic and dynamic web applications.',
    level: 75,
  },
  {
    name: 'Laravel',
    category: 'Backend',
    icon: Route,
    color: '#ff2d20',
    desc: 'MVC structure, routing, Eloquent & artisan.',
    level: 60,
  },
  {
    name: 'MySQL',
    category: 'Database',
    icon: Database,
    color: '#e68a2e',
    desc: 'Schema design, queries, joins and relational data.',
    level: 72,
  },
  {
    name: 'Java',
    category: 'Programming',
    icon: Coffee,
    color: '#f89820',
    desc: 'Core concepts, OOP and Android fundamentals.',
    level: 65,
  },
  {
    name: 'Git',
    category: 'Tools',
    icon: GitBranch,
    color: '#f05033',
    desc: 'Version control, branching and collaboration.',
    level: 70,
  },
  {
    name: 'GitHub',
    category: 'Tools',
    icon: GitHubIcon,
    color: '#e2e8f0',
    desc: 'Remote repos, pull requests and project hosting.',
    level: 70,
  },
  {
    name: 'VS Code',
    category: 'Tools',
    icon: SquareCode,
    color: '#3aa9ff',
    desc: 'Primary editor — extensions, tasks and debugging.',
    level: 88,
  },
  {
    name: 'Android Studio',
    category: 'Tools',
    icon: Smartphone,
    color: '#3ddc84',
    desc: 'Building and testing native Android apps.',
    level: 55,
  },
  {
    name: 'XAMPP',
    category: 'Tools',
    icon: Server,
    color: '#fb7a24',
    desc: 'Local Apache, PHP & MySQL development stack.',
    level: 82,
  },
]

export const learningNow = [
  { name: 'Advanced JavaScript', icon: Braces, color: '#f7df1e' },
  { name: 'Android Development', icon: Smartphone, color: '#3ddc84' },
  { name: 'Modern Web Development', icon: CodeXml, color: '#a78bfa' },
]

export default skills