import { useState } from 'react'

const useFormLoading = () => {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const closeModalHandler = () => {
    setSuccess(false)
  }

  return { success, loading, setSuccess, setLoading, closeModalHandler }
}

export default useFormLoading
