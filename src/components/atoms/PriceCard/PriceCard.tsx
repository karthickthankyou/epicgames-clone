import { discountCalc, withCurrency } from '../../../utils'
export interface IPriceCardProps {
  price: number
  discount?: number
  classes?: string
}

const PriceCard = ({ price, discount, classes }: IPriceCardProps) => {
  return (
    <div className={`text-sm text-gray-200 ${classes}`}>
      {discount && price ? (
        <>
          <span className="px-1 py-0.5 mr-2 bg-blue-700 rounded-sm">
            -{discount}%
          </span>
          <span className="mr-2 text-gray-400 line-through">
            {withCurrency(price)}
          </span>
          <span className="">
            {withCurrency(discountCalc(discount, price))}
          </span>
        </>
      ) : (
        <div>{price ? withCurrency(price) : 'Free'}</div>
      )}
    </div>
  )
}

export default PriceCard
