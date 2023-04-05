import { useContext, FormEventHandler } from 'react'
import { apiService } from '../services'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const useLogin = () => {
  const navigate = useNavigate()
  const { refreshProfile } = useContext(AuthContext)
  const login: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    const { username, password } = event.currentTarget
    const auth = btoa(`${username.value}:${password.value}`)
    const response = await apiService.login(auth)
    localStorage.setItem('token', response.token)
    refreshProfile()
    navigate('/search')
    return
  }

  return { login }
}

export default useLogin
