import { SelectChangeEvent, Stack } from '@mui/material'
import { StyledTextField } from '../../common/StyledTextField'
import TabPanel from './TabPanel'
import usePagination from '../../../hooks/usePagination'
import Dropdown from './GenerationDropdown'
import { useState } from 'react'

interface ISearchSpecificGenProps {
  value: number
}

const SearchSpecificGen = ({ value }: ISearchSpecificGenProps) => {
  const { containerRef, paginationData, updatePagination } = usePagination()
  const [generation, setGeneration] = useState<string>('')
  const updateGeneration = (event: SelectChangeEvent) => {
    setGeneration(event.target.value)
  }
  console.log('generation')
  return (
    <TabPanel index={2} value={value}>
      <Stack
        marginTop="24px"
        marginBottom="24px"
        rowGap="12px"
        ref={containerRef}
      >
        <StyledTextField
          id="specific-generation"
          label="พิมพ์ชื่อ หรือ นามสกุล เพื่อน"
        />
        <Dropdown generation={generation} updateGeneration={updateGeneration} />
      </Stack>
    </TabPanel>
  )
}

export default SearchSpecificGen
