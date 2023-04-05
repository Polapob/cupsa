import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import ScrollableTabs from '../../components/features/search/ScrollableTabs'

const SearchPage = () => {
  const { user } = useContext(AuthContext)
  return (
    <Stack display="flex" justifyContent="center" alignItems={'center'}>
      <Stack
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY="24px"
        paddingX="12px"
        maxWidth={{ lg: 800 }}
        onScroll={() => {
          console.log('is scrolled V3')
        }}
      >
        <Typography fontSize="24px">
          {user.isGeneralMember
            ? 'หน้าค้นหาเพื่อนสำหรับสามัญสมาชิก'
            : 'หน้าค้นหาเพื่อนในรุ่นเดียวกัน'}
        </Typography>
        {user.isGeneralMember ? <ScrollableTabs /> : <div></div>}
      </Stack>
    </Stack>
  )
}

export default SearchPage
