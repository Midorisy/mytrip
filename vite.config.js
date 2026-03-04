import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  },
  server:{
    proxy:{
      '/tencentmapapi': {
        target: 'https://apis.map.qq.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tencentmapapi/, ''),
      },
      '/tujiaApi':{
        target: 'https://m.tujia.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tujiaApi/, ''),
      }
    }
  }
})
