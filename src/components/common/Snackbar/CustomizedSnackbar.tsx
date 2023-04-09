import Alert, { AlertColor } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import { SyntheticEvent, useState } from 'react'

interface ICustomizedSnackbarProps {
  open: boolean
  text: string
  severity: AlertColor
  onClose: (event?: SyntheticEvent | Event, reason?: string) => void
}

const CustomizedSnackbar = ({
  open,
  text,
  severity,
  onClose
}: ICustomizedSnackbarProps) => {
  return (
    <Stack spacing={2} sx={{ width: '100%', position: 'absolute' }}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        onClose={onClose}
      >
        <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
          {text}
        </Alert>
      </Snackbar>
    </Stack>
  )
}

export default CustomizedSnackbar
