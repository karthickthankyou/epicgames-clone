import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Card02, { ICard02Props } from './Card02'
import * as PriceCardStory from '../../atoms/PriceCard/PriceCard.stories'
import image from '../../assets/game.jpg'

export default {
  title: 'components/cards/Card02',
  component: Card02,
} as Meta

const Template: Story<ICard02Props> = (args) => <Card02 {...args} />

export const Primary = Template.bind({})
Primary.args = {
  gameTitle: 'Cyberpunk 2077',
  description:
    'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.',
  price: PriceCardStory.Free.args,
  displayImage: image,
}
