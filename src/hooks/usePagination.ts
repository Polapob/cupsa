import { useCallback, useEffect, useRef, useState } from 'react'
import { debounce } from 'lodash'

export type PaginationData = {
  page: number
  maxPage: number
}

const usePagination = () => {
  const [paginationData, setPaginationData] = useState<PaginationData>({
    page: 0,
    maxPage: 1
  })
  console.log('pg data =', paginationData)
  const containerRef = useRef<HTMLDivElement>(null)
  const updatePagination = useCallback((data: Partial<PaginationData>) => {
    if (!data) {
      return
    }
    const { page, maxPage } = data
    if (page && maxPage && page + 1 >= maxPage) {
      return
    }
    setPaginationData((prev) => ({
      maxPage: data.maxPage || prev.maxPage,
      page: data.page || prev.page
    }))
  }, [])
  const scrollFn = useRef(
    debounce(() => {
      if (containerRef.current) {
        const pageYOffset = window.pageYOffset
        const currentY = window.screen.height
        const { clientHeight, offsetTop } = containerRef.current
        if (pageYOffset + currentY >= 0.9 * (clientHeight + offsetTop)) {
          let canFetchMore = true
          setPaginationData((prevState) => {
            const { page, maxPage } = prevState
            canFetchMore = page + 1 < maxPage
            if (!canFetchMore) {
              return prevState
            }
            return { page: page + 1, maxPage }
          })
          canFetchMore && window.scrollBy(0, -400)
        }
      }
    }, 500)
  ).current

  useEffect(() => {
    window.addEventListener('scroll', scrollFn)
    return () => {
      window.removeEventListener('scroll', scrollFn)
      scrollFn.cancel()
    }
  }, [scrollFn])
  return { containerRef, paginationData, updatePagination }
}

export default usePagination
