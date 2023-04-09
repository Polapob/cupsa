import { debounce } from 'lodash'
import { useState, useRef, useCallback, ChangeEvent, useEffect } from 'react'
import { ISearchFriend } from '../models/searchFriend'
import { apiService } from '../services'
import { PaginationData } from './usePagination'
import useGeneration from './useGeneration'
import checkValidGen from '../utils/search/checkValidGen'

interface UseSearchSpecificGen {
  paginationData: PaginationData
  updatePagination?: ({ maxPage, page }: Partial<PaginationData>) => void
}

const useSearchSpecificGen = ({
  paginationData,
  updatePagination
}: UseSearchSpecificGen) => {
  const [friends, setFriends] = useState<ISearchFriend[]>([])
  const [keyword, setKeyword] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const { generation, generationLists, updateGeneration } = useGeneration()
  const lastKeyword = useRef('')
  const lastGeneration = useRef('')
  const hasAllInputs =
    checkValidGen(generationLists, generation) && keyword !== ''

  const searchFriends = useCallback(
    async (keyword: string, generation: string, page: number) => {
      try {
        setLoading(true)
        if (!keyword && checkValidGen(generationLists, generation)) {
          return
        }
        const response = await apiService.searchFriendWithPrevillege(
          {
            keyword,
            limit: 50,
            offset: page * 50
          },
          generation
        )
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
    [generationLists, updatePagination]
  )
  const onInputChange = useRef(
    debounce((event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      setKeyword(event.target.value)
    }, 500)
  ).current

  useEffect(() => {
    if (!keyword || !generation) {
      setFriends([])
      return
    }
    if (
      lastKeyword.current !== keyword ||
      lastGeneration.current !== generation
    ) {
      searchFriends(keyword, generation, 0)
      lastKeyword.current = keyword
      lastGeneration.current = generation
      return
    }

    searchFriends(keyword, generation, paginationData.page)
    lastKeyword.current = keyword
  }, [paginationData.page, keyword, generation, searchFriends])

  useEffect(() => {
    return () => {
      onInputChange.cancel()
    }
  }, [onInputChange])

  return {
    friends,
    isLoading,
    hasAllInputs,
    onInputChange,
    generation,
    generationLists,
    updateGeneration
  }
}

export default useSearchSpecificGen
