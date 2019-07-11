import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../store/actions'

const useOrders = () => {
  const dispatch = useDispatch(0)
  const { authenticated, user } = useSelector(state => state.auth)
  const { orders } = useSelector(state => state.orders)

  useEffect(() => {
    if (orders.length === 0 && authenticated) {
      dispatch(actions.fetchOrders(user.id))
    }
  }, [dispatch, authenticated, orders, user.id])
}

export default useOrders
