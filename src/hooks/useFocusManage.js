import { createRef, useEffect } from 'react'

const useFocusManage = () => {
  const initRef = createRef()
  const lastRef = createRef()

  useEffect(() => {
    if (initRef.current) {
      initRef.current.focus()
    }
  }, [initRef])

  const shiftTabKeyDownHandler = e => {
    if (e.shiftKey && e.key === 'Tab') {
      lastRef.current.focus()
    }
  }

  const tabKeyDownHandler = e => {
    if (e.key === 'Tab') {
      initRef.current.focus()
    }
  }

  return { initRef, lastRef, tabKeyDownHandler, shiftTabKeyDownHandler }
}

export default useFocusManage
