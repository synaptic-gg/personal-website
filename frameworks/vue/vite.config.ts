import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),tailwindcss()],
   define : {
     'process.env.NODE_ENV': JSON.stringify('production')
  },
  build: {
    lib:{
      entry : ['src/main.ts'],
      name: "build",
      formats : ['iife']
    }
  }
})
