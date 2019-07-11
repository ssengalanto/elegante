import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import useModalTransition from '../../../hooks/animations/useModalTransition'
import CloseIcon from '../../SVGs/svg-icons/CloseIcon'
import Backdrop from '../Backdrop'
import styles from './modal.module.scss'

const Modal = forwardRef(
  ({ children, closeModal, show, mode, auth, shiftTabKeyDownHandler }, ref) => {
    const { transitions, animated } = useModalTransition(show)

    const escKeyHandler = e => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    return (
      <Backdrop show={show} clicked={closeModal}>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.section
                key={key}
                style={props}
                aria-hidden
                onKeyDown={escKeyHandler}
                className={auth ? styles.auth : styles.container}
              >
                <button
                  type="button"
                  onKeyDown={shiftTabKeyDownHandler}
                  ref={ref}
                  className={
                    mode === 'light'
                      ? styles['default-btn']
                      : styles['dark-btn']
                  }
                  onClick={closeModal}
                  aria-label="close"
                >
                  <CloseIcon />
                </button>
                {children}
              </animated.section>
            )
        )}
      </Backdrop>
    )
  }
)

Modal.defaultProps = {
  mode: 'dark',
  auth: undefined,
  shiftTabKeyDownHandler: undefined
}

Modal.propTypes = {
  mode: PropTypes.string,
  auth: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  shiftTabKeyDownHandler: PropTypes.func
}

export default Modal
