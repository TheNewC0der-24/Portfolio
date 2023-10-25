import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "maskable.png"],
  manifest: {
    short_name: "Bhavya Khurana",
    name: "Bhavya Khurana Portfolio",
    description: "Hey there! I'm Bhavya Khurana, a passionate frontend developer and content writer with a soft spot for dogs 🐶. I spend my days crafting user-friendly interfaces and bringing creative designs to life. When I'm not coding, you'll often find me typing away, weaving engaging content for various platforms. I believe in the power of words to inspire and connect people. In the tech world, I'm well-versed in HTML, CSS, JavaScript and, TypeScript, constantly exploring new frameworks and tools to enhance user experiences. I enjoy the challenge of optimizing websites for performance and responsiveness across different devices.",
    theme_color: "#6d2ae2",
    background_color: "#0e1313",
    display: "standalone",
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "maskable.png",
        sizes: "400x400",
        type: "image/png",
        purpose: "any maskable"
      },
      {
        src: "logo16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        src: "logo32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "logo192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "logo256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "logo384.png",
        sizes: "384x384",
        type: "image/png"
      },
      {
        src: "logo512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
})
