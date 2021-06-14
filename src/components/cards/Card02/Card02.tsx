import React from 'react'
import PriceCard, { IPriceCardProps } from '../../atoms/PriceCard'

export interface ICard02Props {
  gameTitle: string
  description: string
  price: IPriceCardProps
  displayImage: string
}

const Card02 = ({
  gameTitle,
  description,
  price,
  displayImage,
}: ICard02Props) => {
  return (
    <div className="bg-gray-800 rounded-sm min-w-24 md:w-full md:min-w-full hover:bg-gray-700">
      <img
        src={displayImage}
        className="object-cover w-full transition-all rounded-b-sm cursor-pointer h-60 filter hover:brightness-125"
        alt=""
      />
      <div className="p-4">
        <p className="w-full max-w-sm text-lg line-clamp-2">{gameTitle}</p>
        <p className="max-w-sm mt-2 text-sm text-gray-300 line-clamp-3">
          {description}
        </p>
        <PriceCard {...price} classes="mt-4" />
      </div>
    </div>
  )
}

export default Card02
