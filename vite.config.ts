import path from "path";
import { defineConfig } from "vite";

import { setupPlugins } from "@responsive-image/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    setupPlugins({
      format: ["original", "webp"],
      include: /^[^?]+\.(jpe?g|png|webp)\?.*responsive.*$/,
      lqip: { type: "color" },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
