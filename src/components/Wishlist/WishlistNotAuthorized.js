import React from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions'
import styles from './wishlist.module.scss'

const WishlistNotAuthorized = () => {
  const dispatch = useDispatch()

  return (
    <div className={styles.unauthorized}>
      <p>
        You must{' '}
        <button type="button" onClick={() => dispatch(actions.showSignin())}>
          sign in
        </button>{' '}
        first before you can add items into your wishlist.
      </p>
    </div>
  )
}

export default WishlistNotAuthorized
