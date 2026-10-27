import { defineConfig } from 'vite';

export default defineConfig({
  // 루트의 index.html을 진입점으로 사용
  root: '.',
  build: {
    // Netlify 배포 폴더 (Publish directory: dist)
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
  },
});
