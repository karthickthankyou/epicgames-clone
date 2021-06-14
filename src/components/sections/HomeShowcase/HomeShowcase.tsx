import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react'
export interface IHomeShowcaseProps {
  data: {
    title: string
    desc: string
    img: string
    logo: string
  }[]
}

const HomeShowcase = ({ data }: IHomeShowcaseProps) => {
  const [imageId, setImageId] = useState<number>(0)
  //   const timerRef = useRef(typeof Timer) // we can save timer in useRef and pass it to child

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageId((state) => {
        if (state >= data.length - 1) {
          return 0
        } else {
          return state + 1
        }
      })
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [data, imageId])
  return (
    <div className="md:flex">
      <div className="relative flex flex-col flex-grow ">
        {data.map((game, index) => (
          <>
            {imageId === index && (
              <>
                <div className="flex flex-col h-full p-12 bg-opacity-50 bg-gradient-to-r from-black via-transparent ">
                  <Transition
                    appear={imageId === index}
                    show={true}
                    enter="transition-opacity ease-out duration-500"
                    enterFrom="opacity-0 "
                    enterTo="opacity-100 "
                    className="mt-auto"
                    // leave="transition-opacity ease-out duration-500"
                    // leaveFrom="opacity-100 "
                    // leaveTo="opacity-0 "
                  >
                    <img
                      src={data[imageId].logo}
                      className="object-cover w-48 h-16 "
                      alt=""
                    />
                    <div className="mt-6 drop-shadow-md">
                      {data[imageId].title}
                    </div>

                    <div className="mt-4 w-96 line-clamp-4">
                      {data[imageId].desc}
                    </div>
                  </Transition>

                  <div className="flex mt-16 text-sm">
                    <button className="px-4 py-2 mr-0.5 uppercase bg-blue-600 rounded-l hover:bg-blue-700">
                      Buy now
                    </button>
                    <button className="px-4 py-2 bg-blue-600 rounded-r hover:bg-blue-700">
                      +
                    </button>
                  </div>
                </div>

                <Transition
                  appear={imageId === index}
                  show={true}
                  enter="transition-all ease-linear  duration-500"
                  enterFrom="opacity-0 pl-4 scale-x-120"
                  enterTo="opacity-100 pl-0 scale-x-100"
                  //   leave="transition-all duration-1000"
                  //   leaveFrom="opacity-100"
                  //   leaveTo="opacity-0"
                  className="absolute inset-0 overflow-hidden opacity-0 -z-10"
                >
                  <img
                    src={data[imageId].img}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </Transition>
              </>
            )}
          </>
        ))}
      </div>
      <div className="relative flex h-full pl-2 bg-gray-900 md:flex-col">
        {data.map((game, index) => (
          <div
            className={`relative overflow-hidden flex-1 p-2 ${
              index === imageId && 'bg-blue-900'
            }`}
          >
            <img
              className={`object-cover h-24 w-full md:w-36  cursor-pointer hover:opacity-100 rounded`}
              tabIndex={0}
              src={game.img}
              alt=""
              onClick={() => setImageId(index)}
            />
            {index === imageId && (
              <Transition
                appear={index === imageId}
                show={index === imageId}
                enter="transition-all duration-5000"
                enterFrom="w-0 "
                enterTo="w-full "
                className="absolute bottom-0 h-1 -mx-2 transition-all bg-blue-500"
                // leave="transition-all duration-150"
                // leaveFrom="w-100"
                // leaveTo="w-0"
              >
                {/* <div className=""></div> */}
              </Transition>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeShowcase
