const translationAdapter = (key: string) => {
  if (key === 'tu_id') {
    return 'รหัสนักเรียนเตรียมอุดม'
  }
  if (key === 'first_name') {
    return 'ชื่อจริง'
  }
  if (key === 'last_name') {
    return 'นามสกุล'
  }
  if (key === 'nick_name') {
    return 'ชื่อเล่น'
  }
  if (key === 'first_name_eng') {
    return 'ชื่อจริง (ภาษาอังกฤษ)'
  }
  if (key === 'last_name_eng') {
    return 'นามสกุล (ภาษาอังกฤษ)'
  }
  if (key === 'first_name_old') {
    return 'ชื่อจริง (เก่า)'
  }
  if (key === 'last_name_old') {
    return 'นามสกุล (เก่า)'
  }
  if (key === 'sex') {
    return 'เพศ'
  }
  if (key === 'prefix') {
    return 'คำนำหน้าชื่อ'
  }
  if (key === 'job') {
    return 'อาชีพ'
  }
  if (key === 'position') {
    return 'ตำแหน่ง'
  }
  if (key === 'email') {
    return 'อีเมล'
  }
  if (key === 'mobile') {
    return 'เบอร์โทรศัพท์'
  }
  if (key === 'website') {
    return 'เว็ปไซต์'
  }
  if (key === 'generation_id') {
    return 'รุ่นที่'
  }
  if (key === 'm4_room_id') {
    return 'ห้องเรียน ม.4'
  }

  if (key === 'm5_room_id') {
    return 'ห้องเรียน ม.5'
  }

  if (key === 'm6_room_id') {
    return 'ห้องเรียน ม.6'
  }

  if (key === 'education_detail') {
    return 'รายละเอียดข้อมูลทางการศึกษา'
  }

  if (key === 'office1') {
    return 'ออฟฟิศที่ 1'
  }

  if (key === 'office2') {
    return 'ออฟฟิศที่ 2'
  }

  if (key === 'office_city') {
    return 'เมืองที่ทำงาน'
  }

  if (key === 'office_district') {
    return 'ตำบลที่ทำงาน'
  }

  if (key === 'office_subdistrict') {
    return 'อำเภอที่ทำงาน'
  }

  if (key === 'office_phone') {
    return 'เบอร์ติดต่อออฟฟิศ'
  }

  if (key === 'office_postcode') {
    return 'รหัสไปรษณีย์ออฟฟิศ'
  }

  if (key === 'office_country') {
    return 'ประเทศที่ทำงาน'
  }

  return key
}

export default translationAdapter
