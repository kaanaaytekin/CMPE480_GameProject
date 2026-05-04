import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: './',
    logLevel: 'warn',
    build: {
        minify: 'terser',
        terserOptions: {
            compress: { passes: 2 },
            mangle: true,
            format: { comments: false }
        }
    },
    server: { port: 8080 }
});