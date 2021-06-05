import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Card02, { ICard02Props } from './Card02'

export default {
  title: 'components/cards/Card02',
  component: Card02,
} as Meta

const Template: Story<ICard02Props> = (args) => <Card02 {...args} />

export const Primary = Template.bind({})
Primary.args = {}
