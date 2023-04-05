import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CupsaaIcon from '../../../assets/svg/CupsaaIcon.svg'

const Logo = () => {
  return (
    <Stack direction="row" spacing="12px" alignItems="center">
      <img alt="" src={CupsaaIcon} width="40" height="40" />
      <Typography
        noWrap
        color="secondary"
        sx={{
          fontSize: '24px',
          lineHeight: '36px',
          fontFamily: 'monospace',
          fontWeight: 700,
          textDecoration: 'none',
          underline: 'none'
        }}
      >
        CUPSAA
      </Typography>
    </Stack>
  )
}

export default Logo
