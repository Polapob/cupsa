import {
  IGetAllGenerationResponse,
  IGetProfileResponse,
  ILoginResponse,
  IViewFriendResponse,
  SearchParams
} from './interfaces/api.interface'
import { AxiosInstance } from 'axios'
import { ISearchFriendResponse } from './interfaces/api.interface'
import qs from 'qs'

interface IApiService {
  login: (auth: string) => Promise<ILoginResponse>
  getProfile: () => Promise<IGetProfileResponse>
  searchFriendInSameGeneration: (
    searchParams: SearchParams
  ) => Promise<ISearchFriendResponse>
  searchFriendWithPrevillege: (
    searchParams: SearchParams,
    generation: string
  ) => Promise<ISearchFriendResponse>
  viewFriend: (id: string) => Promise<IViewFriendResponse>
}

class ApiService implements IApiService {
  client: AxiosInstance
  constructor(client: AxiosInstance) {
    this.client = client
  }

  async login(auth: string) {
    const response = await this.client.post<ILoginResponse>(
      '/login',
      qs.stringify({
        auth
      }),
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      }
    )
    return response.data
  }

  async getProfile() {
    const response = await this.client.get<IGetProfileResponse>('self')
    return response.data
  }

  async searchFriendInSameGeneration(searchParams: {
    keyword: string
    offset: number
    limit?: number
  }) {
    const { keyword, offset, limit } = searchParams
    const response = await this.client.get<ISearchFriendResponse>('/friends', {
      params: {
        keyword,
        offset,
        limit: limit || 50
      }
    })
    return response.data
  }

  async searchFriendWithPrevillege(
    searchParams: {
      keyword: string
      offset: number
      limit?: number
    },
    generation?: string
  ) {
    const { keyword, offset, limit } = searchParams
    const response = await this.client.get<ISearchFriendResponse>('/search', {
      params: {
        keyword,
        offset,
        generation,
        limit: limit || 50
      }
    })
    return response.data
  }

  async viewFriend(id: string) {
    const response = await this.client.get<IViewFriendResponse>(`/friend/${id}`)
    return response.data
  }

  async getAllGenerations() {
    const response = await this.client.get<IGetAllGenerationResponse>(
      '/generations'
    )
    return response.data
  }
}

export default ApiService
