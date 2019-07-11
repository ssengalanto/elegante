/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import useFadeSpring from '../../../hooks/animations/useFadeSpring'
import useAddToWishlist from '../../../hooks/useAddToWishlist'
import FullHeartIcon from '../../SVGs/svg-icons/FullHeartIcon'
import HeartIcon from '../../SVGs/svg-icons/HeartIcon'
import MagnifierIcon from '../../SVGs/svg-icons/MagnifierIcon'
import ShoppingBagIcon from '../../SVGs/svg-icons/ShoppingBagIcon'
import styles from './shop-products-item.module.scss'

const ShopProductsItem = ({
  product,
  setSelectedItem,
  showProductModal,
  productPreviewHandler
}) => {
  const { fade, animated } = useFadeSpring()
  const { authenticated } = useSelector(state => state.auth)
  const { isWishlisted, toggleWishlistHandler } = useAddToWishlist(product.id)

  let heart = <HeartIcon />
  if (authenticated) {
    if (isWishlisted) {
      heart = <FullHeartIcon />
    }
  }

  return (
    <>
      <animated.div style={fade} className={styles.container}>
        <div className={styles.image}>
          {authenticated
            ? isWishlisted && (
                <>
                  <span className={styles.wishlisted}>
                    <FullHeartIcon />
                  </span>
                </>
              )
            : null}

          <img
            src={`/products/${product.section}/${product.image}`}
            alt={product.name}
          />
          <div className={styles['event-container']}>
            <div
              className={styles['event-div']}
              onClick={() => productPreviewHandler(product.id)}
            >
              {' '}
            </div>
            <div className={styles['event-btn-container']}>
              <button
                type="button"
                className={styles['event-btn']}
                onClick={() => toggleWishlistHandler(product)}
                aria-label={`${product.name}, add to wishlist`}
              >
                {heart}
              </button>
              <button
                type="button"
                className={styles['event-btn']}
                onClick={() => productPreviewHandler(product.id)}
                aria-label={`${product.name}, preview`}
              >
                <MagnifierIcon />
              </button>
              <button
                type="button"
                className={styles['event-btn']}
                aria-label={`${product.name}, add to cart`}
                onClick={() => {
                  setSelectedItem(product.id)
                  showProductModal()
                }}
              >
                <ShoppingBagIcon />
              </button>
            </div>
          </div>
        </div>
        <p className={styles.brand}>{product.brand}</p>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </animated.div>
    </>
  )
}

ShopProductsItem.propTypes = {
  productPreviewHandler: PropTypes.func.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  showProductModal: PropTypes.func.isRequired,
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

export default ShopProductsItem
