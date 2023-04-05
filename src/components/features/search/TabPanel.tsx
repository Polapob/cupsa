import Box from '@mui/material/Box'
import { ReactNode } from 'react'

interface ITabPanelProps {
  children?: ReactNode
  index: number
  value: number
}

const TabPanel = ({ children, value, index }: ITabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: '100%' }}
    >
      {value === index && <Box width="100%">{children}</Box>}
    </div>
  )
}

export default TabPanel
