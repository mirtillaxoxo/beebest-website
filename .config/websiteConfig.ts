import { readdirSync } from 'fs'

const cssFolder = '/assets/css'
export const cssFiles: Array<string> = readdirSync(
  new URL(`..${cssFolder}`, import.meta.url),
).map((file) => (file = `${cssFolder}/${file}`))
