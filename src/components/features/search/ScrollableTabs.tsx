import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useState, SyntheticEvent } from 'react'
import SearchSameGen from './SearchSameGen'
import SearchAllGen from './SearchAllGen'
import SearchSpecificGen from './SearchSpecificGen'

const ScrollableTabs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        bgcolor: 'background.paper'
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="หาเพื่อนในรุ่น" sx={{ fontSize: '16px' }} />
        <Tab label="หาเพื่อนต่างรุ่น" sx={{ fontSize: '16px' }} />
        <Tab label="หาเพื่อนตามรุ่นที่ระบุ" sx={{ fontSize: '16px' }} />
      </Tabs>
      {value === 0 && <SearchSameGen value={value} />}
      {value === 1 && <SearchAllGen value={value} />}
      {value === 2 && <SearchSpecificGen value={value} />}
    </Box>
  )
}

export default ScrollableTabs
