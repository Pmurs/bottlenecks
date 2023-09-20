import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postcssNesting from "postcss-nesting";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            ["bottlenecks-visualizations", "v-select", "Toggle"].includes(tag),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/bottlenecks/",
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
  build: {
    lib: {
      entry: "./src/main.js",
      name: "bottlenecks-visualizations",
      // the proper extensions will be added
      fileName: "bottlenecks-visualizations",
    },
  },
});
