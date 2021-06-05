import image from '../../assets/image.jpg'
/* tslint:disable */
import PriceCard, { IPriceCardProps } from '../../atoms/PriceCard'

export interface ICard01Props {
  gameTitle: string
  productionCompany: string
  price: IPriceCardProps
}

const Card01 = ({ gameTitle, productionCompany, price }: ICard01Props) => {
  return (
    <div>
      <img src={image} className="object-cover w-full h-60" alt="" />
      <p className="w-full mt-2 truncate ...">{gameTitle}</p>
      <p className="text-sm text-gray-300 truncate ...">{productionCompany}</p>
      <PriceCard {...price} />
    </div>
  )
}

export default Card01
