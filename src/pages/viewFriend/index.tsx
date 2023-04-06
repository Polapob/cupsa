import Stack from '@mui/material/Stack'
import { useEffect, useState } from 'react'
import { apiService } from '../../services'
import { useParams, useNavigate } from 'react-router-dom'
import viewFriendAdapter, {
  ViewFriend
} from '../../utils/adapter/viewFriendAdapter'
import { Box, Button, Typography } from '@mui/material'
import InfoSection from '../../components/features/viewFriend/InfoSection'

const ViewFriendPage = () => {
  const [friend, setFriend] = useState<ViewFriend | undefined>(undefined)
  const { friendId } = useParams<{ friendId: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchFriend = async () => {
      if (!friendId) {
        return
      }
      const { result } = await apiService.viewFriend(friendId)
      console.log(result)
      setFriend(viewFriendAdapter(result))
    }
    fetchFriend()
  }, [friendId])

  if (!friend) {
    return
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="start">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="start"
        padding="24px 12px"
        maxWidth={{ lg: '800px' }}
        width="100%"
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              navigate(-1)
            }}
            sx={{ width: '80px', mb: '24px' }}
          >
            <Typography color="secondary">Back</Typography>
          </Button>
          <Stack direction="column" spacing="24px" width="100%">
            <InfoSection title="ข้อมูลทั่วไป" data={friend.generalInfo} />
            {friend.systemInfo.isShowEducationInfo && (
              <InfoSection title="ข้อมูลการศึกษา" data={friend.educationInfo} />
            )}
            {friend.systemInfo.isShowContactInfo && (
              <InfoSection title="ข้อมูลการศึกษา" data={friend.contactInfo} />
            )}
            {friend.systemInfo.isShowAddressInfo && (
              <InfoSection title="ข้อมูลการศึกษา" data={friend.addressInfo} />
            )}
            {friend.systemInfo.isShowOfficeInfo && (
              <InfoSection title="ข้อมูลการศึกษา" data={friend.officeInfo} />
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default ViewFriendPage
