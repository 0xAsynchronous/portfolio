import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import {fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@sections', replacement: fileURLToPath(new URL('./src/components/sections', import.meta.url)) },
      { find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
      { find: '@utils', replacement: fileURLToPath(new URL('./src/utils', import.meta.url)) },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/asset', import.meta.url)) },
      { find: '@fonts', replacement: fileURLToPath(new URL('./src/assets/fonts', import.meta.url)) },
      { find: '@sounds', replacement: fileURLToPath(new URL('./src/assets/sounds', import.meta.url)) },
      { find: '@hooks', replacement: fileURLToPath(new URL('./src/hooks', import.meta.url)) },
    ],
  },
  server: {
    port: 3000,
  },
});
