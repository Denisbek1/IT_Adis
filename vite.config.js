import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    copyPublicDir: false,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        courses: resolve(import.meta.dirname, 'courses.html'),
        courseDetail: resolve(import.meta.dirname, 'course-detail.html'),
        internship: resolve(import.meta.dirname, 'internship.html'),
        contacts: resolve(import.meta.dirname, 'contacts.html'),
      },
    },
  },
});
