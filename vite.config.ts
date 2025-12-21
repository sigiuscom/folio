import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Parse additional allowed hosts from environment variable for security
  const additionalHosts = process.env.VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS
    ? process.env.VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS.split(',').map(host => host.trim())
    : [];
  
  // Default allowed hosts - restrict to localhost and loopback for security
  const defaultAllowedHosts = ['localhost', '127.0.0.1'];
  const allowedHosts = [...defaultAllowedHosts, ...additionalHosts];

  return {
    base: "/",  // This ensures assets are loaded correctly
    server: {
      // Security: Use 0.0.0.0 only for container environments - restrict in production
      host: "0.0.0.0",
      port: 12000,
      // Security: Explicit allowedHosts list prevents DNS rebinding attacks
      allowedHosts: allowedHosts,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.ts'],
    },
  };
});
