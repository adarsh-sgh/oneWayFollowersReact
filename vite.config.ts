import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/oneWayFollowersReact/",
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
});
