// Site configuration
export const SITE = {
  title: 'Wex Distribuidora',
  description: 'Distribuidora de peças para implementos de caminhões.',
  url: 'https://yourdomain.com',
  author: 'Wex Distribuidora',
} as const

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Empresa', href: '/company' },
  { name: 'Catálogo', href: '/catalog' },
] as const

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const
