import { IFriend } from '../../models/friend'
import { pickBy } from 'lodash'

const filterNull = <T extends Object>(data: T) => {
  return { ...pickBy(data, (key) => key !== null && key !== '') }
}

const viewFriendAdapter = (friend: IFriend) => {
  const {
    system_info,
    general_info: generalInfo,
    contact_info: contactInfo,
    education_info: educationInfo,
    address_info: addressInfo,
    office_info: officeInfo
  } = friend
  const systemInfo = {
    isShowGeneral: system_info.consent_g1 === '1',
    isShowContactInfo: system_info.consent_g2 === '1',
    isShowEducationInfo: system_info.consent_g3 === '1',
    isShowAddressInfo: system_info.consent_g4 === '1',
    isShowOfficeInfo: system_info.consent_g5 === '1'
  }

  return {
    systemInfo,
    generalInfo: filterNull(generalInfo),
    contactInfo: filterNull(contactInfo),
    educationInfo: filterNull(educationInfo),
    addressInfo: filterNull(addressInfo),
    officeInfo: filterNull(officeInfo),
    imageURL1:
      generalInfo.image_url ||
      'https://www.triamudom-alumni.org/member/pic_2/00.jpg',
    imageURL2:
      generalInfo.image_2_url ||
      'https://www.triamudom-alumni.org/member/pic_2/00.jpg'
  }
}

export type ViewFriend = ReturnType<typeof viewFriendAdapter>

export default viewFriendAdapter
