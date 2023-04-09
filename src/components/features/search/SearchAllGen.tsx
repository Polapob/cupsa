import Stack from '@mui/material/Stack'
import TabPanel from './TabPanel'
import { StyledTextField } from '../../common/StyledTextField'
import usePagination from '../../../hooks/usePagination'
import useSearchAllGen from '../../../hooks/useSearchAllGen'
import SearchTable from './SearchTable'

interface ISearchAllGenProps {
  value: number
}

const SearchAllGen = ({ value }: ISearchAllGenProps) => {
  const { containerRef, paginationData, updatePagination } = usePagination()
  const { friends, isLoading, hasKeyword, onInputChange } = useSearchAllGen({
    updatePagination,
    paginationData
  })
  return (
    <TabPanel index={1} value={value}>
      <Stack
        marginTop="24px"
        marginBottom="24px"
        rowGap="12px"
        ref={containerRef}
      >
        <StyledTextField
          id="all-generation"
          label="พิมพ์ชื่อ หรือ นามสกุล เพื่อน"
          onChange={onInputChange}
        />
        {hasKeyword && <SearchTable isLoading={isLoading} friends={friends} />}
      </Stack>
    </TabPanel>
  )
}

export default SearchAllGen
