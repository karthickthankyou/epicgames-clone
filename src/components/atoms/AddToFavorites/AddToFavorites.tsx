import { CheckCircleIcon, PlusCircleIcon } from '@heroicons/react/outline'
import React from 'react'

export interface IAddToFavoritesProps {
  favorite: boolean
  hovered: boolean
}

const AddToFavorites = ({ favorite, hovered }: IAddToFavoritesProps) => {
  const Icon = favorite ? CheckCircleIcon : PlusCircleIcon
  const ToolTipText = favorite ? 'Remove from wishlist' : 'Add to wishlist'
  return (
    <button className="relative transition-all group">
      <Icon
        className={`w-6 h-6 m-2 text-gray-300 hover:text-white ${
          hovered ? 'opacity-100' : 'opacity-0'
        } `}
      />
      <div
        className={`absolute transform -translate-x-2/4 bottom-full opacity-0 transition-all shadow-md p-2 left-2/4 bg-black bg-opacity-50 whitespace-nowrap group-hover:opacity-100`}
      >
        {ToolTipText}
      </div>
    </button>
  )
}

export default AddToFavorites
