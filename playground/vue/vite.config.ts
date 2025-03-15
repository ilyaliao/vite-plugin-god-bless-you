import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePluginGodBlessYou } from '../../src'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), VitePluginGodBlessYou()],
})
