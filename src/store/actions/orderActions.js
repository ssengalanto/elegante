import firebase from '../../firebase'
import * as actionTypes from './actionTypes'

/**
 * fetchOrdersStart => sets loading to true
 * fetchOrdersSuccess => handles successful http request | sets loading to false
 * fetchOrdersFail => handles failed http request | sets loading to false
 * clearOrders => clean-up | resets products state
 * fetchOrders => fetch all products in database/firestore
 */

export const fetchOrdersStart = () => ({
  type: actionTypes.FETCH_ORDERS_START
})

export const fetchOrdersSuccess = orders => ({
  type: actionTypes.FETCH_ORDERS_SUCCESS,
  orders
})

export const fetchOrdersFail = error => ({
  type: actionTypes.FETCH_ORDERS_FAIL,
  error
})

export const clearOrders = () => ({
  type: actionTypes.CLEAR_ORDERS
})

export const fetchOrders = userId => async dispatch => {
  try {
    dispatch(fetchOrdersStart())
    const response = await firebase
      .firestore()
      .collection('orders')
      .where('client', '==', userId)
      .get()

    if (!response.empty) {
      const orders = []
      response.docs.forEach(order => {
        orders.push({ ...order.data(), id: order.id })
      })
      dispatch(fetchOrdersSuccess(orders))
    } else {
      throw new Error('Orders failed to load.')
    }
  } catch (error) {
    dispatch(fetchOrdersFail(error))
  }
}
