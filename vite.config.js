import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
        '/api': {
            target: 'http://localhost:4040',
            changeOrigin: true,
            secure: false,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        },
    },
},
})


