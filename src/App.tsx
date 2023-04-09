import { ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import { theme } from './theme'
import AuthProvider from './context/AuthContext'
import HomePage from './pages/home'
import SearchPage from './pages/search'
import ViewFriendPage from './pages/viewFriend'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/view/:friendId" element={<ViewFriendPage />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
