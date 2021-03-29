import path from 'path'
import { defineConfig } from 'vite'
import svelte from '@svitejs/vite-plugin-svelte'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'SmartScroll'
    }
  },
  plugins: [
    svelte()
  ]
})