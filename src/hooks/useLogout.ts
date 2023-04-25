import { useCallback, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const useLogout = () => {
  const { resetUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const logout = useCallback(() => {
    localStorage.setItem('token', '')
    resetUser()
    navigate('/')
  }, [navigate, resetUser])
  return logout
}

export default useLogout
