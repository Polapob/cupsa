import { Stack } from '@mui/material'
import { StyledTextField } from '../../common/StyledTextField'
import TabPanel from './TabPanel'

interface ISearchSpecificGenProps {
  value: number
}

const SearchSpecificGen = ({ value }: ISearchSpecificGenProps) => {
  return (
    <TabPanel index={2} value={value}>
      <Stack marginTop="24px" marginBottom="24px" rowGap="12px">
        <StyledTextField
          id="specific-generation"
          label="พิมพ์ชื่อ หรือ นามสกุล เพื่อน"
        />
        <StyledTextField id="generation" label="พิมพ์รุ่นของเพื่อน" />
      </Stack>
    </TabPanel>
  )
}

export default SearchSpecificGen
