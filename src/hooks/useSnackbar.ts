import { AlertColor } from '@mui/material/Alert'
import { SyntheticEvent, useState } from 'react'

const useSnackbar = () => {
  const [snackbarInfo, setSnackbarInfo] = useState<{
    open: boolean
    text: string
    severity: AlertColor
  }>({
    open: false,
    text: '',
    severity: 'error'
  })

  const onDisplay = (text: string, severity = 'error' as AlertColor) => {
    setSnackbarInfo({ open: true, severity, text })
  }
  const onClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbarInfo((prevInfo) => ({ ...prevInfo, open: false, text: '' }))
  }
  return { snackbarInfo, onDisplay, onClose }
}

export default useSnackbar
