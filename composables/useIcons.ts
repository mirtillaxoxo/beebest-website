type Icons = { [key: string]: string; genericLink: string }

export const icons: Icons = {
  genericLink: 'i-ph:app-window', // default
  instagram: 'i-fa6-brands:instagram',
  facebook: 'i-fa6-brands:facebook',
  linkedin: 'i-fa6-brands:linkedin-in',
  youtube: 'i-fa6-brands:youtube',
  twitter: 'i-fa6-brands:x-twitter',
}

export const useIcons =
  () =>
  (url: string): string =>
    icons[
      Array.from(Object.keys(icons)).find((key) => url.includes(key)) ??
        'genericLink' // if the url is provided but there is no icon for the brand
    ]
