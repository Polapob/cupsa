import { useContext, FormEventHandler, useState } from 'react'
import { apiService } from '../services'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import useSnackbar from './useSnackbar'

const useLogin = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const { snackbarInfo, onDisplay, onClose } = useSnackbar()
  const navigate = useNavigate()
  const { refreshProfile } = useContext(AuthContext)
  const login: FormEventHandler<HTMLFormElement> = async (event) => {
    try {
      setLoading(true)
      event.preventDefault()
      const { username, password } = event.currentTarget
      if (!username || !password) {
        onDisplay(
          'ผู้ใช้กรอก Username Email หรือ Password ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
          'error'
        )
        return
      }
      const auth = btoa(`${username.value}:${password.value}`)
      const response = await apiService.login(auth)
      localStorage.setItem('token', response.token)
      onClose()
      refreshProfile()
      navigate('/search')
    } catch (err) {
      onDisplay(
        'ผู้ใช้กรอก Username Email หรือ Password ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
        'error'
      )
    } finally {
      setLoading(false)
    }
  }

  return { isLoading, snackbarInfo, login, onClose }
}

export default useLogin
