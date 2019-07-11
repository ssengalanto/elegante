const sizeSwitch = itemSize => {
  let value
  switch (itemSize) {
    case 'extra small':
      value = 'xs'
      break
    case 'small':
      value = 's'
      break
    case 'medium':
      value = 'm'
      break
    case 'large':
      value = 'l'
      break
    case 'extra large':
      value = 'xl'
      break
    default:
      break
  }
  return value
}

export default sizeSwitch
