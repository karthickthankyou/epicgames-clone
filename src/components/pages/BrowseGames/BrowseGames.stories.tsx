import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import BrowseGames, { IBrowseGamesProps } from './BrowseGames'

export default {
  title: 'components/pages/BrowseGames',
  component: BrowseGames,
} as Meta

const Template: Story<IBrowseGamesProps> = (args) => <BrowseGames {...args} />

export const Primary = Template.bind({})
Primary.args = {}
