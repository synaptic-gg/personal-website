import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  plugins: [svelte(),tailwindcss()],
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
});
