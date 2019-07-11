/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import React from 'react'
import { Route } from 'react-router-dom'
import useReactRouter from 'use-react-router'
import useToggle from '../../hooks/useToggle'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import useShop from './hooks/useShop'
import styles from './shop.module.scss'
import ShopBanner from './ShopBanner'
import ShopFilterBar from './ShopFilters/ShopFilterBar'
import ShopFilterSort from './ShopFilters/ShopFilterSort'
import ShopProducts from './ShopProducts'

const Shop = ({ path }) => {
  const { show, toggleHandler } = useToggle()
  const { match } = useReactRouter()
  const { width } = useWindowDimensions()
  const { filters, filterChangeHandler } = useShop()

  let title
  if (path === '/men') {
    title = "men's"
  } else if (path === '/women') {
    title = "women's"
  } else if (path === '/shop') {
    title = 'shop'
  }

  return (
    <>
      <ShopBanner path={path} />
      <section className={styles.section}>
        <div className={styles['title-bar']}>
          <h2 className={styles.title}>{title}</h2>
          <ShopFilterSort filterChangeHandler={filterChangeHandler} />
        </div>
        <div className={styles.content}>
          <button
            type="button"
            onClick={toggleHandler}
            className={styles['toggle-filters']}
          >
            {show ? 'hide filters' : 'show filters'}
          </button>
          {width > 480 || show ? (
            <ShopFilterBar
              price={filters.price}
              filterChangeHandler={filterChangeHandler}
            />
          ) : null}
          <Route
            path={`${match.url}/page=:id`}
            render={() => <ShopProducts path={path} filters={filters} />}
          />
        </div>
      </section>
    </>
  )
}

Shop.propTypes = {
  path: PropTypes.string.isRequired
}

export default Shop
