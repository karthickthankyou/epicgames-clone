import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Navbar, { INavbarProps } from './Navbar'

export default {
  title: 'components/sections/Navbar',
  component: Navbar,
} as Meta

const Template: Story<INavbarProps> = (args) => <Navbar {...args} />

export const Primary = Template.bind({})
Primary.args = {}
