import { defineConfig } from 'vite';
import dotenv from 'dotenv';

import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        eslintPlugin({
            cache: false,
            include: ['./src/**/*.js', './src/**/*.jsx'],
            exclude: [],
        }),
    ],

    define: {
        'process.env': process.env,
    },
});
