import { InfoSectionData } from '../../components/features/viewFriend/InfoSection'

const infoSectionAdapater = (data: InfoSectionData) => {
  if ('image_url' in data) {
    delete data.image_url
  }
  if ('image_2_url' in data) {
    delete data.image_2_url
  }

  return Object.entries(data).map(([key, value]) => ({
    name: key,
    value: value || ''
  }))
}

export default infoSectionAdapater
