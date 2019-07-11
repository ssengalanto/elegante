/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/label-has-for */
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import useUnmountTransition from '../../hooks/animations/useUnmountTransition'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import sizeSwitch from '../../utilities/helper-functions/sizeSwitch'
import AddIcon from '../SVGs/svg-icons/AddIcon'
import RemoveIcon from '../SVGs/svg-icons/RemoveIcon'
import styles from './wishlist-items.module.scss'

const WishlistItems = memo(
  ({
    product,
    addWishlistItemToCartHandler,
    removeWishlistItemHandler,
    wishlistSizeOnChange
  }) => {
    const [show, setShow] = useState(true)
    const { width } = useWindowDimensions()
    const { transitions, animated } = useUnmountTransition(show)

    return transitions.map(
      ({ item, key, props }) =>
        item && (
          <animated.div key={key} style={props}>
            <div className={styles.container}>
              <div className={styles['primary-column']}>
                <div className={styles.image}>
                  <img
                    src={`/products/${product.section}/${product.image}`}
                    alt={product.name}
                  />
                </div>
              </div>

              <div className={styles['secondary-column']}>
                <div className={styles['secondary-col1']}>
                  <p className={styles.brand}>{product.brand}</p>
                  <div className={styles.name}>
                    <p>{product.name}</p>
                  </div>
                </div>

                <div className={styles.separator} />

                <div className={styles['secondary-col2']}>
                  <div className={styles.price}>
                    <span className={styles['column-title']}>Price</span>
                    <p>${product.price.toFixed(2)}</p>
                  </div>
                  <div className={styles.sizes}>
                    <label htmlFor={`${product.id}`} className={styles.label}>
                      Sizes
                      <select
                        id={`${product.id}`}
                        type="select"
                        value={product.size || ''}
                        onChange={e => wishlistSizeOnChange(product, e)}
                      >
                        <option value="">Size</option>
                        {product.sizes.map(itemSize => {
                          const value = sizeSwitch(itemSize)
                          return (
                            <option key={value} value={value}>
                              {width <= 480 ? value.toUpperCase() : itemSize}
                            </option>
                          )
                        })}
                      </select>
                    </label>
                  </div>

                  <div className={styles['add-btn']}>
                    <span className={styles['column-title']}>add to cart</span>
                    <button
                      type="button"
                      disabled={!product.size}
                      aria-label="add wishlist item to cart"
                      onClick={() => {
                        setShow(false)
                        setTimeout(() => {
                          addWishlistItemToCartHandler(product)
                        }, 500)
                      }}
                    >
                      <AddIcon
                        className={`${styles['add-btn-icon']} ${!product.size &&
                          styles['add-btn-icon--disabled']}`}
                      />
                    </button>
                  </div>
                  <div className={styles['remove-btn']}>
                    <span className={styles['column-title']}>Remove</span>
                    <button
                      type="button"
                      aria-label="remove wishlist item"
                      onClick={() => {
                        setShow(false)
                        setTimeout(() => {
                          removeWishlistItemHandler(product.id)
                        }, 500)
                      }}
                    >
                      <RemoveIcon className={styles['remove-btn-icon']} />
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

WishlistItems.propTypes = {
  wishlistSizeOnChange: PropTypes.func.isRequired,
  addWishlistItemToCartHandler: PropTypes.func.isRequired,
  removeWishlistItemHandler: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    sizes: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}

export default WishlistItems
