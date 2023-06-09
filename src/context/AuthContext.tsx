import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
  useMemo
} from 'react'
import { apiService } from '../services'
import profileAdapter from '../utils/adapter/profileAdapter'
import { AxiosError, isAxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

export type UserProfileTypes = {
  consentG1: boolean
  consentG2: boolean
  consentG3: boolean
  consentG4: boolean
  consentG5: boolean
  firstName: string
  lastName: string
  generationId: string
  isGeneralMember: boolean
}

export const AuthContext = createContext<{
  user: UserProfileTypes
  isSignIn: boolean
  refreshProfile: () => void
  resetUser: () => void
}>({
  user: {} as UserProfileTypes,
  isSignIn: false,
  refreshProfile: () => {},
  resetUser: () => {}
})

interface IAuthProviderProps {
  children?: ReactNode
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate()
  const [user, setUser] = useState<UserProfileTypes>({
    consentG1: false,
    consentG2: false,
    consentG3: false,
    consentG4: false,
    consentG5: false,
    isGeneralMember: false,
    firstName: '',
    lastName: '',
    generationId: ''
  })
  const [isUpdate, setUpdate] = useState<boolean>(false)
  const isSignIn = useMemo(() => {
    return !!(user.firstName && user.lastName && user.generationId)
  }, [user])

  const refreshProfile = useCallback(() => {
    setUpdate((prev) => !prev)
  }, [])
  const resetUser = useCallback(() => {
    setUser({
      consentG1: false,
      consentG2: false,
      consentG3: false,
      consentG4: false,
      consentG5: false,
      isGeneralMember: false,
      firstName: '',
      lastName: '',
      generationId: ''
    })
  }, [])

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { result } = await apiService.getProfile()
        setUser(profileAdapter(result))
      } catch (err) {
        if (isAxiosError(err)) {
          const error: AxiosError<{ message: string; success: boolean }> = err
          console.log(error)

          if (error.response?.data.message === 'invalid authorization') {
            navigate('/')
          }
        }
      }
    }
    fetchProfile()
  }, [isUpdate, navigate])

  return (
    <AuthContext.Provider value={{ user, isSignIn, refreshProfile, resetUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
