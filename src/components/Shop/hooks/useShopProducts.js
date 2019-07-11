import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../store/actions'

const useShopProducts = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const { products } = useSelector(state => state.products)

  useEffect(() => {
    if (products.length === 0) {
      dispatch(actions.fetchProducts())
    }
  }, [dispatch, products])

  const setSelectedItemForModal = id => {
    setSelectedItem(id)
  }

  const showProductModal = () => {
    setShow(true)
  }

  const closeProductModal = () => {
    setShow(false)
  }

  return {
    show,
    selectedItem,
    showProductModal,
    closeProductModal,
    setSelectedItemForModal
  }
}

export default useShopProducts
