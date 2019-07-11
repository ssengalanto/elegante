/* eslint-disable operator-linebreak */
import PropTypes from 'prop-types'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import useReactRouter from 'use-react-router'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import filterItems from '../../../utilities/helper-functions/filterItems'
import ProductsLoader from '../../Shared/Loader/ProductsLoader'
import Modal from '../../Shared/Modal'
import useShopProducts from '../hooks/useShopProducts'
import styles from './shop-products.module.scss'
import ShopProductsItem from './ShopProductsItem'
import ShopProductsLoadError from './ShopProductsLoadError'
import ShopProductsModal from './ShopProductsModal'
import ShopProductsNoResults from './ShopProductsNoResults'
import ShopProductsPagination from './ShopProductsPagination'

const ShopProducts = ({ path, filters }) => {
  const { width } = useWindowDimensions()
  const { history, match } = useReactRouter()
  const {
    show,
    selectedItem,
    showProductModal,
    closeProductModal,
    setSelectedItemForModal
  } = useShopProducts()
  const { products, loading, error } = useSelector(state => state.products)

  let productsData = products
  if (path === '/men') {
    productsData = products.filter(prod => prod.section === 'men')
  } else if (path === '/women') {
    productsData = products.filter(prod => prod.section === 'women')
  }

  const pageNavHandler = useCallback(
    pageNum => {
      if (width <= 480) {
        history.push(`${path}/products/page=${pageNum}`)
        window.scrollTo(0, 0)
      } else {
        history.push(`${path}/products/page=${pageNum}`)
      }
    },
    [path, history, width]
  )

  const productPreviewHandler = prodId => {
    history.push(`${path}/product-overview/${prodId}`)
  }

  let content
  if (loading) {
    content = <ProductsLoader />
  } else {
    let itemLimit
    if (width > 800) {
      itemLimit = 6
    } else {
      itemLimit = 4
    }
    const filteredItems = filterItems(productsData, filters)
    const lastItemIndex = match.params.id * itemLimit
    const firstItemIndex = lastItemIndex - itemLimit
    const currentItems = filteredItems.slice(firstItemIndex, lastItemIndex)

    let dummyDiv = null
    if (currentItems.length === 2 || currentItems.length === 5) {
      dummyDiv = <div className={styles.dummy} />
    }

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(filteredItems.length / itemLimit); i += 1) {
      pageNumbers.push(i)
    }

    content = (
      <>
        <div className={styles.content}>
          {!error ? (
            currentItems.map(product => (
              <ShopProductsItem
                path={path}
                key={product.id}
                product={product}
                setSelectedItem={setSelectedItemForModal}
                showProductModal={showProductModal}
                productPreviewHandler={productPreviewHandler}
              />
            ))
          ) : (
            <ShopProductsLoadError error={error} />
          )}
          {dummyDiv}
        </div>

        {filteredItems.length === 0 && !error && <ShopProductsNoResults />}

        {pageNumbers.length > 0 && <div className="line-separator mb-3" />}

        <div className={styles.pagination}>
          {pageNumbers.map(pageNum => (
            <ShopProductsPagination
              key={pageNum}
              pageNum={pageNum}
              pageNavHandler={pageNavHandler}
              active={`${styles.pages} ${match.params.id ===
                pageNum.toString() && styles.active}`}
            />
          ))}
        </div>
      </>
    )
  }

  return (
    <>
      <Modal mode="light" show={show} closeModal={closeProductModal}>
        <ShopProductsModal
          selectedItem={selectedItem}
          closeProductModal={closeProductModal}
        />
      </Modal>
      <div className={styles.container}>{content}</div>
    </>
  )
}

ShopProducts.propTypes = {
  path: PropTypes.string.isRequired,
  filters: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    brand: PropTypes.string,
    size: PropTypes.string,
    sortBy: PropTypes.string
  }).isRequired
}

export default ShopProducts
