/* eslint-disable jsx-a11y/label-has-for */
import PropTypes from 'prop-types'
import React from 'react'
import useReactRouter from 'use-react-router'
import useAddToCart from '../../../hooks/useAddToCart'
import useAddToWishlist from '../../../hooks/useAddToWishlist'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import sizeSwitch from '../../../utilities/helper-functions/sizeSwitch'
import styles from './shop-overview.module.scss'

const ShopOverviewControls = ({ product }) => {
  const { history } = useReactRouter()
  const { width } = useWindowDimensions()
  const { isWishlisted, addItemToWishlist } = useAddToWishlist(product.id)
  const {
    size,
    quantity,
    sizeChangeHandler,
    quantityChangeHandler,
    addItemToCart,
    quantityKeyPressHandler
  } = useAddToCart()

  return (
    <>
      <div className={styles.separator} />
      <div className={styles.controls}>
        <div className={styles.price}>
          <p className={`${styles['control-title']}`}>Price</p>
          <p>${product.price.toFixed(2)}</p>
        </div>

        <div className={styles.sizes}>
          <label htmlFor="products-sizes" className={styles['control-label']}>
            Sizes
            <select
              id="products-sizes"
              type="select"
              value={size}
              onChange={sizeChangeHandler}
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
        <div className={styles.quantity}>
          <label
            htmlFor="products-quantity"
            className={styles['control-label']}
          >
            Quantity
            <input
              id="products-quantity"
              type="number"
              value={quantity.toString()}
              min="0"
              max="99"
              placeholder={quantity}
              onKeyPress={quantityKeyPressHandler}
              onChange={quantityChangeHandler}
            />
          </label>
        </div>
        <div className={styles.total}>
          <p className={`${styles['control-title']}`}>Total</p>
          <p>${(product.price * quantity).toFixed(2)}</p>
        </div>
      </div>
      <div className={styles.separator} />

      <div className={styles.buttons}>
        <button
          disabled={isWishlisted}
          type="button"
          className={`btn--dark ${styles['btn-spacing']}`}
          onClick={() => addItemToWishlist(product)}
        >
          {isWishlisted ? 'Wishlisted' : 'Add to wishlist'}
        </button>

        <button
          disabled={!(size && quantity)}
          type="submit"
          className="btn--dark"
          onClick={() => {
            addItemToCart(product)
            history.goBack()
          }}
        >
          Add to cart
        </button>
      </div>
    </>
  )
}

ShopOverviewControls.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    section: PropTypes.string,
    image: PropTypes.string,
    preview: PropTypes.string,
    price: PropTypes.number,
    sizes: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.shape({
      nanoseconds: PropTypes.number,
      seconds: PropTypes.number
    }),
    details: PropTypes.shape({
      description: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string
      }),
      care: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string
      }),
      sizing: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string
      }),
      measurement: PropTypes.shape({
        chest: PropTypes.string,
        hips: PropTypes.string,
        title: PropTypes.string,
        height: PropTypes.string
      })
    })
  }).isRequired
}

export default ShopOverviewControls
