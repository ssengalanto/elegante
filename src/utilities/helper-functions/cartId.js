const cartId = size => {
  let value
  switch (size) {
    case 'xs':
      value = 'a-xs'
      break
    case 's':
      value = 'b-s'
      break
    case 'm':
      value = 'c-m'
      break
    case 'l':
      value = 'd-l'
      break
    case 'xl':
      value = 'e-xl'
      break
    default:
      break
  }
  return value
}

export default cartId
