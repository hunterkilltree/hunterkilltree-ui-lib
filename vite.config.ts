import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.lib.json",
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/lib/main.ts"),
      formats: ["es"],
      fileName: "ui-lib",
      name: "UILib",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
});
