import * as actions from '../../store/actions'

const filterSwitch = (name, value, dispatch) => {
  switch (name) {
    case 'search':
      dispatch(actions.filterByName(value))
      break
    case 'price':
      dispatch(actions.filterByPrice(value))
      break
    case 'brand':
      dispatch(actions.filterByBrand(value))
      break
    case 'size':
      dispatch(actions.filterBySize(value))
      break
    case 'sort':
      dispatch(actions.sortItems(value))
      break
    default:
      break
  }
}

export default filterSwitch
