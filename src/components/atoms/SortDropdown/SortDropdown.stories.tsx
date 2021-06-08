import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import SortDropdown, { ISortDropdownProps } from './SortDropdown'

export default {
  title: 'components/atoms/SortDropdown',
  component: SortDropdown,
} as Meta

const Template: Story<ISortDropdownProps> = (args) => <SortDropdown {...args} />

const sortByOptions = [
  'Relevance',
  'New Release',
  'Release Date',
  'Alphabetical',
  'Price: Low to High',
  'Price: High to Low',
]
export const Primary = Template.bind({})
Primary.args = { sortByOptions: sortByOptions }
