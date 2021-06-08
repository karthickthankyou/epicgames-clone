import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Card05, { ICard05Props } from './Card05'
import * as PriceCardStory from '../../atoms/PriceCard/PriceCard.stories'
import image from '../../assets/game.jpg'

export default {
  title: 'components/cards/Card05',
  component: Card05,
} as Meta

const Template: Story<ICard05Props> = (args) => (
  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
    <Card05 {...args} />
    <Card05 {...args} />
    <Card05 {...args} />
    <Card05 {...args} />
    <Card05 {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  gameTitle: 'Cyberpunk 2077',
  productionCompany: 'CD PROJEKT RED',
  price: PriceCardStory.WithDiscount.args,
  displayImage: image,
  date: '2021-06-10T08:30:00Z',
  review:
    'An open world you can get lost in and continue finding new things to do. An open world you can get lost in and continue finding new things to do',
}
