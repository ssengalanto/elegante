import React from 'react'
import { useSelector } from 'react-redux'
import ContentLoader from '../Shared/Loader/ContentLoader'
import useOrders from './hooks/useOrders'
import styles from './orders.module.scss'
import OrdersEmpty from './OrdersEmpty'
import OrdersItem from './OrdersItem'

const Orders = () => {
  useOrders()
  const { authenticated } = useSelector(state => state.auth)
  const { orders, loading } = useSelector(state => state.orders)

  const sortOrderByDate = items =>
    items.sort((a, b) => (a.date < b.date ? 1 : -1))

  let content
  if (authenticated) {
    if (loading) {
      content = <ContentLoader />
    } else if (orders.length > 0 && !loading) {
      content = sortOrderByDate(orders).map(order => (
        <OrdersItem key={order.id} order={order} />
      ))
    } else {
      content = !loading && <OrdersEmpty />
    }
  } else {
    content = null
  }

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className="fw-thin">Orders</span>
          <span className="fw-regular"> List</span>
        </h1>
        <div className="line-separator mb-5" />
        {content}
      </div>
    </section>
  )
}

export default Orders
