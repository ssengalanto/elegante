import PropTypes from 'prop-types'
import React from 'react'
import styles from './checkout.module.scss'

const CheckoutItems = ({ cartItem }) => (
  <>
    <div className={`${styles.items}`}>
      <div className={styles.image}>
        <img
          src={`/products/${cartItem.section}/${cartItem.image}`}
          alt={cartItem.name}
        />
      </div>

      <div className={styles.name}>
        <span className={styles.quantity}>x</span>
        <span>
          {cartItem.quantity} {cartItem.name}
        </span>
        <div className={styles.brand}>
          {Object.keys(cartItem.sizesInCart).map(size => (
            <span key={`${cartItem.id}_${size}`}>
              ({cartItem.sizesInCart[size]}){size}{' '}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.total}>
        <div className={styles.brand}>Total</div>$
        {(cartItem.quantity * cartItem.price).toFixed(2)}
      </div>
    </div>
    <div className={styles.separator} />
  </>
)

CheckoutItems.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    image: PropTypes.string,
    section: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  }).isRequired
}

export default CheckoutItems
