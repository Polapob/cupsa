import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL as string
})

apiClient.interceptors.request.use((config) => {
  const oldParam = config.params
  const token = localStorage.getItem('token')
  if (token) {
    config.params = { ...oldParam, token }
  }
  return config
})

export default apiClient
