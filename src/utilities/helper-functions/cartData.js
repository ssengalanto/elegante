const cartData = product => {
  const { id, price, brand, name, image, section } = product

  const data = {
    id,
    price,
    brand,
    name,
    image,
    section
  }
  return data
}

export default cartData
