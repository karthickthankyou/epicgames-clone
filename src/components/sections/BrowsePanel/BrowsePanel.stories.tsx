import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import BrowsePanel, { IBrowsePanelProps } from './BrowsePanel'

export default {
  title: 'components/sections/BrowsePanel',
  component: BrowsePanel,
} as Meta

const Template: Story<IBrowsePanelProps> = (args) => <BrowsePanel {...args} />

export const Primary = Template.bind({})
Primary.args = {}
