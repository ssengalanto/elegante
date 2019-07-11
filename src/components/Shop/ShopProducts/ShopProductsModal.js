/* eslint-disable jsx-a11y/label-has-for */
import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import useAddToCart from '../../../hooks/useAddToCart'
import sizeSwitch from '../../../utilities/helper-functions/sizeSwitch'
import styles from './shop-products-modal.module.scss'

const ShopProductsModal = ({ selectedItem, closeProductModal }) => {
  const { products } = useSelector(state => state.products)
  const selected = products.filter(prod => prod.id === selectedItem).pop()
  const {
    size,
    quantity,
    sizeChangeHandler,
    quantityChangeHandler,
    quantityKeyPressHandler,
    addItemToCart
  } = useAddToCart()

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.column}>
          <img
            src={`/products/${selected.section}/${selected.image}`}
            alt={selected.name}
            className={styles.image}
          />
        </div>

        <div className={styles.column}>
          <div className={styles.name}>
            {selected.name}
            <span className={styles.brand}> -{selected.brand}</span>
          </div>

          <div className={styles.controls}>
            <div className={styles.price}>
              <div className={`${styles['control-title']} `}>Price</div>
              <p>${selected.price.toFixed(2)}</p>
            </div>

            <div className={styles.sizes}>
              <label
                htmlFor="products-modal-sizes"
                className={styles['control-title']}
              >
                Sizes
                <select
                  id="products-modal-sizes"
                  type="select"
                  value={size}
                  onChange={sizeChangeHandler}
                >
                  <option value="">Select Size</option>
                  {selected.sizes.map(itemSize => {
                    const value = sizeSwitch(itemSize)
                    return (
                      <option key={value} value={value}>
                        {itemSize}
                      </option>
                    )
                  })}
                </select>
              </label>
            </div>
            <div className={styles.quantity}>
              <label
                htmlFor="products-modal-quantity"
                className={styles['control-title']}
              >
                Quantity
                <input
                  id="products-modal-quantity"
                  type="number"
                  value={quantity.toString()}
                  min="0"
                  max="50"
                  placeholder={quantity}
                  onKeyPress={quantityKeyPressHandler}
                  onChange={quantityChangeHandler}
                />
              </label>
            </div>
          </div>
          <div className="line-separator mt-2 mb-1" />

          <div className={styles.buttons}>
            <div className={styles.total}>
              <p>Total: ${(selected.price * quantity).toFixed(2)}</p>
            </div>
            <button
              disabled={!(size && quantity)}
              type="submit"
              className="btn--dark"
              onClick={() => {
                addItemToCart(selected)
                closeProductModal()
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

ShopProductsModal.defaultProps = {
  selectedItem: null
}

ShopProductsModal.propTypes = {
  selectedItem: PropTypes.string,
  closeProductModal: PropTypes.func.isRequired
}

export default ShopProductsModal
