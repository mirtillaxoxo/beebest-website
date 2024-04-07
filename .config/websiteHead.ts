import type { AppHeadMetaObject } from '@nuxt/schema'

import { useThemeColors } from '../composables/useThemeColors'
const { honey, backgroundwhite } = useThemeColors()

// FAVICONS
// TO invalidate favicon Chache
const cacheRefreshVersion = 1 // #TODO: use something like YYYY-MM-DD from new Date() to automatic refresh chache

export const faviconLinks: AppHeadMetaObject['link'] = [
  // FAVICONS: https://realfavicongenerator.net
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: `/apple-touch-icon.png?v=${cacheRefreshVersion}`,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: `/favicon-32x32.png?v=${cacheRefreshVersion}`,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: `/favicon-16x16.png?v=${cacheRefreshVersion}`,
  },
  { rel: 'manifest', href: '/site.webmanifest' },
  {
    rel: 'mask-icon',
    href: `/safari-pinned-tab.svg?v=${cacheRefreshVersion}`,
    color: honey?.hex,
  },
  {
    rel: 'shortcut icon',
    href: `/favicon.ico?v=${cacheRefreshVersion}`,
  },
]

export const appColorsMeta: AppHeadMetaObject['meta'] = [
  {
    name: 'theme-color',
    content: backgroundwhite?.hex,
  },
  {
    name: 'msapplication-TileColor',
    content: '#2b5797',
    // #TODO: extract this into a variable
  },
]
