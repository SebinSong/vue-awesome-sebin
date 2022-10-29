
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

const resolvePath = relPath => path.resolve(__dirname, relPath)
const appScss = resolvePath('src/scss')

console.log('appScss: ', appScss)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/scss/_utils.scss';"
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
