
import { createServer } from 'vite'
import react from '@vitejs/plugin-react'

const server = await createServer({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000
  }
})

await server.listen()
console.log('Vite dev server running on http://0.0.0.0:5000')
