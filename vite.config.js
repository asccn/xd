import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://asccn.github.io/xd",
});

// base: "https://sujansince2003.github.io/ngo",
