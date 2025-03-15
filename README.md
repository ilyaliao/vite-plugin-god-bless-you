# vite-plugin-god-bless-you

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![License][license-src]][license-href]

Vite plugin for adding ASCII art to bless your code and keep it bug-free!

## Usage

```bash
npm i -D vite-plugin-god-bless-you
```

```ts
import { defineConfig } from 'vite'
import GodBlessYou from 'vite-plugin-god-bless-you'

export default defineConfig({
  plugins: [
    GodBlessYou(),
  ],
})
```

## Configuration

```ts
GodBlessYou({
  // default ascii arts
  art: 'dragon',

  // If `true`, the art will be printed in your terminal
  showLog: true,

  // Indentation in `index.html`
  tabSize: 4
})
```

You can customize your ASCII art

```typescript
GodBlessYou({
  customArt: `
    /\\_/\\
   ( o.o )
    > ^ <
  Good Luck！`
})
```

Refer to the [type definitions](./src/types.ts) for more options.

## Credits

- The ASCII art comes from the [awesome-comment](https://github.com/Blankj/awesome-comment/tree/master) project

## License

[MIT](./LICENSE) License © [IlyaL](https://github.com/ilyaliao/)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/vite-plugin-god-bless-you?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/vite-plugin-god-bless-you
[npm-downloads-src]: https://img.shields.io/npm/dm/vite-plugin-god-bless-you?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/vite-plugin-god-bless-you
[bundle-src]: https://img.shields.io/bundlephobia/minzip/vite-plugin-god-bless-you?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=vite-plugin-god-bless-you
[license-src]: https://img.shields.io/github/license/ilyaliao/vite-plugin-god-bless-you.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/ilyaliao/vite-plugin-god-bless-you/blob/main/LICENSE
