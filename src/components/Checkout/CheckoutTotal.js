import React from 'react'
import { useSelector } from 'react-redux'
import styles from './checkout.module.scss'

const CheckoutTotal = () => {
  const { cart } = useSelector(state => state.cart)
  return (
    <div className={`${styles.subtotal}`}>
      <p className={styles['subtotal-title']}>
        <span className="fw-extra-light">Sub</span>
        <span className="fw-semi-bold">Total</span>
      </p>
      <p className={styles['subtotal-price']}>
        $
        {cart
          .reduce(
            (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
            0
          )
          .toFixed(2)}
      </p>
    </div>
  )
}

export default CheckoutTotal
