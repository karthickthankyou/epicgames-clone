import PriceCard, { IPriceCardProps } from '../../atoms/PriceCard'
import { XIcon } from '@heroicons/react/outline'
const dateFormat = require('dateformat')

export interface ICard05Props {
  gameTitle: string
  price: IPriceCardProps
  displayImage: string
  review: string
  productionCompany: string
  date: string
}

const Card05 = ({
  gameTitle,
  price,
  displayImage,
  productionCompany,
  date,
  review,
}: ICard05Props) => {
  return (
    <div className="relative grid grid-cols-3 bg-gray-800 shadow-xl group">
      <img
        tabIndex={0}
        src={displayImage}
        className="object-cover w-full h-full col-span-1 rounded-l-sm shadow-inner cursor-pointer filter hover:brightness-125"
        alt=""
      />
      <div className="flex flex-col col-span-2">
        <div className="p-4">
          <p tabIndex={0} className="w-full line truncate ... text-lg">
            {gameTitle}
          </p>
          <div className="mt-2 text-xs text-gray-400">
            <span className="line-clamp-2">{review}</span>
          </div>
          {/* <p className="text-sm text-gray-500 truncate ... mt-1">
              {productionCompany}
            </p> */}
          <div className="mt-3">
            <PriceCard {...price} />
          </div>
          <div className="mt-2 text-xs text-gray-400">
            Sale ends - {dateFormat(date, 'mmm d "at" h:MM TT')}
          </div>
        </div>
        <div className="mt-auto">
          <button className="w-full px-4 py-2 mt-2 text-sm uppercase transition-all border-t border-gray-700 rounded-white group-hover:bg-blue-700 hover:bg-blue-600">
            Add to cart
          </button>
        </div>
      </div>
      <button className="absolute top-0 left-0 z-10">
        <XIcon className="w-8 h-8 p-1 text-gray-500 bg-black hover:text-gray-100 hover:bg-opacity-60 bg-opacity-20" />
      </button>
    </div>
  )
}

export default Card05
