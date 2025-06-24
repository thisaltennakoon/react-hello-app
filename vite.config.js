import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'ReactHelloLib',
      formats: ['es', 'umd'],
      fileName: (format) => `ReactHelloLib.${format}.js`
    },
    rollupOptions: {
      // externalize deps
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})