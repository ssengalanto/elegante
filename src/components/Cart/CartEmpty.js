import React from 'react'
import styles from './cart.module.scss'

const CartEmpty = () => (
  <div className={styles.empty}>
    <p>Your cart is currently empty.</p>
  </div>
)

export default CartEmpty
