import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import SampleSkeleton, { ISampleSkeletonProps } from './SampleSkeleton'

export default {
  title: 'components/cards/SampleSkeleton',
  component: SampleSkeleton,
} as Meta

const Template: Story<ISampleSkeletonProps> = (args) => (
  <SampleSkeleton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
