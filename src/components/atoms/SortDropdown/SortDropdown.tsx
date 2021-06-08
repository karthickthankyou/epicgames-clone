import { useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline'

export interface ISortDropdownProps {}

type ISortbyOptions =
  | 'Relevance'
  | 'New Release'
  | 'Release Date'
  | 'Alphabetical'
  | 'Price: Low to High'
  | 'Price: High to Low'

const sortByOptions: ISortbyOptions[] = [
  'Relevance',
  'New Release',
  'Release Date',
  'Alphabetical',
  'Price: Low to High',
  'Price: High to Low',
]

const SortDropdown = ({}: ISortDropdownProps) => {
  const [open, setOpen] = useState(false)
  const [sortby, setSortby] = useState<ISortbyOptions>('Relevance')
  return (
    <div className="relative">
      <button
        className="flex justify-between w-full p-2"
        onClick={() => setOpen((state) => !state)}
      >
        Sortby: {sortby}
        {open ? (
          <ChevronUpIcon className="inline w-5 h-5 ml-2" />
        ) : (
          <ChevronDownIcon className="inline w-5 h-5 ml-2" />
        )}
      </button>
      {open && (
        <div className="absolute inset-x-0 bg-gray-800 top-full">
          {sortByOptions.map((option) => {
            return (
              <button
                className={`block w-full p-2 text-left  hover:bg-gray-700  ${
                  option === sortby
                    ? ' underline text-gray-100'
                    : 'text-gray-400'
                }`}
                onClick={() => {
                  setSortby(option)
                  setOpen(false)
                }}
              >
                {option}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SortDropdown
