import { useCallback, useEffect, useReducer } from 'react'
import useReactRouter from 'use-react-router'
import filterReducer from '../../../store/reducers/filterReducer'
import filterSwitch from '../../../utilities/helper-functions/filterSwitch'

const useShop = () => {
  const { history, match, location } = useReactRouter()
  const [filters, dispatch] = useReducer(filterReducer, {
    name: '',
    price: 0,
    brand: '',
    size: '',
    sortBy: ''
  })

  useEffect(() => {
    if (location.pathname === match.url) {
      window.scrollTo(0, 0)
      history.replace(`${match.url}/page=1`)
    }
  }, [location.pathname, history, match.url])

  const filterChangeHandler = useCallback(
    e => {
      if (`${location.pathname}` !== `${match.url}/page=1`) {
        history.replace(`${match.url}/page=1`)
      }
      filterSwitch(e.target.name, e.target.value, dispatch)
    },
    [history, location.pathname, match.url]
  )

  return {
    filters,
    filterChangeHandler
  }
}

export default useShop
