import { TextField, styled } from '@mui/material'

const StyledTextField = styled(TextField)({
  borderRadius: '8px',
  background: '#F3F3F3',
  '& label': {
    color: 'rgba(0, 0, 0, 0.4)'
  },
  input: {
    '&::placeholder': {
      color: 'rgba(0, 0, 0, 0.5)'
    }
  }
})

export default StyledTextField
