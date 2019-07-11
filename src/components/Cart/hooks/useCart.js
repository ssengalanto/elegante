import 'array-flat-polyfill'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useReactRouter from 'use-react-router'
import * as actions from '../../../store/actions'
import cartData from '../../../utilities/helper-functions/cartData'
import cartId from '../../../utilities/helper-functions/cartId'

const useCart = () => {
  const dispatch = useDispatch()
  const { history } = useReactRouter()
  const { cart } = useSelector(state => state.cart)
  const { authenticated } = useSelector(state => state.auth)

  const cartCopy = cart.map(prod =>
    Object.keys(prod.sizesInCart).map(size => ({
      ...cartData(prod),
      cartId: `${prod.id}${cartId(size)}`,
      quantity: prod.sizesInCart[size],
      size
    }))
  )
  const cartDisplayData = cartCopy.flatMap(data => data)

  const removeCartItem = (id, size) => {
    dispatch(actions.removeToCart(id, size))
  }

  const cartQuantityOnChange = (cartItem, size, e) => {
    let quantity = Number(e.target.value)
    if (e.target.value === 0 || e.target.value === '') {
      quantity = 1
    }
    dispatch(actions.changeCartItemQuantity(cartItem, size, quantity))
  }

  const cartQuantityOnKeyPress = e => {
    if (e.target.value.length === 2) {
      e.preventDefault()
    }
  }

  const proceedToCheckoutHandler = useCallback(() => {
    if (authenticated) {
      history.push('/checkout')
    } else {
      const checkoutError = {
        message: 'You need to sign in before you can proceed to checkout page.'
      }
      dispatch(actions.authError(checkoutError))
      dispatch(actions.showSignin())
    }
  }, [dispatch, authenticated, history])

  return {
    removeCartItem,
    cartDisplayData,
    cartQuantityOnChange,
    cartQuantityOnKeyPress,
    proceedToCheckoutHandler
  }
}

export default useCart
