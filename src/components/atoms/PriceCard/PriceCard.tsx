import { discountCalc, withCurrency } from '../../../utils'
export interface IPriceCardProps {
  price: number
  discount?: number
  classes?: string
  comingSoon?: boolean
}

const PriceCard = ({
  price,
  discount,
  comingSoon,
  classes,
}: IPriceCardProps) => {
  const Price = () => {
    if (comingSoon) {
      return <>Coming Soon</>
    } else if (price) {
      if (discount) {
        return (
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
        )
      } else {
        return withCurrency(price)
      }
    } else if (price === 0) {
      return <div>Free</div>
    } else {
      throw new Error('Unknown combination of values received in PriceCard.')
    }
  }
  return (
    <div className={`text-sm text-gray-200 ${classes}`}>
      {Price()}
      {/* {discount && price ? (
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
      )} */}
    </div>
  )
}

export default PriceCard
