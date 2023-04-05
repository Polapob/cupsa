import { IUser } from '../../models/user'

const profileAdapter = (profile: IUser) => {
  const {
    consent_g1,
    consent_g2,
    consent_g3,
    consent_g4,
    consent_g5,
    first_name,
    last_name,
    generation_id,
    is_member
  } = profile
  return {
    consentG1: consent_g1 === '1',
    consentG2: consent_g2 === '1',
    consentG3: consent_g3 === '1',
    consentG4: consent_g4 === '1',
    consentG5: consent_g5 === '1',
    firstName: first_name,
    lastName: last_name,
    generationId: parseInt(generation_id),
    isGeneralMember: is_member === '1'
  }
}

export default profileAdapter
