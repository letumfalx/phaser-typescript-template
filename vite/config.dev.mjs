import { defineConfig } from "vite";
import tsConfigPath from "vite-tsconfig-paths";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          phaser: ["phaser"],
        },
      },
    },
  },
  server: {
    port: 8080,
  },
  plugins: [tsConfigPath()],
});
