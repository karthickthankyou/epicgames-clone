import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import GroupCard03, { IGroupCard03Props } from './GroupCard03'

export default {
  title: 'components/cards/GroupCard03',
  component: GroupCard03,
} as Meta

const Template: Story<IGroupCard03Props> = (args) => <GroupCard03 {...args} />

export const Primary = Template.bind({})
Primary.args = {
  groupTitle: 'New Releases',
  data: [
    {
      displayImage: 'static/media/game.e4f1f703.jpg',
      favorite: true,
      gameTitle: 'Cyberpunk 2077',
      price: {
        price: 10,
      },
    },

    {
      displayImage: 'static/media/game.e4f1f703.jpg',
      gameTitle: 'Cyberpunk 2077',
      price: {
        price: 10,
        discount: 15,
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
        price: 4.99,
        discount: 50,
      },
    },

    {
      displayImage: 'static/media/game.e4f1f703.jpg',

      gameTitle: 'Cyberpunk 2077',
      price: {
        price: 0,
      },
    },
  ],
}
