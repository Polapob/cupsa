import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { ISearchFriend } from '../../../models/searchFriend'
import Button from '@mui/material/Button'

interface ISearchRowProps {
  friend: ISearchFriend
}

const SearchRow = ({ friend }: ISearchRowProps) => {
  return (
    <Grid container columns={4}>
      <Grid
        item
        xs={2}
        display="flex"
        alignItems="center"
        justifyContent="start"
      >
        <Typography fontSize="14px">{friend.full_name}</Typography>
      </Grid>
      <Grid
        item
        xs={1}
        display="flex"
        alignItems="center"
        justifyContent="start"
      >
        <Typography fontSize="14px">{friend.generation_id}</Typography>
      </Grid>

      {
        <Grid
          item
          xs={1}
          display="flex"
          justifyContent="end"
          alignItems="start"
          visibility={friend.can_view ? 'visible' : 'hidden'}
        >
          <Button variant="contained">
            <Typography textTransform="none" color="secondary">
              View
            </Typography>
          </Button>
        </Grid>
      }
    </Grid>
  )
}

export default SearchRow
