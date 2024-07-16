import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
        '/api': {
            target: 'https://backend-mongodb-smoky.vercel.app',
            changeOrigin: true,
            secure: false,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        },
    },
},
})


