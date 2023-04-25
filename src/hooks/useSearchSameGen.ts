import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { ISearchFriend } from '../models/searchFriend'
import { apiService } from '../services'
import { PaginationData } from './usePagination'
import { debounce } from 'lodash'

interface UseSearchSameGen {
  updatePagination?: ({ maxPage, page }: Partial<PaginationData>) => void
  paginationData: PaginationData
}

const useSearchSameGen = ({
  paginationData,
  updatePagination
}: UseSearchSameGen) => {
  const [friends, setFriends] = useState<ISearchFriend[]>([])
  const [initialResult, setInitialResult] = useState<ISearchFriend[]>([])
  const [keyword, setKeyword] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const hasKeyword = keyword !== ''
  const lastKeyword = useRef('')
  const fetchInitialFriends = useCallback(async () => {
    try {
      const response = await apiService.searchFriendInSameGeneration({
        keyword: '',
        offset: 0,
        limit: 20
      })
      const { data, key_order } = response.result
      const friendResult = key_order.map((friendId) => {
        return data[friendId]
      })
      setInitialResult(friendResult)
    } catch (err) {
      console.log(err)
    }
  }, [])

  const searchFriends = useCallback(
    async (keyword: string, page: number) => {
      try {
        setLoading(true)
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
      } finally {
        setLoading(false)
      }
    },
    [updatePagination]
  )
  const onInputChange = useRef(
    debounce((event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      setKeyword(event.target.value)
    }, 500)
  ).current

  useEffect(() => {
    if (!keyword) {
      setFriends([])
      return
    }
    if (lastKeyword.current !== keyword) {
      searchFriends(keyword, 0)
      lastKeyword.current = keyword
      return
    }

    searchFriends(keyword, paginationData.page)
    lastKeyword.current = keyword
  }, [paginationData.page, keyword, searchFriends])

  useEffect(() => {
    return () => {
      onInputChange.cancel()
    }
  }, [onInputChange])

  useEffect(() => {
    fetchInitialFriends()
  }, [fetchInitialFriends])

  return {
    friends: hasKeyword ? friends : initialResult,
    isLoading,
    onInputChange
  }
}

export default useSearchSameGen
