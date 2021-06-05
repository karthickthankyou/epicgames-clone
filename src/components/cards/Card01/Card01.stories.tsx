import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Card01, { ICard01Props } from './Card01'
import * as PriceCardStory from '../../atoms/PriceCard/PriceCard.stories'
import image from '../../assets/game.jpg'

export default {
  title: 'components/cards/Card01',
  component: Card01,
} as Meta

const Template: Story<ICard01Props> = (args) => (
  <div className="max-w-xs">
    <Card01 {...args} />
  </div>
)

export const Free = Template.bind({})
Free.args = {
  gameTitle: 'Cyberpunk 2077',
  productionCompany: 'CD PROJEKT RED',
  price: PriceCardStory.Free.args,
  displayImage: image,
}

export const Primary = Template.bind({})
Primary.args = {
  gameTitle: 'Cyberpunk 2077',
  productionCompany: 'CD PROJEKT RED',
  price: PriceCardStory.WithDiscount.args,
  displayImage: image,
}
export const Second = Template.bind({})
Second.args = {
  gameTitle: 'Cyberpunk 2077',
  productionCompany: 'CD PROJEKT RED',
  price: PriceCardStory.WithOutDiscount.args,
  displayImage: image,
}
