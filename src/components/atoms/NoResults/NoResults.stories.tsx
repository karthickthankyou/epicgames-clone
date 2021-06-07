import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import NoResults, { INoResultsProps } from './NoResults'

export default {
  title: 'components/atoms/NoResults',
  component: NoResults,
} as Meta

const Template: Story<INoResultsProps> = (args) => <NoResults {...args} />

export const Primary = Template.bind({})
Primary.args = {}
