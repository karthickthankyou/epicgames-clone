import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Card04, { ICard04Props } from './Card04'
import image from '../../assets/game.jpg'

export default {
  title: 'components/cards/Card04',
  component: Card04,
} as Meta

const Template: Story<ICard04Props> = (args) => <Card04 {...args} />

export const Primary = Template.bind({})
Primary.args = {
  gameTitle: 'Cyberpunk 2077',
  displayImage: image,
  date: '2021-06-10T08:30:00Z',
}
