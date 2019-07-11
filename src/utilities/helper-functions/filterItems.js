export default (products, { name, price, brand, size, sortBy }) =>
  products
    .filter(product => {
      const nameMatch = product.name.includes(name.toLowerCase())
      const brandMatch = brand ? product.brand === brand : true
      const priceMatch = price ? product.price <= price : true
      const sizeMatch = size ? product.sizes.includes(size) : true
      return nameMatch && brandMatch && priceMatch && sizeMatch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'a-z':
          return a.name > b.name ? 1 : -1
        case 'z-a':
          return a.name < b.name ? 1 : -1
        case 'low-high':
          return a.price > b.price ? 1 : -1
        case 'high-low':
          return a.price < b.price ? 1 : -1
        case 'new-old':
          return a.date < b.date ? 1 : -1
        case 'old-new':
          return a.date > b.date ? 1 : -1
        default:
          return true
      }
    })
