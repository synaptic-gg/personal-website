import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [solid(),tailwindcss()],
  define : {
     'process.env.NODE_ENV': JSON.stringify('production')
  },
  build: {
    lib:{
      entry : ['src/main.tsx'],
      name: "build",
      formats : ['iife']
    }
  }
})
