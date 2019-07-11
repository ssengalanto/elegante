import React from 'react'
import content from '../../utilities/content/content'
import BoxIcon from '../SVGs/svg-icons/BoxIcon'
import CalendarIcon from '../SVGs/svg-icons/CalendarIcon'
import OrdersIcon from '../SVGs/svg-icons/OrderIcon'
import styles from './info.module.scss'

const InfoShippingDelivery = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <h1 className={styles.title}>
        <span className="fw-thin">Shipping</span>{' '}
        <span className="fw-regular">&amp; Delivery</span>
      </h1>
      <p>{content.loremOne}</p>

      <h2 className={styles['sub-heading']}>
        Here are a few things to consider while you wait for your order:
      </h2>
      <ul>
        <li className={styles.list}>
          {' '}
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </li>
        <li className={styles.list}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt.
        </li>
        <li className={styles.list}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </li>
      </ul>

      <h2 className={styles['sub-heading']}>
        So when do you contact Elegante?
      </h2>
      <p>{content.loremTwo}</p>

      <div className="line-separator my-5" />

      <div className={styles.flex}>
        <BoxIcon />
        <h3 className={styles['sub-heading']}>Is shipping free?</h3>
      </div>
      <p>{content.loremTwo}</p>

      <div className={styles.flex}>
        <OrdersIcon />
        <h3 className={styles['sub-heading']}>Can I track my order?</h3>
      </div>
      <p>{content.loremTwo}</p>

      <div className={styles.flex}>
        <CalendarIcon />
        <h3 className={styles['sub-heading']}>
          Where does my order ship from?
        </h3>
      </div>
      <p>{content.loremTwo}</p>
    </div>
  </section>
)

export default InfoShippingDelivery
