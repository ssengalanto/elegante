import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../store/actions'

const useAddToWishlist = prodId => {
  const dispatch = useDispatch()
  const { wishlist } = useSelector(state => state.wishlist)
  const { authenticated, user } = useSelector(state => state.auth)

  let isWishlisted = false
  if (wishlist.findIndex(prod => prod.id === prodId) !== -1) {
    isWishlisted = true
  }

  const addItemToWishlist = useCallback(
    product => {
      if (authenticated) {
        dispatch(actions.addWishlistItem(product, user.id))
      } else {
        const wishlistError = {
          message:
            'You must sign in first before you can add items into your wishlist.'
        }
        dispatch(actions.authError(wishlistError))
        dispatch(actions.showSignin())
      }
    },
    [dispatch, authenticated, user.id]
  )

  const toggleWishlistHandler = product => {
    if (isWishlisted) {
      dispatch(actions.removeWishlistItem(product.id, user.id))
    } else {
      addItemToWishlist(product)
    }
  }

  return { isWishlisted, addItemToWishlist, toggleWishlistHandler }
}

export default useAddToWishlist
