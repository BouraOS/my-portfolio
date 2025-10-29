import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssMinify: true,
    assetsInlineLimit: 4096, // inline les petits fichiers pour éviter les requêtes bloquantes
    rollupOptions: {
      output: {
        // Empêche trop de splits JS/CSS (réduit les chaînes de requêtes)
        manualChunks: undefined,
      },
    },
  },

  // ✅ Active la préconnexion automatique
  optimizeDeps: {
    entries: ["index.html"],
  },
}));
