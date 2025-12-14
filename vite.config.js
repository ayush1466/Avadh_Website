import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(),

    // gzip compression
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),

    // brotli compression
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),

    // IMAGE COMPRESSION
  viteImagemin({
  gifsicle: { optimizationLevel: 3 },
  optipng: { optimizationLevel: 7 },
  mozjpeg: { 
    quality: 80,
    progressive: true,
  },
  pngquant: { 
    quality: [0.7, 0.85],
    speed: 4 
  },
  svgo: {
    plugins: [
      { name: "removeViewBox", active: false },
    ],
  },
  jpeg: {
    quality: 80,
    progressive: true,
    stripMetadata: true,
  },
  // Exclude infrastructure image from optimization
  exclude: [
    '**/img8.jpeg',
    '**/img8.jpg',
  ],
}),
  ],

  build: {
    minify: "esbuild",
    cssMinify: true,
    assetsInlineLimit: 4096,
  },
});
