import { ReactComponent as NoResultsSVG } from '../../assets/no_results_2.svg'
//undraw.co
export interface INoResultsProps {}

const NoResults = ({}: INoResultsProps) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto text-center h-96 w-80">
      <NoResultsSVG className="w-40 h-24" />
      <div className="mt-2 text-xl font-thin">No results found</div>
      <div className="mt-1 text-sm text-gray-400">
        Unfortunately I could not find any results matching your search.
      </div>
    </div>
  )
}

export default NoResults
