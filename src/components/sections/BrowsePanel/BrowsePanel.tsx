import image from '../../assets/image.jpg'
export interface IBrowsePanelProps {}

const BrowsePanel = ({}: IBrowsePanelProps) => {
  return (
    <div className="w-full">
      <div>Epic Games Store Catalog</div>
      <div className="grid w-full grid-cols-3 mt-4 overflow-hidden bg-gradient-to-br h-80 from-blue-500 to-yellow-800">
        <div className="flex-grow col-span-1 p-12">
          <div className="text-2xl font-thin tracking-wide">Browse</div>
          <div className="mt-3 text-white max-w-xxs text-opacity-60">
            Explore our catalog for your next favorite game!
          </div>
          <button className="px-6 py-3 mt-4 text-sm tracking-wider uppercase bg-white rounded whitespace-nowrap bg-opacity-20 hover:bg-opacity-30">
            Browse all
          </button>
        </div>
        <div className="relative w-full h-full col-span-2">
          <img
            src={image}
            className="absolute bottom-0 z-20 object-cover h-56 transition-all transform border border-4 border-white border-opacity-50 rounded-lg shadow-lg cursor-pointer hover:z-50 hover:scale-110 filter brightness-125 w-44 left-2/4 -translate-x-2/4"
            alt=""
          />
          <img
            src={image}
            className="absolute z-10 object-cover w-40 transition-all transform rotate-45 border border-4 border-white border-opacity-50 rounded-lg shadow-lg cursor-pointer hover:z-50 hover:scale-110 h-52 filter brightness-110 left-1/3 top-1/3 -translate-x-1/3 -translate-y-1/3"
            alt=""
          />
          <img
            src={image}
            className="absolute z-10 object-cover h-48 transition-all transform border border-4 border-white border-opacity-50 rounded-lg shadow-lg cursor-pointer hover:z-50 hover:scale-110 filter brightness-110 w-36 left-2/3 top-1/3 -translate-x-2/3 -translate-y-1/3"
            alt=""
          />
          <img
            src={image}
            className="absolute object-cover w-40 transition-all transform border border-4 border-white border-opacity-50 rounded-lg shadow-lg cursor-pointer hover:z-50 hover:scale-110 h-52 filter brightness-110 left-1/4 top-1/4 -translate-x-1/3 -translate-y-1/4"
            alt=""
          />
          <img
            src={image}
            className="absolute object-cover h-48 transition-all transform border border-4 border-white border-opacity-50 rounded-lg shadow-lg cursor-pointer hover:z-50 hover:scale-110 filter brightness-110 w-36 left-3/4 top-3/4 -translate-x-3/4 -translate-y-3/4"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default BrowsePanel
