import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@hooks": path.resolve(__dirname, "./src/hooks/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@stores": path.resolve(__dirname, "./src/stores/"),
      "@services": path.resolve(__dirname, "./src/services/"),
      "@content": path.resolve(__dirname, "./src/content/"),
      "@types": path.resolve(__dirname, "./src/types/"),
    },
  },
  plugins: [react()],
});
