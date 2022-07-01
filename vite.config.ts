import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from "path";
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'src': resolve(__dirname, './src')
    },
  },
  plugins: [
    react(), 
    svgr({
      exportAsDefault: true,
    })
  ]
})
