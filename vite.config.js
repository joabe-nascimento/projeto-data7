import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Define a porta para 3000
    historyApiFallback: true, // Adiciona isso para lidar com o roteamento do React Router
  },
});
