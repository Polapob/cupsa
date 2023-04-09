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
  if (key === 'sex') {
    return 'เพศ'
  }
  if (key === 'prefix') {
    return 'คำนำหน้าชื่อ'
  }

  return key
}

export default translationAdapter
