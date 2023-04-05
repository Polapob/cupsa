import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const pages = ['Products', 'Pricing', 'Blog']

const NavLists = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
          {page}
        </Button>
      ))}
    </Box>
  )
}

export default NavLists
