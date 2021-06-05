import GroupCard03 from '../../cards/GroupCard03'
export interface ISectionCard03Props {}

const SectionCard03 = ({}: ISectionCard03Props) => {
  return (
    <div>
      New and Trending
      <div className="grid grid-cols-3 gap-4 mt-4">
        <GroupCard03
          data={[
            {
              displayImage: 'static/media/game.e4f1f703.jpg',
              gameTitle: 'Cyberpunk 2077',
              price: {
                discount: 15,
                price: 10,
              },
            },
            {
              displayImage: 'static/media/game.e4f1f703.jpg',
              gameTitle: 'Cyberpunk 2077',
              price: {
                price: 0,
              },
            },
            {
              displayImage: 'static/media/game.e4f1f703.jpg',
              gameTitle: 'Cyberpunk 2077',
              price: {
                price: 4.99,
              },
            },
            {
              displayImage: 'static/media/game.e4f1f703.jpg',
              gameTitle: 'Cyberpunk 2077',
              price: {
                discount: 50,
                price: 4.99,
              },
            },
            {
              displayImage: 'static/media/game.e4f1f703.jpg',
              gameTitle: 'Cyberpunk 2077',
              price: {
                price: 0,
              },
            },
          ]}
          groupTitle="New Releases"
        />
        <GroupCard03
          viewMore
          data={[
            {
              displayImage: 'static/media/game.e4f1f703.jpg',
              gameTitle: 'Cyberpunk 2077',
              price: {
                discount: 15,
                price: 10,
              },
            },
            {
              displayImage: 'static/media/game.e4f1f703.jpg',
              gameTitle: 'Cyberpunk 2077',
              price: {
                price: 0,
              },
            },
            {
              displayImage: 'static/media/game.e4f1f703.jpg',
              gameTitle: 'Cyberpunk 2077',
              price: {
                price: 4.99,
              },
            },
            {
              displayImage: 'static/media/game.e4f1f703.jpg',
              gameTitle: 'Cyberpunk 2077',
              price: {
                discount: 50,
                price: 4.99,
              },
            },
            {
              displayImage: 'static/media/game.e4f1f703.jpg',
              gameTitle: 'Cyberpunk 2077',
              price: {
                price: 0,
              },
            },
          ]}
          groupTitle="Top Sellers"
        />
        <GroupCard03
          data={[
            {
              displayImage: 'static/media/game.e4f1f703.jpg',
              gameTitle: 'Cyberpunk 2077',
              price: {
                discount: 15,
                price: 10,
              },
            },
            {
              displayImage: 'static/media/game.e4f1f703.jpg',
              gameTitle: 'Cyberpunk 2077',
              price: {
                price: 0,
              },
            },
            {
              displayImage: 'static/media/game.e4f1f703.jpg',
              gameTitle: 'Cyberpunk 2077',
              price: {
                price: 4.99,
              },
            },
            {
              displayImage: 'static/media/game.e4f1f703.jpg',
              gameTitle: 'Cyberpunk 2077',
              price: {
                discount: 50,
                price: 4.99,
              },
            },
            {
              displayImage: 'static/media/game.e4f1f703.jpg',
              gameTitle: 'Cyberpunk 2077',
              price: {
                price: 0,
              },
            },
          ]}
          groupTitle="Coming Soon"
        />
      </div>
    </div>
  )
}

export default SectionCard03
