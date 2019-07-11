import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions'
import cartData from '../utilities/helper-functions/cartData'

const useAddToCart = () => {
  const dispatch = useDispatch()
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState(0)

  const sizeChangeHandler = e => {
    setSize(e.target.value)
  }

  const quantityChangeHandler = e => {
    setQuantity(Number(e.target.value))
  }

  const quantityKeyPressHandler = e => {
    if (e.target.value.length === 2) {
      e.preventDefault()
    }
  }

  const addItemToCart = useCallback(
    product => {
      const data = cartData(product)
      dispatch(actions.addToCart(data, size, quantity))
    },
    [dispatch, size, quantity]
  )
  return {
    size,
    quantity,
    sizeChangeHandler,
    quantityChangeHandler,
    addItemToCart,
    quantityKeyPressHandler
  }
}

export default useAddToCart
