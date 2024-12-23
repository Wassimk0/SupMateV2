import { defineConfig } from 'vite';
import commonjs from 'vite-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import { glob } from 'glob';
import { execSync } from 'child_process';
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

const publicDir = process.env.VITE_PUBLIC; // public files
const src = process.env.VITE_SRC; // source files
const src_assets = process.env.VITE_SRC_ASSETS; // source assets files
const dist = process.env.VITE_BUILD; // build files
const dist_assets = process.env.VITE_BUILD_ASSETS; //build assets files

export default defineConfig({
    plugins: [
        {
            name: 'load-config-env',
            config: () => {
                dotenv.config({ path: './config.env' });
            }
        },
        {
            name: 'preload-script',
            configResolved() {
                execSync('node ./preload.js', { stdio: 'inherit' }); // Run the preload script
            }
        },
        commonjs(),
    ],
    base: '',
    root: src,
    logLevel: 'info', // if you want to disable logging use 'info' | 'warn' | 'error' | 'silent'
    clearScreen: true,
    publicDir: publicDir,
    build: {
        outDir: `./${dist}`,
        emptyOutDir: false,
        rollupOptions: {
            manualChunks: undefined,
            input: {
                icons: src_assets + 'scss/icons.scss',
                tailwind: src_assets + 'scss/tailwind.scss',
                plugins: src_assets + 'scss/plugins.scss',
                ...generateJsEntries()
            },
            output: {
                assetFileNames: `${dist_assets}css/[name].[ext]`,
                entryFileNames: `${dist_assets}js/[name].js`,
                chunkFileNames: `${dist_assets}js/[name].js`,
            },
            plugins: [
                copy({
                    targets: [
                        { src: 'static/vite/assets/fonts/*', dest: 'static/vite/assets/css/fonts' }, // Copy fonts For Remix Icons
                    ],
                    hook: 'writeBundle'
                })
            ]
        },
    },
})

function generateJsEntries() {
    const entries = {};
    // Modify the glob pattern to match your Js file location
    const jsFiles = glob.sync('static/assets/js/**/*.js');
    jsFiles.forEach((file) => {
        const name = file.replace('static\\assets\\js\\', '').replace('.js', '');
        entries[name] = file;
    });
    return entries;
}