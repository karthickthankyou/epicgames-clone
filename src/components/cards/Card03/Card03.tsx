import React, { useState } from 'react'
import PriceCard, { IPriceCardProps } from '../../atoms/PriceCard'
import AddToFavorites from '../../atoms/AddToFavorites'

export interface ICard03Props {
  gameTitle: string
  price: IPriceCardProps
  displayImage: string
  favorite?: boolean
}

const Card03 = ({
  gameTitle,
  price,
  displayImage,
  favorite = false,
}: ICard03Props) => {
  const [cardHover, setCardHover] = useState(false)
  return (
    <div
      className="flex items-start px-6 py-3 transition-all bg-gray-800 cursor-pointer hover:bg-gray-700"
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <img
        src={displayImage}
        className="object-cover w-20 h-24 rounded-sm"
        alt=""
      />
      <div className="p-2">
        <p className="w-full max-w-xs line-clamp-2">{gameTitle}</p>
        <PriceCard {...price} />
      </div>
      <div className="mt-2 ml-auto">
        <AddToFavorites favorite={favorite} hovered={cardHover} />
      </div>
    </div>
  )
}

export default Card03
