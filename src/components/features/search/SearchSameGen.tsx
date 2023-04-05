import Stack from '@mui/material/Stack'
import { StyledTextField } from '../../common/StyledTextField'
import TabPanel from './TabPanel'
import { Typography, Box, Button, Grid } from '@mui/material'
import { ISearchFriend } from '../../../models/searchFriend'
import usePagination from '../../../hooks/usePagination'
import useSearchSameGen from '../../../hooks/useSearchSameGen'

interface ISearchSameGenProps {
  value: number
}

const SearchSameGen = ({ value }: ISearchSameGenProps) => {
  const { containerRef, paginationData, updatePagination } = usePagination()
  const { friends, onInputChange } = useSearchSameGen({
    updatePagination,
    paginationData
  })

  return (
    <TabPanel index={0} value={value}>
      <Stack
        marginTop="24px"
        marginBottom="24px"
        spacing="12px"
        width="100%"
        ref={containerRef}
      >
        <StyledTextField
          id="same-generation"
          label="พิมพ์ชื่อ หรือ นามสกุล เพื่อน"
          onChange={onInputChange}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            width: '100%',
            rowGap: '12px',
            paddingY: '24px'
          }}
        >
          <Grid container columnSpacing="16px" fontSize="16px" columns={4}>
            <Grid item xs={2}>
              <Typography>ชื่อ-สกุล</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>รุ่น</Typography>
            </Grid>
          </Grid>
          {friends.map((friend: ISearchFriend) => {
            return (
              <Grid
                container
                columnSpacing="16px"
                key={friend.student_id}
                columns={4}
              >
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
                  <Typography fontSize="14px">
                    {friend.generation_id}
                  </Typography>
                </Grid>

                {friend.can_view && (
                  <Grid
                    item
                    xs={1}
                    display="flex"
                    justifyContent="end"
                    alignItems="start"
                  >
                    <Button variant="contained">
                      <Typography textTransform="none" color="secondary">
                        View
                      </Typography>
                    </Button>
                  </Grid>
                )}
              </Grid>
            )
          })}
        </Box>
      </Stack>
    </TabPanel>
  )
}

export default SearchSameGen
