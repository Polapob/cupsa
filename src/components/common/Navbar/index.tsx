import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Logo from './Logo'
import NavLists from './NavLists'

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        paddingX: '16px',
        margin: '0px',
        minHeight: { xs: '60px' },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Stack direction="row" spacing="24px" alignItems="center">
          <Logo />
          <NavLists />
        </Stack>

        <Box>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </Box>
      </Box>
    </AppBar>
  )
}
export default Navbar
