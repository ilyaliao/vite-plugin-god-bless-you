import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginGodBlessYou from '../../src'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginGodBlessYou()],
})
