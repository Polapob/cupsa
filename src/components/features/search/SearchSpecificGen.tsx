import { Stack } from '@mui/material'
import { StyledTextField } from '../../common/StyledTextField'
import TabPanel from './TabPanel'
import usePagination from '../../../hooks/usePagination'
import Dropdown from './GenerationDropdown'
import useSearchSpecificGen from '../../../hooks/useSearchSpecificGen'
import SearchTable from './SearchTable'

interface ISearchSpecificGenProps {
  value: number
}

const SearchSpecificGen = ({ value }: ISearchSpecificGenProps) => {
  const { containerRef, paginationData, updatePagination } = usePagination()
  const {
    friends,
    isLoading,
    hasAllInputs,
    onInputChange,
    updateGeneration,
    generation
  } = useSearchSpecificGen({
    paginationData,
    updatePagination
  })

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
          onChange={onInputChange}
        />
        <Dropdown generation={generation} updateGeneration={updateGeneration} />
        {hasAllInputs && (
          <SearchTable isLoading={isLoading} friends={friends} />
        )}
      </Stack>
    </TabPanel>
  )
}

export default SearchSpecificGen
