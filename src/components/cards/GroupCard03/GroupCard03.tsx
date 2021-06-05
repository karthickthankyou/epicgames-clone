import React from 'react'
import OutlineButton from '../../atoms/OutlineButton'
import Card03 from '../Card03'
export interface IGroupCard03Props {
  groupTitle: string
}

const GroupCard03 = ({ groupTitle }: IGroupCard03Props) => {
  return (
    <div className="w-full bg-gray-800">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="text-lg text-gray-300">{groupTitle}</div>
        <OutlineButton buttonText="View More" />
      </div>
      <div>
        <Card03
          displayImage="static/media/game.e4f1f703.jpg"
          favorite
          gameTitle="Cyberpunk 2077"
          price={{
            price: 10,
          }}
        />
        <Card03
          displayImage="static/media/game.e4f1f703.jpg"
          gameTitle="Cyberpunk 2077"
          price={{
            price: 10,
            discount: 15,
          }}
        />
        <Card03
          displayImage="static/media/game.e4f1f703.jpg"
          gameTitle="Cyberpunk 2077"
          price={{
            price: 0,
          }}
        />
        <Card03
          displayImage="static/media/game.e4f1f703.jpg"
          favorite
          gameTitle="Cyberpunk 2077"
          price={{
            price: 4.99,
          }}
        />
        <Card03
          displayImage="static/media/game.e4f1f703.jpg"
          gameTitle="Cyberpunk 2077"
          price={{
            price: 4.99,
            discount: 50,
          }}
        />
        <Card03
          displayImage="static/media/game.e4f1f703.jpg"
          favorite
          gameTitle="Cyberpunk 2077"
          price={{
            price: 0,
          }}
        />
      </div>
    </div>
  )
}

export default GroupCard03
