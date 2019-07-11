import PropTypes from 'prop-types'
import React, { memo } from 'react'
import styles from './shop-banner.module.scss'

const ShopBanner = memo(({ path }) => {
  const config = {
    title: '',
    styling: ''
  }
  if (path === '/men') {
    config.styling = styles.men
    config.title = "men's collection"
  } else if (path === '/women') {
    config.styling = styles.women
    config.title = "women's collection"
  } else if (path === '/shop') {
    config.styling = styles.shop
    config.title = 'our collection'
  }

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={`${config.styling}`}>
          <span className={styles.slogan}>
            <p className={styles['slogan--small']}>Lorem Ipsum Dolor</p>
            <h1 className={styles['slogan--large']}>{`${config.title}`}</h1>
          </span>
        </div>
      </div>
    </section>
  )
})

ShopBanner.propTypes = {
  path: PropTypes.string.isRequired
}

export default ShopBanner
