import { useState } from 'react'

const useToggle = (initialState = false) => {
  const [show, setShow] = useState(initialState)

  const toggleHandler = () => {
    setShow(!show)
  }

  const openHandler = () => {
    setShow(true)
  }

  const closeHandler = () => {
    setShow(false)
  }

  return { show, openHandler, closeHandler, toggleHandler }
}

export default useToggle
