import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Logo from './Logo'
import { AuthContext } from '../../../context/AuthContext'
import { useContext } from 'react'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import LogoutIcon from '@mui/icons-material/Logout'
import Tooltip from '@mui/material/Tooltip'
import useLogout from '../../../hooks/useLogout'

const Navbar = () => {
  const { user, isSignIn } = useContext(AuthContext)
  const logout = useLogout()
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

        {isSignIn && (
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
            <Typography
              color="secondary"
              fontWeight="bold"
              fontSize={{ lg: '16px', xs: '14px' }}
            >
              {user.firstName}
            </Typography>
            <Typography color="secondary" fontSize={{ lg: '16px', xs: '14px' }}>
              |
            </Typography>

            <Typography
              color="secondary"
              fontWeight="bold"
              fontSize={{ lg: '16px', xs: '14px' }}
            >
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
            <Tooltip title="ออกจากระบบ">
              <IconButton color="secondary" onClick={logout}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Box>
    </AppBar>
  )
}
export default Navbar
