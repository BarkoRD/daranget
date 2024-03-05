import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // Configuraciones adicionales del plugin React aquí
    // Por ejemplo, para habilitar el Fast Refresh (recarga rápida) en desarrollo:
    fastRefresh: true,
  })],
  // Configuraciones adicionales de Vite aquí
  // Por ejemplo, para configurar el directorio base de tu proyecto:
  base: './',
  // Para definir variables de entorno y otros ajustes específicos:
  server: {
    host: true,
    port: 5000 // Define el puerto en el que se iniciará el servidor de desarrollo
  },
  build: {
    // Configuraciones específicas de construcción aquí
  },
});