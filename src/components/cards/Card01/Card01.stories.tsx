import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Card01, { ICard01Props } from './Card01'
import * as PriceCardStory from '../../atoms/PriceCard/PriceCard.stories'

export default {
  title: 'components/cards/Card01',
  component: Card01,
} as Meta

const Template: Story<ICard01Props> = (args) => (
  <div className="max-w-xs">
    <Card01 {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  gameTitle: 'Cyberpunk 2077',
  productionCompany: 'CD PROJEKT RED',
  price: PriceCardStory.WithDiscount.args,
}
export const Second = Template.bind({})
Second.args = {
  gameTitle: 'Cyberpunk 2077 Cyberpunk 2077 Cyberpunk 2077 ',
  productionCompany: 'CD PROJEKT RED CD PROJEKT RED CD PROJEKT RED ',
  price: PriceCardStory.WithOutDiscount.args,
}
