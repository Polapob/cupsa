import { styled } from '@mui/material'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack/Stack'
import Typography from '@mui/material/Typography'

interface IButtonWithLoadingProps {
  isLoading: boolean
}

const StyledCircularProgress = styled(CircularProgress)({
  color: '#bdbdbd'
})

const ButtonWithLoading = ({ isLoading }: IButtonWithLoadingProps) => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        padding: '12px 0px',
        maxHeight: '48px'
      }}
      disabled={isLoading}
    >
      <Stack
        direction="row"
        spacing="12px"
        justifyContent="center"
        alignItems="center"
      >
        {isLoading && <StyledCircularProgress />}
        <Typography
          fontWeight="bold"
          color="secondary"
          textTransform="none"
          borderRadius="8px"
          sx={{
            color: isLoading ? 'rgba(0,0,0,0.4)' : 'white'
          }}
        >
          {isLoading ? 'Waiting for response' : 'Log In'}
        </Typography>
      </Stack>
    </Button>
  )
}

export default ButtonWithLoading
