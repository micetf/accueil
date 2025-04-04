import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    // Ouvre automatiquement le navigateur au démarrage
    server: {
        host: "localhost",
        port: 5173,
        open: true,
        watch: {
            ignored: ["**/node_modules/**", "**/dist/**"],
        },
    },
    // Configuration pour que nous puissions voir les assets manquants en développement
    build: {
        rollupOptions: {
            onwarn(warning, warn) {
                // Affiche les avertissements d'assets manquants
                if (warning.code === "MISSING_ASSET") {
                    console.warn("MISSING ASSET:", warning.message);
                } else {
                    warn(warning);
                }
            },
        },
    },
});
