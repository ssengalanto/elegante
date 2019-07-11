import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import { animated, useTransition } from 'react-spring'
import useToggle from '../../hooks/useToggle'
import styles from './orders-item.module.scss'

const OrdersItem = ({ order }) => {
  const { show, toggleHandler } = useToggle()

  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return (
    <>
      <button
        type="button"
        id={`${order.id}-label`}
        className={styles.tab}
        onClick={toggleHandler}
        aria-expanded={show}
        aria-controls={`${order.id}-control`}
        aria-label="oders"
      >
        <div className={styles.id}>
          <span className={styles.title}>ORDER ID</span> {order.id}
        </div>
        <div className={styles.date}>
          <span className={styles.title}>DATE</span>{' '}
          {moment(order.date).format('ll')}
        </div>
        <span className={`${styles['btn-icon']} ${show && styles.open}`} />
      </button>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              id={`${order.id}-control`}
              key={key}
              style={props}
              role="region"
              aria-labelledby={`${order.id}-label`}
            >
              <div className={styles.data}>
                <div className={styles.items}>
                  <div className={styles['data-title']}>Your Order</div>
                  {order.orders.map(orderItem => (
                    <p key={orderItem.id} className={styles['product-item']}>
                      {orderItem.name} |{' '}
                      {Object.keys(orderItem.sizesInCart).map(size => (
                        <span
                          className={styles.size}
                          key={`${orderItem.id}_${size}`}
                        >
                          ({orderItem.sizesInCart[size]})<span>{size}</span>{' '}
                        </span>
                      ))}
                    </p>
                  ))}
                </div>
                <div className={styles.customer}>
                  <div className={styles['data-title']}>Customer</div>
                  <p>
                    {order.details.firstName} {order.details.lastName}
                  </p>
                  <p className={styles.lowercase}>{order.details.email}</p>
                  <p>{order.details.phone}</p>
                </div>
                <div className={styles.address}>
                  <div className={styles['data-title']}>Shipping Address</div>
                  <p>{order.details.street}</p>
                  <p>
                    {order.details.city}, {order.details.province}
                  </p>
                  <p>
                    {order.details.postal}, {order.details.country}
                  </p>
                </div>
                <div className={styles.amount}>
                  <div className={styles['data-title']}>Amount</div>
                  <p>
                    $
                    {order.orders
                      .reduce(
                        (acc, cartItem) =>
                          acc + cartItem.price * cartItem.quantity,
                        0
                      )
                      .toFixed(2)}
                  </p>
                </div>
              </div>
            </animated.div>
          )
      )}
    </>
  )
}

OrdersItem.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string,
    client: PropTypes.string,
    date: PropTypes.string,
    details: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      street: PropTypes.string,
      city: PropTypes.string,
      province: PropTypes.string,
      country: PropTypes.string,
      postal: PropTypes.string,
      emial: PropTypes.string,
      phone: PropTypes.string
    }),
    orders: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        brand: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        sizes: PropTypes.arrayOf(PropTypes.string)
      })
    )
  }).isRequired
}

export default OrdersItem
