import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'

import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [qwikVite({csr:true}), tailwindcss(),],
    define : {
     'process.env.NODE_ENV': JSON.stringify('production'),
  },
build:{
  rollupOptions:{
    output:{
        dir : "./dist",
        entryFileNames:"main.js",
        assetFileNames : 'qwik.css',
        chunkFileNames:'chunk.js'
    }

}
}
})
