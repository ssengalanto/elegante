/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useReactRouter from 'use-react-router'
import useFadeSpring from '../../../hooks/animations/useFadeSpring'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import * as actions from '../../../store/actions'
import ContentLoader from '../../Shared/Loader/ContentLoader'
import ScrollToTop from '../../Shared/ScrollToTop'
import ShopProductsLoadError from '../ShopProducts/ShopProductsLoadError'
import styles from './shop-overview.module.scss'
import ShopOverviewControls from './ShopOverviewControls'
import ShopOverviewDetails from './ShopOverviewDetails'

const ShopOverview = ({ match }) => {
  const dispatch = useDispatch()
  const { history } = useReactRouter()
  const { width } = useWindowDimensions()
  const { fade, animated } = useFadeSpring()
  const { products, loading, error } = useSelector(state => state.products)
  const product = products.filter(target => target.id === match.params.id).pop()

  useEffect(() => {
    if (products.length === 0) {
      dispatch(actions.fetchProducts())
    }
  }, [dispatch, products])

  let content
  if (products.length === 0) {
    if (loading) {
      content = <ContentLoader />
    } else if (error) {
      content = <ShopProductsLoadError error={error} />
    }
  } else if (product === undefined) {
    content = <ShopProductsLoadError error="Product ID doesn't match." />
  } else {
    content = (
      <>
        <div className={styles.container}>
          <div className={styles.column}>
            <button
              type="button"
              className={styles['back-btn']}
              onClick={() => history.goBack()}
            >
              &lt; Go back
            </button>
            <img
              src={`/products/${product.section}/${product.preview}`}
              alt={product.name}
              className={styles.image}
            />
          </div>
          <div className={styles.column}>
            <h2 className={styles.name}>
              {product.name}
              <span className={styles.brand}>-{product.brand}</span>
            </h2>
            <ShopOverviewDetails details={product.details} />
            {width > 800 && <ShopOverviewControls product={product} />}
          </div>
        </div>
        {width <= 800 && <ShopOverviewControls product={product} />}
      </>
    )
  }

  return (
    <>
      <ScrollToTop />
      <section className={styles.section}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className="fw-thin">Product </span>
            <span className="fw-regular">Overview</span>
          </h1>
          <div className="line-separator mb-4" />
          <animated.div style={fade}>{content}</animated.div>
        </div>
      </section>
    </>
  )
}
export default ShopOverview
