import HomeShowcase from '../../sections/HomeShowcase'
import Card01 from '../../cards/Card01'
import Card02 from '../../cards/Card02'
import SectionCard04 from '../../sections/SectionCard04'
import SectionCard03 from '../../sections/SectionCard03'
import BrowsePanel from '../../sections/BrowsePanel'
import Footer from '../../sections/Footer'
import Navbar from '../../sections/Navbar'
export interface IHomeProps {}

const data = [
  {
    displayImage: 'static/media/game.e4f1f703.jpg',
    gameTitle: 'Cyberpunk 2077',
    price: {
      discount: 10,
      price: 4.99,
    },
    productionCompany: 'CD PROJEKT RED',
  },
  {
    displayImage: 'static/media/game.e4f1f703.jpg',
    gameTitle: 'Cyberpunk 2077',
    price: {
      discount: 10,
      price: 4.99,
    },
    productionCompany: 'CD PROJEKT RED',
  },
  {
    displayImage: 'static/media/game.e4f1f703.jpg',
    gameTitle: 'Cyberpunk 2077',
    price: {
      discount: 10,
      price: 4.99,
    },
    productionCompany: 'CD PROJEKT RED',
  },
  {
    displayImage: 'static/media/game.e4f1f703.jpg',
    gameTitle: 'Cyberpunk 2077',
    price: {
      discount: 10,
      price: 4.99,
    },
    productionCompany: 'CD PROJEKT RED',
  },
  {
    displayImage: 'static/media/game.e4f1f703.jpg',
    gameTitle: 'Cyberpunk 2077',
    price: {
      discount: 10,
      price: 4.99,
    },
    productionCompany: 'CD PROJEKT RED',
  },
]

const Home = ({}: IHomeProps) => {
  return (
    <div className="container mx-auto space-y-24">
      <Navbar />
      <HomeShowcase
        data={[
          {
            desc:
              'Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.',
            img: 'static/media/image.474eba9e.jpg',
            logo: 'static/media/cyberpunk.fbe030a5.png',
            title: 'NIGHT CITY CHANGES EVERY BODY',
          },
          {
            desc:
              'Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.',
            img: 'static/media/game.e4f1f703.jpg',
            logo: 'static/media/cyberpunk.fbe030a5.png',
            title: 'NIGHT CITY CHANGES EVERY BODY',
          },
          {
            desc:
              'Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.',
            img: 'static/media/white-bg.b18d33ca.jpg',
            logo: 'static/media/cyberpunk.fbe030a5.png',
            title: 'NIGHT CITY CHANGES EVERY BODY',
          },
          {
            desc:
              'Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.',
            img: 'static/media/image.474eba9e.jpg',
            logo: 'static/media/cyberpunk.fbe030a5.png',
            title: 'NIGHT CITY CHANGES EVERY BODY',
          },
          {
            desc:
              'Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.',
            img: 'static/media/game.e4f1f703.jpg',
            logo: 'static/media/cyberpunk.fbe030a5.png',
            title: 'NIGHT CITY CHANGES EVERY BODY',
          },
          {
            desc:
              'Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.',
            img: 'static/media/white-bg.b18d33ca.jpg',
            logo: 'static/media/cyberpunk.fbe030a5.png',
            title: 'NIGHT CITY CHANGES EVERY BODY',
          },
        ]}
      />
      <div className="flex space-x-6 overflow-x-scroll md:grid-cols-3 md:gap-6 md:space-x-0 md:grid ">
        {[1, 2, 3].map((i) => (
          <Card02
            description={data[i].productionCompany}
            displayImage={data[i].displayImage}
            gameTitle={data[i].gameTitle}
            price={data[i].price}
          />
        ))}
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg">Mega Sale Offers</h3>
          <button className="px-2 py-1 text-sm uppercase border rounded hover:bg-white hover:bg-opacity-10">
            see all
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4 lg:grid-cols-5 ">
          {data.map((game) => (
            <div className="last:hidden lg:last:block">
              <Card01
                displayImage={game.displayImage}
                gameTitle={game.gameTitle}
                price={game.price}
                productionCompany={game.productionCompany}
              />
            </div>
          ))}
        </div>
      </div>
      <SectionCard04 />
      <SectionCard03 />
      <BrowsePanel />
      <Footer />
    </div>
  )
}

export default Home
