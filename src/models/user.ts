export interface IUser {
  student_id: string
  tu_id: string
  member_id?: string
  member_ref?: string
  is_member: string
  first_name: string
  last_name: string
  nick_name: string
  first_name_eng?: string
  last_name_eng?: string
  first_name_old?: string
  last_name_old?: string
  sex: string
  prefix: string
  prefix_eng?: string
  picture?: string
  picture_name?: string
  picture_type?: string
  generation_id: string
  m4_room_id: string
  m5_room_id: string
  m6_room_id: string
  education_detail: string
  email: string
  email2?: string
  mobile: string
  website?: string
  address1: string
  address2?: string
  address_city_id?: string
  address_district_id?: string
  address_subdistrict_id?: string
  address_city: string
  address_district: string
  address_subdistrict: string
  address_phone?: string
  address_postcode: string
  address_country: string
  job?: string
  position?: string
  office1: string
  office2?: string
  office_city_id?: string
  office_district_id?: string
  office_subdistrict_id?: string
  office_city: string
  office_district: string
  office_subdistrict: string
  office_phone?: string
  office_postcode: string
  office_country: string
  consent: string
  consent_g1: string
  consent_g2: string
  consent_g3: string
  consent_g4: string
  consent_g5: string
  consent_details?: string
  active: string
  student_type: string
  student_type_number: string
  comment?: string
  create_time: string
  create_by: string
  update_time: string
  update_by: string
}