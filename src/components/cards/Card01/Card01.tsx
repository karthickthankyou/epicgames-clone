/* tslint:disable */
import PriceCard, { IPriceCardProps } from '../../atoms/PriceCard'

export interface ICard01Props {
  gameTitle: string
  productionCompany: string
  price: IPriceCardProps
  displayImage: string
}

const Card01 = ({
  gameTitle,
  productionCompany,
  price,
  displayImage,
}: ICard01Props) => {
  return (
    <div>
      <img
        src={displayImage}
        className="object-cover w-full rounded rounded-b-sm cursor-pointer h-60 filter hover:brightness-125"
        alt=""
      />
      <p className="w-full mt-2 truncate ...">{gameTitle}</p>
      <p className="text-sm text-gray-300 truncate ...">{productionCompany}</p>
      <PriceCard {...price} />
    </div>
  )
}

export default Card01
