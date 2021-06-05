import Card01 from '../../cards/Card01'
export interface ISection01Props {
  sectionTitle: string
  buttonText?: string
}

const Section01 = ({
  sectionTitle,
  buttonText = 'see all',
}: ISection01Props) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>{sectionTitle}</div>
        <button className="px-2 py-1 text-xs tracking-wider uppercase border border-gray-200 rounded">
          {buttonText}
        </button>
      </div>
      <div className="grid grid-cols-1 gap-2 mt-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <Card01
          displayImage="static/media/game.e4f1f703.jpg"
          gameTitle="Cyberpunk 2077"
          price={{
            discount: 10,
            price: 4.99,
          }}
          productionCompany="CD PROJEKT RED"
        />
        <Card01
          displayImage="static/media/game.e4f1f703.jpg"
          gameTitle="Cyberpunk 2077"
          price={{
            discount: 10,
            price: 4.99,
          }}
          productionCompany="CD PROJEKT RED"
        />
        <Card01
          displayImage="static/media/game.e4f1f703.jpg"
          gameTitle="Cyberpunk 2077"
          price={{
            discount: 10,
            price: 4.99,
          }}
          productionCompany="CD PROJEKT RED"
        />
        <Card01
          displayImage="static/media/game.e4f1f703.jpg"
          gameTitle="Cyberpunk 2077"
          price={{
            discount: 10,
            price: 4.99,
          }}
          productionCompany="CD PROJEKT RED"
        />
        <Card01
          displayImage="static/media/game.e4f1f703.jpg"
          gameTitle="Cyberpunk 2077"
          price={{
            discount: 10,
            price: 4.99,
          }}
          productionCompany="CD PROJEKT RED"
        />
      </div>
    </div>
  )
}

export default Section01
