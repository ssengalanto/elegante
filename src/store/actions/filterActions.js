import * as actionTypes from './actionTypes'

/**
 * filterByName => filter products by name
 * filterByPrice => filter products by price
 * filterByBrand => filter products by brand
 * filterBySize => filter products by size
 * sortItems => sort products
 */

export const filterByName = name => ({
  type: actionTypes.FILTER_NAME,
  name
})

export const filterByPrice = price => ({
  type: actionTypes.FILTER_PRICE,
  price
})

export const filterByBrand = brand => ({
  type: actionTypes.FILTER_BRAND,
  brand
})

export const filterBySize = size => ({
  type: actionTypes.FILTER_SIZE,
  size
})

export const sortItems = sort => ({
  type: actionTypes.SORT_ITEMS,
  sort
})
