export interface IFriend {
  system_info: SystemInfo
  general_info: GeneralInfo
  contact_info: ContactInfo
  education_info: EducationInfo
  address_info: AddressInfo
  office_info: OfficeInfo
  available_data: AvailableData
}

export interface AddressInfo {
  address1: string | null
  address2: string | null
  address_city: string | null
  address_district: string | null
  address_subdistrict: string | null
  address_phone: string | null
  address_postcode: string | null
  address_country: string | null
}

export interface AvailableData {
  tu_id: string
  image_url: string
  image_2_url: string
  first_name: string
  last_name: string
  sex: string
  prefix: string
  generation_id: string
}

export interface ContactInfo {
  email: string | null
  mobile: string | null
  website: string | null
}

export interface EducationInfo {
  generation_id: string
  m4_room_id: string | null
  m5_room_id: string | null
  m6_room_id: string | null
  education_detail: string | null
}

export interface GeneralInfo {
  tu_id: string
  image_url: string
  image_2_url: string
  first_name: string
  last_name: string
  nick_name: string | null
  first_name_eng: string | null
  last_name_eng: string | null
  first_name_old: string | null
  last_name_old: string | null
  sex: string
  prefix: string
  job: string | null
  position: string | null
}

export interface OfficeInfo {
  office1: string | null
  office2: string | null
  office_city: string | null
  office_district: string | null
  office_subdistrict: string | null
  office_phone: string | null
  office_postcode: string | null
  office_country: string | null
}

export interface SystemInfo {
  student_id: string
  member_id: string | null
  member_ref: string | null
  is_member: string
  consent: string
  consent_g1: string | null
  consent_g2: string | null
  consent_g3: string | null
  consent_g4: string | null
  consent_g5: string | null
}
