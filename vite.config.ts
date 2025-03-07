import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unfonts from 'unplugin-fonts/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    
    Unfonts({
      // Google Fonts API V2
      google: {
  
     display: 'swap',
     preconnect: true,
        
     injectTo: 'head-prepend',
        /**
         * Fonts families lists
         */
        families: [
          // families can be either strings (only regular 400 will be loaded)
          'Inter', 'Roboto', 'Open Sans', 'Lato'
        ],
        
      },
      
      
    }),
    vue()],
})
