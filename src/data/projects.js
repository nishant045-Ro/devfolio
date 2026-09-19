import {
  ReceiptText,
  UtensilsCrossed,
  Smartphone,
  LayoutDashboard,
  ShoppingCart,
  Boxes,
  ClipboardList,
  MapPin,
  Users,
  Wallet,
  Search,
} from 'lucide-react'

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'backend', label: 'Backend' },
  { id: 'android', label: 'Android' },
]

export const projects = [
  {
    id: 'shop-billing-system',
    title: 'Shop Billing System',
    tagline:
      'Full-stack billing and inventory management with role-based access for a retail shop.',
    categories: ['web', 'backend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'Admin and cashier roles with separate dashboards',
      'Product management — add, edit, delete and search',
      'Billing with dynamic item selection and totals',
      'Inventory tracking with low-stock visibility',
      'Sales reports and daily summary views',
      'MySQL database integration for all records',
    ],
    role: 'Solo developer — academic project focused on full-stack PHP development with MySQL.',
    overview:
      'A complete billing solution built to learn how the frontend, backend and database fit together. PHP handles authentication, role checks and CRUD endpoints, while JavaScript powers the billing UI and validation. MySQL stores products, users, bills and inventory data.',
    github: '',
    liveUrl: '',
    accent: '#34d399',
    gradient: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #0e7490 100%)',
    icon: ReceiptText,
    views: [
      { name: 'Dashboard', icon: LayoutDashboard, desc: 'Sales overview & quick actions' },
      { name: 'New Bill', icon: ReceiptText, desc: 'Cart-style billing interface' },
      { name: 'Products', icon: Boxes, desc: 'Product management table' },
      { name: 'Inventory', icon: ClipboardList, desc: 'Stock level tracking' },
    ],
  },
  {
    id: 'food-ordering-system',
    title: 'Food Ordering System',
    tagline:
      'Restaurant ordering platform with menu browsing, cart and order management.',
    categories: ['web', 'backend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'Food listing grouped by category',
      'Restaurant-style menu with pricing and descriptions',
      'Dynamic cart with quantity and total updates',
      'Order placement and status flow',
      'User accounts and session management',
      'Database integration for menu, orders and users',
    ],
    role: 'Solo developer — academic project exploring PHP sessions, MySQL relations and interactive frontend logic.',
    overview:
      'An end-to-end food ordering experience: customers browse the menu, build a cart and place orders, while the system persists everything in MySQL. PHP manages sessions and order logic, and vanilla JavaScript handles the interactive cart and UI updates.',
    github: '',
    liveUrl: '',
    accent: '#f59e0b',
    gradient: 'linear-gradient(135deg, #ea580c 0%, #f59e0b 50%, #eab308 100%)',
    icon: UtensilsCrossed,
    views: [
      { name: 'Menu', icon: UtensilsCrossed, desc: 'Categorized food listing' },
      { name: 'Cart', icon: ShoppingCart, desc: 'Quantity & totals panel' },
      { name: 'Orders', icon: ClipboardList, desc: 'Placed order summary' },
      { name: 'Checkout', icon: Wallet, desc: 'Customer details form' },
    ],
  },
  {
    id: 'internship-finder',
    title: 'Internship Finder (Android)',
    tagline:
      'Android app helping students discover internships and hiring companies.',
    categories: ['android'],
    tech: ['Android Studio', 'Java', 'XML'],
    features: [
      'Internship listings with title, field and location',
      'Company profiles and contact information',
      'Paid / unpaid internship indicators',
      'Student-friendly, simple navigation',
    ],
    role: 'Solo developer — academic project learning Android development with Java and XML layouts.',
    overview:
      'A mobile app that aggregates internship opportunities for students. Built with Java and XML in Android Studio, it presents listings clearly, marks paid vs. unpaid roles, and keeps the interface simple and approachable for student users.',
    github: '',
    liveUrl: '',
    accent: '#a78bfa',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #c084fc 100%)',
    icon: Smartphone,
    views: [
      { name: 'Listings', icon: Search, desc: 'Scrollable internship list' },
      { name: 'Company', icon: Users, desc: 'Company information screen' },
      { name: 'Details', icon: MapPin, desc: 'Role, location & pay type' },
    ],
  },
]

export default projects