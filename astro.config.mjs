// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://gorodiskiy.github.io',
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
