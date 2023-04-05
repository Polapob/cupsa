import {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { ISearchFriend } from '../models/searchFriend'
import { apiService } from '../services'
import { PaginationData } from './usePagination'

interface UseSearchSameGen {
  updatePagination?: ({ maxPage, page }: Partial<PaginationData>) => void
  paginationData: PaginationData
}

const useSearchSameGen = ({
  paginationData,
  updatePagination
}: UseSearchSameGen) => {
  const [friends, setFriends] = useState<ISearchFriend[]>([])
  const [keyword, setKeyword] = useState<string>('')
  const lastFetchData = useRef({ keyword: '', lastPage: -1 })
  const searchFriends = useCallback(
    async (keyword: string, page: number) => {
      if (!keyword) {
        return
      }
      const response = await apiService.searchFriendInSameGeneration({
        keyword,
        limit: 50,
        offset: page * 50
      })
      const {
        result: { data, key_order, struct }
      } = response
      const friendResult = key_order.map((friendId) => {
        return data[friendId]
      })
      const maxPage = Math.ceil(struct.all / 50)
      if (page === 0) {
        updatePagination && updatePagination({ maxPage, page })
        setFriends(friendResult)
        return
      }
      updatePagination && updatePagination({ maxPage, page })

      setFriends((prevFriends) => {
        return [...prevFriends, ...friendResult]
      })
    },
    [updatePagination]
  )
  const onInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    async (event) => {
      event.preventDefault()
      const input = event.target.value
      setKeyword(input)
    },
    []
  )
  useEffect(() => {
    if (!keyword) {
      setFriends([])
    }
    if (
      keyword === lastFetchData.current.keyword &&
      paginationData.page <= lastFetchData.current.lastPage
    ) {
      return
    }
    if (lastFetchData.current.keyword !== keyword) {
      searchFriends(keyword, 0)
      lastFetchData.current.keyword = keyword
      lastFetchData.current.lastPage = 0
      return
    }
    if (
      paginationData.page < paginationData.maxPage &&
      lastFetchData.current.keyword === keyword
    ) {
      searchFriends(keyword, paginationData.page)
      lastFetchData.current.keyword = keyword
      lastFetchData.current.lastPage = paginationData.page
    }
  }, [paginationData.page, paginationData.maxPage, keyword, searchFriends])

  return { friends, onInputChange }
}

export default useSearchSameGen
