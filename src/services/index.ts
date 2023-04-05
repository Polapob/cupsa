import ApiService from './api.service'
import apiClient from './apiClient'

export const apiService = new ApiService(apiClient)

export { default as apiClient } from './apiClient'
