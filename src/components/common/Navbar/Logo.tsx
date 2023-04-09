import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CupsaaIcon from '../../../assets/svg/CupsaaIcon.svg'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'

const Logo = () => {
  return (
    <Link
      to="/"
      style={{
        textDecoration: 'none'
      }}
    >
      <Stack direction="row" spacing="12px" alignItems="center">
        <Box
          sx={{
            width: { lg: '40px', xs: '32px' },
            height: { lg: '40px', xs: '32px' }
          }}
        >
          <img alt="" src={CupsaaIcon} width="100%" height="100%" />
        </Box>

        <Typography
          noWrap
          color="secondary"
          sx={{
            fontSize: { lg: '24px', xs: '20px' },
            lineHeight: '36px',
            fontFamily: 'monospace',
            fontWeight: 700
          }}
        >
          CUPSAA
        </Typography>
      </Stack>
    </Link>
  )
}

export default Logo
