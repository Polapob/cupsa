import { Box, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import ScrollableTabs from '../../components/features/search/ScrollableTabs'
import SearchSameGen from '../../components/features/search/SearchSameGen'

const SearchPage = () => {
  const { user } = useContext(AuthContext)
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Stack
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY="24px"
        paddingX="12px"
        maxWidth={{ lg: 800 }}
        minWidth={{ lg: '500px' }}
        width="90%"
      >
        <Typography fontSize="24px" width="100%" textAlign="center">
          {user.isGeneralMember
            ? 'หน้าค้นหาเพื่อนสำหรับสามัญสมาชิก'
            : 'หน้าค้นหาเพื่อนในรุ่นเดียวกัน'}
        </Typography>
        {user.isGeneralMember ? (
          <ScrollableTabs />
        ) : (
          <Box width="100%">
            <SearchSameGen value={0} />
          </Box>
        )}
      </Stack>
    </Stack>
  )
}

export default SearchPage
