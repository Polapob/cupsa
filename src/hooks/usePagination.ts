import { useCallback, useEffect, useRef, useState } from 'react'
import { throttle } from 'lodash'

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
    console.log('pagination data', data)
    setPaginationData((prev) => ({
      maxPage: data.maxPage || prev.maxPage,
      page: data.page || prev.page
    }))
  }, [])
  const scrollFn = useRef(
    throttle(() => {
      if (containerRef.current) {
        const pageYOffset = window.pageYOffset
        const currentY = window.screen.height
        const { clientHeight, offsetTop } = containerRef.current
        if (pageYOffset + currentY >= 0.9 * (clientHeight + offsetTop)) {
          let canFetchMore = true
          setPaginationData((prevState) => {
            const { page, maxPage } = prevState
            canFetchMore = page < maxPage
            if (!canFetchMore) {
              return prevState
            }
            return { page: page + 1, maxPage }
          })
          canFetchMore && window.scrollBy(0, -2000)
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
