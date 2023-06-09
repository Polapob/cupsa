import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    // To access env vars here use process.env.TEST_VAR
    plugins: [react()],
    server: {
      port: parseInt(process.env.VITE_DEFAULT_FRONTEND_PORT)
    }
  })
}
