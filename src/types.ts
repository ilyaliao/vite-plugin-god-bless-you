import type { asciiArts } from './ascii-arts'

export interface VitePluginGodBlessYouOptions {
  /**
   * ASCII art type {@link asciiArts}
   *
   * @default 'dragon'
   */
  art?: keyof typeof asciiArts

  /**
   * Custom ASCII art
   */
  customArt?: string

  /**
   * Show In Terminal
   *
   * @default false
   */
  showLog?: boolean

  /**
   * Art Tab size
   *
   * @default 4
   */
  tabSize?: number
}
