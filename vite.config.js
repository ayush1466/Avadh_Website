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
  optipng: { optimizationLevel: 5 },
  mozjpeg: { 
    quality: 70,
    progressive: true,
    // Don't strip metadata
  },
  pngquant: { quality: [0.6, 0.8] },
  svgo: {
    plugins: [{ name: "removeViewBox", active: false }],
  },
  // Add this to preserve image orientation
  jpeg: {
    quality: 70,
    progressive: true,
    // Keep EXIF data
    stripMetadata: false,
  },
}),
  ],

  build: {
    minify: "esbuild",
    cssMinify: true,
    assetsInlineLimit: 4096,
  },
});
