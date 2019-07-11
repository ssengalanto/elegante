import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import useUnmountTransition from '../../hooks/animations/useUnmountTransition'
import RemoveIcon from '../SVGs/svg-icons/RemoveIcon'
import styles from './cart-items.module.scss'

const CartItems = memo(
  ({
    cartItem,
    removeCartItem,
    cartQuantityOnChange,
    cartQuantityOnKeyPress
  }) => {
    const [show, setShow] = useState(true)
    const { transitions, animated } = useUnmountTransition(show)

    return transitions.map(
      ({ item, key, props }) =>
        item && (
          <animated.div key={key} style={props}>
            <div className={styles.container}>
              <div className={styles['primary-column']}>
                <div className={styles.image}>
                  <img
                    src={`/products/${cartItem.section}/${cartItem.image}`}
                    alt={cartItem.name}
                  />
                </div>
              </div>

              <div className={styles['secondary-column']}>
                <div className={styles['secondary-col1']}>
                  <p className={styles.brand}>{cartItem.brand}</p>
                  <div className={styles.name}>
                    <p>
                      {cartItem.name} ({cartItem.size})
                    </p>
                  </div>
                </div>

                <div className={styles.separator} />

                <div className={styles['secondary-col2']}>
                  <div className={styles.price}>
                    <span className={styles['column-title']}>Price</span>
                    <p>${cartItem.price.toFixed(2)}</p>
                  </div>

                  <div className={styles.quantity}>
                    <label htmlFor="cart-quantity" className={styles.label}>
                      quantity
                      <input
                        id="cart-quantity"
                        type="number"
                        value={cartItem.quantity.toString()}
                        min="1"
                        max="99"
                        placeholder={cartItem.quantity}
                        onKeyPress={cartQuantityOnKeyPress}
                        onChange={e =>
                          cartQuantityOnChange(cartItem, cartItem.size, e)
                        }
                      />
                    </label>
                  </div>

                  <div className={styles.total}>
                    <span className={styles['column-title']}>Total</span>
                    <p>$ {(cartItem.price * cartItem.quantity).toFixed(2)}</p>
                  </div>

                  <div className={styles['remove-btn']}>
                    <span className={styles['column-title']}>Remove</span>
                    <button
                      type="button"
                      aria-label="remove cart item"
                      onClick={() => {
                        setShow(false)
                        setTimeout(() => {
                          removeCartItem(cartItem.id, cartItem.size)
                        }, 500)
                      }}
                    >
                      <RemoveIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="line-separator mt-2" />
          </animated.div>
        )
    )
  }
)

CartItems.propTypes = {
  removeCartItem: PropTypes.func.isRequired,
  cartQuantityOnChange: PropTypes.func.isRequired,
  cartQuantityOnKeyPress: PropTypes.func.isRequired,
  cartItem: PropTypes.shape({
    id: PropTypes.string,
    cartId: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    size: PropTypes.string,
    section: PropTypes.string
  }).isRequired
}

export default CartItems
