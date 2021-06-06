import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import AddToFavorites, { IAddToFavoritesProps } from './AddToFavorites'

export default {
  title: 'components/atoms/AddToFavorites',
  component: AddToFavorites,
} as Meta

const Template: Story<IAddToFavoritesProps> = (args) => (
  <div className="flex items-center justify-center w-screen h-screen">
    <AddToFavorites {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  favorite: true,
  hovered: true,
}
