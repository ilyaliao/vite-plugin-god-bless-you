import type { Plugin } from 'vite'
import type { VitePluginGodBlessYouOptions } from './types'
import { asciiArts } from './ascii-arts'
import { toHtmlComment } from './transform'

export function VitePluginGodBlessYou(options: VitePluginGodBlessYouOptions = {}): Plugin {
  const {
    art = 'dragon',
    customArt,
    showLog = false,
    tabSize = 4,
  } = options

  const _art = customArt || asciiArts[art]
  const artComment = toHtmlComment(_art, tabSize)

  return {
    name: 'vite-plugin-god-bless-you',
    enforce: 'pre',
    configResolved(_config) {
      if (showLog) {
        // eslint-disable-next-line no-console
        console.log(`${_art}\n`)
      }
    },
    transformIndexHtml: {
      order: 'post',
      handler(html, _ctx) {
        const modifiedHtml = html.replace(
          /(<html[^>]*>)/i,
          `$1${artComment}`,
        )

        return modifiedHtml
      },
    },
  } as Plugin
}
