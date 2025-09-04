import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/songa-scholars-website/", // important for GitHub Pages
  plugins: [react()],
});
