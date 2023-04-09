export interface ISearchFriend {
  student_id: string
  full_name: string
  generation_id: string
  member_status: boolean
  consent: string
  can_view: boolean
}

export interface Result {
  data: { [key: string]: ISearchFriend }
  key_order: number[]
  struct: Struct
}

export interface Struct {
  from: number
  to: number
  all: number
}
