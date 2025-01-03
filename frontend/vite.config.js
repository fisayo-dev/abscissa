import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  // Determine the backend URL based on the environment
  const isProduction = mode === "production";
  const backendUrl = isProduction
    ? "https://abscissa-1.onrender.com/api/v1" // Replace with your Render backend URL
    : "http://localhost:7000/"; // Local development backend URL

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      global: {},
    },
    server: {
      proxy: {
        "/api/": {
          target: backendUrl, // Dynamically set the backend URL
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
