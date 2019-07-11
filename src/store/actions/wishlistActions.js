/* eslint-disable max-len */
import firebase from '../../firebase'
import * as actionTypes from './actionTypes'

/**
 * fetchWishlistStart => sets loading to true
 * clearWishlist => clean-up | resets wishlist state/store
 * addSizeInWishlistItem => adds a size to wishlist item
 * addWishlistItem => adds an item to wishlist in database/firestore
 * addItemInWishlistSuccess => handles successful addWishlistItem | adds an item to wishlist in state/store
 * removeWishlistItem => removes an item to wishlist in database/firestore
 * removeItemInWishlistSuccess => handles successful addWishlistItem | removes an item to wishlist in state/store
 * fetchWishlistItems => sends a request to fetch wishlisted items in products collection in database/firestore
 * fetchWishlistItemsSuccess => handles successful fetchWishlistItems | sets loading to false
 * fetchWishlistedItems => sends a request to fetch wishlisted items in user's wishlist collection in database/firestore
 */

export const fetchWishlistStart = () => ({
  type: actionTypes.FETCH_WISHLIST_START
})

export const clearWishlist = () => ({
  type: actionTypes.CLEAR_WISHLIST
})

export const addSizeInWishlistItem = (product, size) => (
  dispatch,
  getState
) => {
  const { wishlist } = getState()
  const selectedItem = wishlist.wishlist
    .filter(prod => prod.id === product.id)
    .pop()

  const updatedWishlist = wishlist.wishlist
    .filter(prod => prod.id !== product.id)
    .concat({ ...selectedItem, size })

  dispatch({
    type: actionTypes.ADD_SIZE_IN_WISHLIST_ITEM,
    updatedWishlist
  })
}

export const addItemInWishlistSuccess = product => ({
  type: actionTypes.ADD_ITEM_IN_WISHLIST_SUCCESS,
  product
})

export const addWishlistItem = (product, userId) => {
  const { id, name, brand, price, image, sizes, section } = product
  return dispatch => {
    const wishlistData = {
      id,
      name,
      brand,
      price,
      image,
      sizes,
      section
    }
    dispatch(addItemInWishlistSuccess(wishlistData))

    // saving wishlist item in firebase
    firebase
      .firestore()
      .collection('users')
      .doc(userId)
      .collection('wishlist')
      .add({
        wishlistedItemId: product.id
      })
  }
}

export const removeItemInWishlistSuccess = prodId => ({
  type: actionTypes.REMOVE_ITEM_IN_WISHLIST_SUCCESS,
  prodId
})

export const removeWishlistItem = (prodId, userId) => async dispatch => {
  // deletes wishlist item in state
  dispatch(removeItemInWishlistSuccess(prodId))

  // query database to get the selected productId
  const response = await firebase
    .firestore()
    .collection('users')
    .doc(userId)
    .collection('wishlist')
    .where('wishlistedItemId', '==', prodId)
    .get()

  // deletes wishlist item in firebase
  response.docs.forEach(prod =>
    firebase
      .firestore()
      .collection('users')
      .doc(userId)
      .collection('wishlist')
      .doc(prod.id)
      .delete()
  )
}

export const fetchWishlistItemsSuccess = wishlist => ({
  type: actionTypes.FETCH_WISHLIST_ITEMS_SUCCESS,
  wishlist
})

export const fetchWishlistItems = wishlistedItemId => async dispatch => {
  // fetch products in firebase
  const response = await firebase
    .firestore()
    .collection('products')
    .get()

  // await response.docs.forEach(product => products.push(product))
  const products = await response.docs
    .map(product => product)
    .filter(prod => wishlistedItemId.includes(prod.id))

  // saving wishlist data
  const wishlist = []
  await products.forEach(item => {
    const product = item.data()
    wishlist.push({
      id: item.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      sizes: product.sizes,
      section: product.section
    })
  })

  dispatch(fetchWishlistItemsSuccess(wishlist))
}

export const fetchWishlistedItems = userId => async dispatch => {
  dispatch(fetchWishlistStart())
  // fetch wishlisted items
  const response = await firebase
    .firestore()
    .collection('users')
    .doc(userId)
    .collection('wishlist')
    .get()

  // saves wishlisted items id in an array
  const wishlistedItemId = []
  response.docs.forEach(prod => {
    wishlistedItemId.push(prod.data().wishlistedItemId)
  })

  dispatch(fetchWishlistItems(wishlistedItemId))
}
