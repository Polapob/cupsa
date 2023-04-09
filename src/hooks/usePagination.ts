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
  const containerRef = useRef<HTMLDivElement>(null)
  const updatePagination = useCallback((data: Partial<PaginationData>) => {
    if (!data) {
      return
    }
    setPaginationData((prev) => {
      const prevMaxPage = prev.maxPage
      const prevPage = prev.page
      const { page, maxPage } = data
      return {
        maxPage: data.maxPage || prevMaxPage,
        page: Math.min(page || prevPage, (maxPage || prevMaxPage) - 1)
      }
    })
  }, [])
  const scrollFn = useRef(
    debounce(() => {
      if (containerRef.current) {
        const pageYOffset = window.pageYOffset
        const currentY = window.screen.height
        const { clientHeight, offsetTop } = containerRef.current
        if (pageYOffset + currentY >= 0.9 * (clientHeight + offsetTop)) {
          setPaginationData((prevState) => {
            const { page, maxPage } = prevState
            if (page >= maxPage - 1) {
              return prevState
            }
            window.scrollBy(0, -1000)
            return { page: page + 1, maxPage }
          })
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
