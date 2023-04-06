import Stack from '@mui/material/Stack'
import { StyledTextField } from '../../common/StyledTextField'
import TabPanel from './TabPanel'
import usePagination from '../../../hooks/usePagination'
import useSearchSameGen from '../../../hooks/useSearchSameGen'
import SearchTable from './SearchTable'

interface ISearchSameGenProps {
  value: number
}

const SearchSameGen = ({ value }: ISearchSameGenProps) => {
  const { containerRef, paginationData, updatePagination } = usePagination()
  const { friends, onInputChange } = useSearchSameGen({
    updatePagination,
    paginationData
  })

  return (
    <TabPanel key={value} index={0} value={value}>
      <Stack
        marginTop="24px"
        marginBottom="24px"
        spacing="12px"
        width="100%"
        ref={containerRef}
      >
        <StyledTextField
          id="same-generation"
          label="พิมพ์ชื่อ หรือ นามสกุล เพื่อน"
          onChange={onInputChange}
        />
        <SearchTable friends={friends} />
      </Stack>
    </TabPanel>
  )
}

export default SearchSameGen
