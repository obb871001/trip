import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base 必須對應 GitHub Pages 專案網址：https://obb871001.github.io/trip/
// 若之後 repo 改名，這裡的 "/trip/" 也要一起改。
export default defineConfig({
  base: "/trip/",
  plugins: [react()],
});
