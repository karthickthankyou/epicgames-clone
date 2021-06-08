import SortDropdown from '../../atoms/SortDropdown'
import Accordion from '../../atoms/Accordion'
import Card01 from '../../cards/Card01'

export interface IBrowseGamesProps {}

const BrowseGames = ({}: IBrowseGamesProps) => {
  return (
    <div className="flex">
      <div className="w-full ">
        <div className="flex justify-between my-1">
          <SortDropdown
            sortByOptions={[
              'Relevance',
              'New Release',
              'Release Date',
              'Alphabetical',
              'Price: Low to High',
              'Price: High to Low',
            ]}
          />
          <div className="block md:hidden">Filter</div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card01
            displayImage="static/media/game.e4f1f703.jpg"
            gameTitle="Cyberpunk 2077"
            price={{
              price: 0,
            }}
            productionCompany="CD PROJEKT RED"
          />{' '}
          <Card01
            displayImage="static/media/game.e4f1f703.jpg"
            gameTitle="Cyberpunk 2077"
            price={{
              price: 0,
            }}
            productionCompany="CD PROJEKT RED"
          />{' '}
          <Card01
            displayImage="static/media/game.e4f1f703.jpg"
            gameTitle="Cyberpunk 2077"
            price={{
              price: 0,
            }}
            productionCompany="CD PROJEKT RED"
          />{' '}
          <Card01
            displayImage="static/media/game.e4f1f703.jpg"
            gameTitle="Cyberpunk 2077"
            price={{
              price: 0,
            }}
            productionCompany="CD PROJEKT RED"
          />{' '}
          <Card01
            displayImage="static/media/game.e4f1f703.jpg"
            gameTitle="Cyberpunk 2077"
            price={{
              price: 0,
            }}
            productionCompany="CD PROJEKT RED"
          />{' '}
          <Card01
            displayImage="static/media/game.e4f1f703.jpg"
            gameTitle="Cyberpunk 2077"
            price={{
              price: 0,
            }}
            productionCompany="CD PROJEKT RED"
          />{' '}
          <Card01
            displayImage="static/media/game.e4f1f703.jpg"
            gameTitle="Cyberpunk 2077"
            price={{
              price: 0,
            }}
            productionCompany="CD PROJEKT RED"
          />{' '}
          <Card01
            displayImage="static/media/game.e4f1f703.jpg"
            gameTitle="Cyberpunk 2077"
            price={{
              price: 0,
            }}
            productionCompany="CD PROJEKT RED"
          />{' '}
          <Card01
            displayImage="static/media/game.e4f1f703.jpg"
            gameTitle="Cyberpunk 2077"
            price={{
              price: 0,
            }}
            productionCompany="CD PROJEKT RED"
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Accordion />
      </div>
    </div>
  )
}

export default BrowseGames
