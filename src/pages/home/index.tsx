import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { StyledTextField } from '../../components/common/StyledTextField'
import useLogin from '../../hooks/useLogin'
import ButtonWithLoading from '../../components/features/login/ButtonWithLoading'
import CustomizedSnackbar from '../../components/common/Snackbar/CustomizedSnackbar'

const HomePage = () => {
  const { isLoading, snackbarInfo, login, onClose } = useLogin()
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
        <ButtonWithLoading isLoading={isLoading} />
      </Stack>
      <CustomizedSnackbar onClose={onClose} {...snackbarInfo} />
    </Box>
  )
}

export default HomePage
