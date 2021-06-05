export interface ICounter {
  days: string
  hours: string
  minutes: string
  seconds: string
}

export const discountCalc = (disc: number, price: number) => {
  return +(price - (price * disc) / 100).toFixed(2)
}

export const withCurrency = (price: number) => {
  return `$${price}`
}

export const calculateTimeLeft = (date: string): ICounter => {
  let diff = new Date(date).getTime() - new Date().getTime()
  return {
    days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
    hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
    minutes: String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0'),
    seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, '0'),
  }
}
