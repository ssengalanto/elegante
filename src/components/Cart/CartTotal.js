import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import GoShopBtn from '../Shared/Buttons/GoShopBtn'
import styles from './cart.module.scss'

const CartTotal = memo(({ proceedToCheckoutHandler }) => {
  const { cart } = useSelector(state => state.cart)

  return (
    <div className={styles.subtotal}>
      <div className={styles['subtotal-content']}>
        <p className={styles['subtotal-title']}>
          <span className="fw-thin">Sub</span>
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
      <p className={styles['subtotal-promo']}>
        Discounts, promotions, and shipping fees will be calculated in the
        checkout page.
      </p>
      <div className={styles['subtotal-button']}>
        <GoShopBtn className="btn--dark">Continue Shopping</GoShopBtn>
        <button
          type="button"
          className={`btn--dark ${styles['btn-spacing']}`}
          disabled={!cart.length}
          onClick={proceedToCheckoutHandler}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  )
})

CartTotal.propTypes = {
  proceedToCheckoutHandler: PropTypes.func.isRequired
}

export default CartTotal
