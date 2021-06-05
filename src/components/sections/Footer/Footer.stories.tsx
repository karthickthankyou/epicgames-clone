import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Footer, { IFooterProps } from './Footer'

export default {
  title: 'components/sections/Footer',
  component: Footer,
} as Meta

const Template: Story<IFooterProps> = (args) => <Footer {...args} />

export const Primary = Template.bind({})
Primary.args = {}
