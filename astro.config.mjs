import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tarabakz25.github.io',   // ← 必ず https:// で!
  base: '/webar-astro',                         // ← プロジェクトページなら必須
  output: 'static',                        // ← 既定値だが明示しておく
});
