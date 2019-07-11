import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions'

const useAuthModal = (error = null) => {
  const dispatch = useDispatch()

  const logoutUserHandler = useCallback(() => {
    dispatch(actions.signoutUser())
  }, [dispatch])

  const showSigninHandler = useCallback(() => {
    if (error) {
      dispatch(actions.clearError())
    }
    dispatch(actions.showSignin())
  }, [dispatch, error])

  const showSignupHandler = useCallback(() => {
    if (error) {
      dispatch(actions.clearError())
    }
    dispatch(actions.showSignup())
  }, [dispatch, error])

  const closeModalHandler = useCallback(() => {
    if (error) {
      dispatch(actions.clearError())
    }
    dispatch(actions.closeAuthModal())
  }, [dispatch, error])

  return {
    logoutUserHandler,
    showSigninHandler,
    showSignupHandler,
    closeModalHandler
  }
}

export default useAuthModal
