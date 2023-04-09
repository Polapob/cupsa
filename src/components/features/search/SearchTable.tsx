import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { ISearchFriend } from '../../../models/searchFriend'
import SearchRow from './SearchRow'
import CancelIcon from '@mui/icons-material/Cancel'

interface ISearchTableProps {
  friends: ISearchFriend[]
  isLoading: boolean
}

const SearchTable = ({ friends, isLoading }: ISearchTableProps) => {
  const isEmptyFriend = friends.length === 0 && !isLoading

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        width: '100%',
        rowGap: '12px',
        paddingY: '24px',
        paddingX: '0px'
      }}
    >
      <Grid container fontSize="16px" columns={4} padding="0">
        <Grid item xs={2}>
          <Typography>ชื่อ-สกุล</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>รุ่น</Typography>
        </Grid>
      </Grid>

      {isEmptyFriend ? (
        <Box
          sx={{
            paddingY: '24px',
            display: 'flex',
            flexDirection: 'column',
            gapY: '12px',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <CancelIcon fontSize="medium" />
          <Typography>ไม่พบข้อมูลเพื่อนในฐานข้อมูล</Typography>
        </Box>
      ) : (
        friends.map((friend: ISearchFriend) => {
          return <SearchRow friend={friend} key={friend.student_id} />
        })
      )}
    </Box>
  )
}

export default SearchTable
