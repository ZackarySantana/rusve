import { sveltekit } from "@sveltejs/kit/vite";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [
        sveltekit(),
        SvelteKitPWA({
            strategies: "injectManifest",
            srcDir: "src",
            filename: "service-worker.ts",
        }),
    ],
    test: {
        include: ["src/**/*.{test,spec}.{js,ts}"],
    },
    server: {
        port: 3000,
        host: true,
    },
});
