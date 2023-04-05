import Stack from '@mui/material/Stack'
import TabPanel from './TabPanel'
import { StyledTextField } from '../../common/StyledTextField'

interface ISearchAllGenProps {
  value: number
}

const SearchAllGen = ({ value }: ISearchAllGenProps) => {
  return (
    <TabPanel index={1} value={value}>
      <Stack marginTop="24px" marginBottom="24px" rowGap="12px">
        <StyledTextField
          id="all-generation"
          label="พิมพ์ชื่อ หรือ นามสกุล เพื่อน"
        />
      </Stack>
    </TabPanel>
  )
}

export default SearchAllGen
