import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { StyledTextField } from '../../components/common/StyledTextField'
import Button from '@mui/material/Button'
import useLogin from '../../hooks/useLogin'

const HomePage = () => {
  const { login } = useLogin()
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      rowGap="24px"
      padding="0px 16px"
    >
      <Stack
        component="form"
        display="flex"
        direction="column"
        margin="32px 0px"
        spacing="36px"
        sx={{
          maxWidth: { lg: '800px' },
          width: '100%'
        }}
        onSubmit={login}
      >
        <Typography fontSize="24px" fontWeight="bold">
          Log In
        </Typography>
        <Stack display="flex" direction="column" spacing="16px">
          <StyledTextField
            id="username"
            label="Username or Email"
            placeholder="Username or Email"
            variant="outlined"
            sx={{
              borderRadius: '8px',
              background: '#F3F3F3'
            }}
          />
          <StyledTextField
            id="password"
            label="Password"
            type="password"
            placeholder="Password"
            variant="outlined"
            sx={{ borderRadius: '8px', background: '#F3F3F3' }}
          />
        </Stack>
        <Button type="submit" variant="contained" sx={{ padding: '12px 0px' }}>
          <Typography
            fontWeight="bold"
            color="secondary"
            textTransform="none"
            borderRadius="8px"
          >
            Log In
          </Typography>
        </Button>
      </Stack>
    </Box>
  )
}

export default HomePage
