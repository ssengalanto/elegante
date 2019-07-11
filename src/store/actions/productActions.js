import firebase from '../../firebase'
import * as actionTypes from './actionTypes'

/**
 * fetchProductStart => sets loading to true
 * fetchProductSuccess => handles successful http request | sets loading to false
 * fetchProductFail => handles failed http request | sets loading to false
 * clearProducts => clean-up | resets products state
 * fetchProducts => fetch all products in database/firestore
 */

export const fetchProductsStart = () => ({
  type: actionTypes.FETCH_PRODUCTS_START
})

export const fetchProductsSuccess = products => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  products
})

export const fetchProductsFail = error => ({
  type: actionTypes.FETCH_PRODUCTS_FAIL,
  error
})

export const clearProducts = () => ({
  type: actionTypes.CLEAR_PRODUCTS
})

export const fetchProducts = () => async dispatch => {
  try {
    dispatch(fetchProductsStart())
    const response = await firebase
      .firestore()
      .collection('products')
      .orderBy('name')
      .get()

    if (!response.empty) {
      const product = []
      response.docs.forEach(prod => {
        product.push({ ...prod.data(), id: prod.id })
      })
      dispatch(fetchProductsSuccess(product))
    } else {
      throw new Error('Products failed to load.')
    }
  } catch (error) {
    dispatch(fetchProductsFail(error))
  }
}
