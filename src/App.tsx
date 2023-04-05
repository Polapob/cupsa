import { ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import { theme } from './theme'
import AuthProvider from './context/AuthContext'
import router from './router'

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Navbar />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
