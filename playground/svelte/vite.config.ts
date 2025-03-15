import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import GodBlessYou from '../../src'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), GodBlessYou()],
})
