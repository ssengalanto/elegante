import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../store/actions'
import cartData from '../../../utilities/helper-functions/cartData'

const useWishlistButtons = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { wishlist } = useSelector(state => state.wishlist)

  const wishlistSizeOnChange = useCallback(
    (product, e) => {
      dispatch(actions.addSizeInWishlistItem(product, e.target.value))
    },
    [dispatch]
  )

  const addWishlistItemToCartHandler = useCallback(
    product => {
      const data = cartData(product)
      dispatch(actions.addWishlistToCart(data, product.size))
      dispatch(actions.removeWishlistItem(product.id, user.id))
    },
    [dispatch, user.id]
  )

  const removeWishlistItemHandler = useCallback(
    prodId => {
      dispatch(actions.removeWishlistItem(prodId, user.id))
    },
    [dispatch, user.id]
  )

  const addAllWishlistToCartHandler = () => {
    const wishlistToCart = wishlist.filter(prod => !!prod.size === true)

    wishlistToCart.forEach(product => {
      const data = cartData(product)
      dispatch(actions.addWishlistToCart(data, product.size))
      dispatch(actions.removeWishlistItem(product.id, user.id))
    })
  }

  return {
    wishlistSizeOnChange,
    addWishlistItemToCartHandler,
    removeWishlistItemHandler,
    addAllWishlistToCartHandler
  }
}

export default useWishlistButtons
