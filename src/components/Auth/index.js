import React from 'react'
import { useSelector } from 'react-redux'
import useAuthModal from '../../hooks/useAuthModal'
import useFocusManage from '../../hooks/useFocusManage'
import Modal from '../Shared/Modal'
import AuthSignin from './AuthSignin'
import AuthSignup from './AuthSignup'

const Auth = () => {
  const { error, authModal } = useSelector(state => state.auth)
  const {
    initRef,
    lastRef,
    tabKeyDownHandler,
    shiftTabKeyDownHandler
  } = useFocusManage()
  const {
    showSigninHandler,
    showSignupHandler,
    closeModalHandler
  } = useAuthModal(error)

  return (
    <Modal
      auth
      show={authModal.modal}
      closeModal={closeModalHandler}
      shiftTabKeyDownHandler={shiftTabKeyDownHandler}
      ref={initRef}
    >
      <AuthSignin
        show={authModal.signin}
        switchToSignup={showSignupHandler}
        ref={lastRef}
        tabKeyDownHandler={tabKeyDownHandler}
      />
      <AuthSignup
        show={authModal.signup}
        switchToSignin={showSigninHandler}
        ref={lastRef}
        tabKeyDownHandler={tabKeyDownHandler}
      />
    </Modal>
  )
}

export default Auth
