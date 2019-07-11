import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import GoShopBtn from '../Buttons/GoShopBtn'
import Social from '../Social'
import styles from './appreciation.module.scss'

const Appreciation = forwardRef(({ children, tabKeyDownHandler }, ref) => (
  <div className={styles.content}>
    <h2 className={styles.heading}>{children}</h2>
    <div className={styles.buttons}>
      <GoShopBtn className="btn--light">Continue Shopping</GoShopBtn>
      <div className={styles.social}>
        <Social ref={ref} tabKeyDownHandler={tabKeyDownHandler} />
      </div>
    </div>
  </div>
))

Appreciation.propTypes = {
  children: PropTypes.node.isRequired,
  tabKeyDownHandler: PropTypes.func.isRequired
}

export default Appreciation
