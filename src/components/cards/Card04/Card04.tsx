import { useEffect, useState } from 'react'
import { calculateTimeLeft, ICounter } from '../../../utils'

const dateFormat = require('dateformat')
export interface ICard04Props {
  gameTitle: string
  displayImage: string
  date: string
  free?: boolean
}

const Card04 = ({
  gameTitle,
  displayImage,
  free = false,
  date,
}: ICard04Props) => {
  const { text, bgColor } = free
    ? {
        text: 'Free Now',
        bgColor: 'bg-blue-600',
      }
    : {
        text: 'Mystery Game',
        bgColor: 'bg-gray-700',
      }

  const [counter, setCounter] = useState<ICounter>(calculateTimeLeft(date))

  useEffect(() => {
    const timer = setTimeout(() => setCounter(calculateTimeLeft(date)), 1000)
    return () => clearTimeout(timer)
  }, [counter, date])

  return (
    <div className="w-full">
      <img
        src={displayImage}
        className="inset-0 object-cover w-full max-w-lg rounded-t-lg cursor-pointer h-72 filter hover:brightness-125"
        alt=""
      />
      <div
        className={`flex justify-center p-1 text-sm tracking-wider uppercase rounded-b-lg ${bgColor}`}
      >
        {text}
      </div>

      <div className="mt-4">
        {free ? (
          <>
            <div>{gameTitle}</div>
            <div className="text-sm text-gray-300">
              Free Now - {dateFormat(date, 'mmm d "at" h:MM TT')}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-12 font-mono">
            Unlocking in{' '}
            {`${counter.days}:${counter.hours}:${counter.minutes}:${counter.seconds}`}
          </div>
        )}
      </div>
    </div>
  )
}

export default Card04
