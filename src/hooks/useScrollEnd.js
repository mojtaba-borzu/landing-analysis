import { useEffect } from 'react'

const useScrollEnd = (
  refElem,
  onScrollEnd,
  dataTotalCount,
  paginationNumber
) => {
  useEffect(() => {
    let sc = refElem.current

    setTimeout(() => {
      if (sc && paginationNumber == 1) {
        sc.scrollTop = 0
      }
    }, 500)
  }, [paginationNumber])

  useEffect(() => {
    let sc = refElem.current
    function updateScrollPosition() {
      if (sc && sc.offsetHeight + sc.scrollTop >= sc.scrollHeight - 40) {
        if (paginationNumber <= dataTotalCount / 8) {
          setTimeout(() => onScrollEnd(paginationNumber + 1), 200)
        }
      }
    }

    if (refElem && sc) {
      sc.addEventListener('scroll', updateScrollPosition, false)
    }

    return function cleanup() {
      sc && sc.removeEventListener('scroll', updateScrollPosition, false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })
}

export default useScrollEnd
