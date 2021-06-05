import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import SectionCard04, { ISectionCard04Props } from './SectionCard04'

export default {
  title: 'components/sections/SectionCard04',
  component: SectionCard04,
} as Meta

const Template: Story<ISectionCard04Props> = (args) => (
  <SectionCard04 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
