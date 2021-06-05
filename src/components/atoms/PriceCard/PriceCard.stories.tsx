import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import PriceCard, { IPriceCardProps } from './PriceCard'

export default {
  title: 'components/atoms/PriceCard',
  component: PriceCard,
} as Meta

const Template: Story<IPriceCardProps> = (args) => <PriceCard {...args} />

export const WithDiscount = Template.bind({})
WithDiscount.args = {
  price: 4.99,
  discount: 10,
}
export const WithOutDiscount = Template.bind({})
WithOutDiscount.args = {
  price: 4.99,
}
