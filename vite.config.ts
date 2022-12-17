import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    viteSingleFile(),
  ],
  esbuild: {
    charset: 'utf8'
  },
  css: {
    preprocessorOptions: {
      scss: { 
        additionalData: `@import "./src/styles/_mixins.scss";` 
      },
    },
  },
})
