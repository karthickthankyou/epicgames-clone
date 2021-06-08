import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Wishlist, { IWishlistProps } from './Wishlist'

export default {
  title: 'components/pages/Wishlist',
  component: Wishlist,
} as Meta

const Template: Story<IWishlistProps> = (args) => <Wishlist {...args} />

export const Primary = Template.bind({})
Primary.args = {}
