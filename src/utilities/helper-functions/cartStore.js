const getSelectedItem = (cart, product) =>
  cart.filter(selectedItem => selectedItem.id === product.id).pop()

const getAllNonSelectedItems = (cart, product) =>
  cart.filter(selectedItem => selectedItem.id !== product.id)

const getTotal = (cart, prodId) => {
  const selectedItem = cart.filter(prod => prod.id === prodId).pop()
  return Object.keys(selectedItem.sizesInCart)
    .map(sizeCount => selectedItem.sizesInCart[sizeCount])
    .reduce((acc, count) => acc + count, 0)
}

export const addingItemInCart = (cart, product, size, quantity) => {
  const updatedCart = getAllNonSelectedItems(cart, product)
  const selectedItem = getSelectedItem(cart, product)
  if (selectedItem === undefined) {
    updatedCart.push({
      ...product,
      quantity: Number(quantity),
      sizesInCart: {
        [size]: Number(quantity)
      }
    })
  } else {
    updatedCart.push({
      ...selectedItem,
      quantity: selectedItem.quantity + Number(quantity),
      sizesInCart: {
        ...selectedItem.sizesInCart,
        [size]:
          selectedItem.sizesInCart[size] + Number(quantity) || Number(quantity)
      }
    })
  }
  return updatedCart
}

export const addingWishlistToCart = (cart, product, size) => {
  const updatedCart = getAllNonSelectedItems(cart, product)
  const selectedItem = getSelectedItem(cart, product)
  if (selectedItem === undefined) {
    updatedCart.push({
      ...product,
      quantity: 1,
      sizesInCart: {
        [size]: 1
      }
    })
  } else {
    updatedCart.push({
      ...selectedItem,
      quantity: selectedItem.quantity + 1,
      sizesInCart: {
        ...selectedItem.sizesInCart,
        [size]: selectedItem.sizesInCart[size] + 1 || 1
      }
    })
  }
  return updatedCart
}

export const changingCartItemQuantity = (cart, product, size, quantity) => {
  const updatedCart = getAllNonSelectedItems(cart, product)
  const selectedItem = getSelectedItem(cart, product)
  selectedItem.sizesInCart[size] = quantity

  const total = getTotal(cart, product.id)

  updatedCart.push({ ...selectedItem, quantity: Number(total) })
  return updatedCart
}

export const removingItemInCart = (cart, prodId, size) => {
  const selectedItem = cart.filter(prod => prod.id === prodId).pop()
  selectedItem.quantity -= selectedItem.sizesInCart[size]
  delete selectedItem.sizesInCart[size]

  const total = getTotal(cart, prodId)

  if (total > 0) {
    const newCart = cart.filter(prod => prod.id !== prodId)
    return newCart.concat(selectedItem)
  }

  return cart.filter(product => product.id !== prodId)
}
