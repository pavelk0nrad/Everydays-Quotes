import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: process.env.NODE_ENV === 'production' 
    ? 'https://pavelk0nrad.github.io/Everydays-Quotes/' 
    : '/', 
  plugins: [react()],
})
