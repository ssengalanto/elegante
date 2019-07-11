import React from 'react'
import styles from './wishlist.module.scss'

const WishlistEmpty = () => (
  <div className={styles.empty}>
    <p>Your wishlist is currently empty.</p>
  </div>
)

export default WishlistEmpty
