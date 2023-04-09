import { InfoSectionData } from '../../components/features/viewFriend/InfoSection'
import translationAdapter from './translationAdapter'

const infoSectionAdapater = (data: InfoSectionData) => {
  if ('image_url' in data) {
    delete data.image_url
  }
  if ('image_2_url' in data) {
    delete data.image_2_url
  }
  return Object.entries(data).map(([key, value]) => ({
    name: translationAdapter(key),
    value: value || ''
  }))
}

export default infoSectionAdapater
