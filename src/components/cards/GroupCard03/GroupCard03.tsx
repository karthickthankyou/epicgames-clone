import React from 'react'
import OutlineButton from '../../atoms/OutlineButton'
import Card03, { ICard03Props } from '../Card03'
export interface IGroupCard03Props {
  groupTitle: string
  viewMore?: boolean
  data: ICard03Props[]
}

const GroupCard03 = ({
  groupTitle,
  data,
  viewMore = false,
}: IGroupCard03Props) => {
  return (
    <div className="w-full bg-gray-800">
      <div className="flex items-center justify-between px-6 py-3 mt-3">
        <div>{groupTitle}</div>
        {viewMore && <OutlineButton buttonText="View More" />}
      </div>
      <div>
        {data.map((d) => (
          <Card03
            displayImage={d.displayImage}
            favorite={d.favorite}
            gameTitle={d.gameTitle}
            price={d.price}
          />
        ))}
      </div>
    </div>
  )
}

export default GroupCard03
