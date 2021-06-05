import Card04 from '../../cards/Card04'
import { GiftIcon } from '@heroicons/react/outline'
import React from 'react'
import OutlineButton from '../../atoms/OutlineButton'

export interface ISectionCard04Props {}

const SectionCard04 = ({}: ISectionCard04Props) => {
  return (
    <div className="p-8 bg-gray-800">
      <div className="flex items-center justify-between">
        <div>
          <GiftIcon
            className={`w-8 h-8 mr-2 text-gray-300 hover:text-white inline mb-2`}
          />
          Free Games
        </div>
        <OutlineButton buttonText="View More" />
      </div>
      <div className="grid grid-cols-1 gap-3 mt-2 sm:grid-cols-2">
        <Card04
          date="2021-06-10T08:30:00Z"
          displayImage="static/media/game.e4f1f703.jpg"
          gameTitle="Cyberpunk 2077"
          free
        />
        <Card04
          date="2021-06-10T08:30:00Z"
          displayImage="static/media/game.e4f1f703.jpg"
          gameTitle="Cyberpunk 2077"
        />
      </div>
    </div>
  )
}

export default SectionCard04
