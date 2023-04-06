import Stack from '@mui/material/Stack'
import { ViewFriend } from '../../../utils/adapter/viewFriendAdapter'
import Typography from '@mui/material/Typography'
import SectionTable from './SectionTable'
import infoSectionAdapater from '../../../utils/adapter/infosectionAdapter'

type ViewFriendInfo = Omit<ViewFriend, 'systemInfo'>
export type InfoSectionData = ViewFriendInfo[keyof ViewFriendInfo]

interface IInfoSectionProps {
  title: string
  data: InfoSectionData
}

const InfoSection = ({ title, data }: IInfoSectionProps) => {
  return (
    <Stack direction="column" spacing="16px">
      <Typography fontWeight="bold" fontSize="20px">
        {title}
      </Typography>
      <SectionTable rows={infoSectionAdapater(data)} />
    </Stack>
  )
}

export default InfoSection
