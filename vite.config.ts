/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { ValidateEnv } from '@julr/vite-plugin-validate-env';

export default defineConfig({
  plugins: [react(), svgr(), ValidateEnv({})],
  resolve: {
    alias: {
      '@/': path.join(__dirname, './src/'),
      components: path.join(__dirname, './src/components/'),
      assets: path.join(__dirname, './src/assets/'),
      public: path.join(__dirname, './public/'),
      pages: path.join(__dirname, './src/pages/'),
      types: path.join(__dirname, './src/@types/'),
    },
  },
});
