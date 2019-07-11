import React from 'react'
import styles from './orders.module.scss'

const OrdersEmpty = () => (
  <div className={styles.empty}>
    <p>You currently have 0 orders.</p>
  </div>
)

export default OrdersEmpty
