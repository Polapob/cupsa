import { IFriend } from '../../models/friend'
import { Result } from '../../models/searchFriend'
import { IUser } from '../../models/user'

export interface ILoginResponse {
  success: boolean
  token: string
  result: IUser
}

export interface IGetProfileResponse {
  success: boolean
  result: IUser
}

export interface ISearchFriendResponse {
  success: boolean
  result: Result
}
export interface IViewFriendResponse {
  success: boolean
  result: IFriend
}
export interface IGetAllGenerationResponse {
  success: boolean
  result: string[]
}

export type SearchParams = {
  keyword: string
  offset: number
  limit?: number
}
