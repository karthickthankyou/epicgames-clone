export interface ICard04Props {
  free: boolean
  gameTitle: string
  displayImage: string
  date: string
}

const Card04 = ({ gameTitle, displayImage, free, date }: ICard04Props) => {
  const { text, bgColor } = free
    ? {
        text: 'Free Now',
        bgColor: 'bg-blue-600',
      }
    : {
        text: 'Mystery Game',
        bgColor: 'bg-gray-800',
      }
  return (
    <div className="w-full">
      <img
        src={displayImage}
        className="inset-0 object-cover w-full max-w-lg rounded-t-lg h-72"
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
            <div className="text-sm text-gray-300">Free Now - {date}</div>
          </>
        ) : (
          <div className="flex items-center justify-center h-12">
            Unlocking in {date}
          </div>
        )}
      </div>
    </div>
  )
}

export default Card04
