import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../store/actions'

const useApp = () => {
  const dispatch = useDispatch()
  const [isTabbing, setIsTabbing] = useState(false)
  const { cart } = useSelector(state => state.cart)
  const { orders } = useSelector(state => state.orders)
  const { wishlist } = useSelector(state => state.wishlist)
  const { authenticated, user } = useSelector(state => state.auth)

  const focusOutlineHandler = e => {
    if (e.key === 'Tab') {
      setIsTabbing(true)
    }
  }

  useEffect(() => {
    dispatch(actions.verifyAuth())

    if (localStorage.cart) {
      dispatch(
        actions.getCartLocalStorage(JSON.parse(localStorage.getItem('cart')))
      )
    }
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    if (authenticated) {
      dispatch(actions.fetchWishlistedItems(user.id))
    } else {
      if (orders.length > 0) {
        dispatch(actions.clearOrders())
      }
      if (wishlist.length > 0) {
        dispatch(actions.clearWishlist())
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, authenticated, user.id])

  return { isTabbing, focusOutlineHandler }
}

export default useApp
