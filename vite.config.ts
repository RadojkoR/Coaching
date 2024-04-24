import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
   base: 'https://radoyko.com/my_project/coaching',
  plugins: [react()],
})
