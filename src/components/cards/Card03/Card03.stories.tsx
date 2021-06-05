import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Card03, { ICard03Props } from './Card03'
import * as PriceCardStory from '../../atoms/PriceCard/PriceCard.stories'
import * as AddToFavoritesStory from '../../atoms/AddToFavorites/AddToFavorites.stories'
import image from '../../assets/game.jpg'

export default {
  title: 'components/cards/Card03',
  component: Card03,
} as Meta

const Template: Story<ICard03Props> = (args) => (
  <div>
    <Card03 {...args} />
    <Card03 {...args} />
    <Card03 {...args} />
    <Card03 {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  gameTitle: 'Cyberpunk 2077',
  price: PriceCardStory.Free.args,
  displayImage: image,
  favorite: true,
}
