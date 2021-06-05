import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Section01, { ISection01Props } from './Section01'

export default {
  title: 'components/sections/Section01',
  component: Section01,
} as Meta

const Template: Story<ISection01Props> = (args) => <Section01 {...args} />

export const Primary = Template.bind({})
Primary.args = {
  sectionTitle: 'Mega Sale Offers',
  buttonText: 'wishlist',
}
