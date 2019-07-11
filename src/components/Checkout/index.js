import React from 'react'
import { useSelector } from 'react-redux'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import styles from './checkout.module.scss'
import CheckoutForm from './CheckoutForm'
import CheckoutItems from './CheckoutItems'
import CheckoutTotal from './CheckoutTotal'

const Checkout = () => {
  const { width } = useWindowDimensions()
  const { cart } = useSelector(state => state.cart)
  const { authenticated } = useSelector(state => state.auth)

  let content = null
  if (authenticated) {
    content = (
      <>
        <div className={styles.container}>
          <div className={styles.column}>
            <h2 className={styles['column-title']}>Shipping Address</h2>
            <CheckoutForm />
          </div>
          <div className={styles.column}>
            <h2 className={styles['column-title']}>Order Summary</h2>
            <div
              className={`${
                width > 800 && cart.length > 5 ? styles.overflow : ''
              }
            ${
              width <= 800 && cart.length > 2 ? styles['overflow-portrait'] : ''
            }`}
            >
              {cart.map(cartItem => (
                <CheckoutItems key={cartItem.id} cartItem={cartItem} />
              ))}
              {cart.length > 0 && <CheckoutTotal />}
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className="fw-thin">Check</span>{' '}
          <span className="fw-regular">Out</span>
        </h1>
        <div className="line-separator mb-4" />
        {content}
      </div>
    </section>
  )
}
export default Checkout
