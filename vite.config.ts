import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    checker({
      typescript: true,
    }),
    react(),
  ],

  test: {
    includeSource: ["src/**/*.{js,ts}"],
  },
});
