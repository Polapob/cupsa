import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Logo from './Logo'
import { AuthContext } from '../../../context/AuthContext'
import { useContext } from 'react'
import Typography from '@mui/material/Typography'

const Navbar = () => {
  const { user } = useContext(AuthContext)
  return (
    <AppBar
      position="static"
      sx={{
        paddingX: '16px',
        margin: '0px',
        minHeight: { xs: '60px' },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: { lg: '800px' }
        }}
      >
        <Stack direction="row" spacing="24px" alignItems="center">
          <Logo />
        </Stack>

        {user.generationId && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              columnGap: '8px',
              fontSize: { lg: '16px', xs: '12px' }
            }}
          >
            <Typography color="secondary" fontWeight="bold">
              {user.firstName}
            </Typography>
            <Typography color="secondary">|</Typography>

            <Typography color="secondary" fontWeight="bold">
              {user.isGeneralMember ? 'สามัญสมาชิก' : 'ไม่เป็นสามัญสมาชิก'}
            </Typography>
            <Box
              sx={{
                borderRadius: '9999px',
                width: '9px',
                height: '9px',
                backgroundColor: user.isGeneralMember ? '#15C183' : '#EE4B2B'
              }}
            />
          </Box>
        )}
      </Box>
    </AppBar>
  )
}
export default Navbar
