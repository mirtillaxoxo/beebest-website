type WebsitePage = { name: string; description?: string; url: string }

export const usePages = (): Array<WebsitePage> => [
  { name: 'home', url: '/' },
  { name: 'services', url: '/services' },
  { name: 'projects', url: '/projects' },
  { name: 'about', url: '/about' },
  { name: 'contacts', url: '/contacts' },
]
