import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { PaginationData } from './usePagination'
import { ISearchFriend } from '../models/searchFriend'
import { apiService } from '../services'
import { debounce } from 'lodash'

interface UseSearchSameGen {
  updatePagination?: ({ maxPage, page }: Partial<PaginationData>) => void
  paginationData: PaginationData
}

const useSearchAllGen = ({
  updatePagination,
  paginationData
}: UseSearchSameGen) => {
  const [friends, setFriends] = useState<ISearchFriend[]>([])
  const [keyword, setKeyword] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const lastKeyword = useRef('')
  const hasKeyword = keyword !== ''

  const searchFriends = useCallback(
    async (keyword: string, page: number) => {
      try {
        setLoading(true)
        if (!keyword) {
          return
        }
        const response = await apiService.searchFriendWithPrevillege({
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
          updatePagination && updatePagination({ maxPage })
          setFriends(friendResult)
          return
        }
        updatePagination && updatePagination({ maxPage })

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
    debounce(async (event: ChangeEvent<HTMLInputElement>) => {
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

  return { friends, isLoading, hasKeyword, onInputChange }
}

export default useSearchAllGen
