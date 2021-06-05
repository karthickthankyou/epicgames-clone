export const discountCalc = (disc, price) => {
  return (price - (price * disc) / 100).toFixed(2)
}

export const withCurrency = (price) => {
  return `$${price}`
}
