import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import SectionCard03, { ISectionCard03Props } from './SectionCard03'
import * as Card03Stories from '../../cards/GroupCard03/GroupCard03.stories'

export default {
  title: 'components/sections/SectionCard03',
  component: SectionCard03,
} as Meta

const Template: Story<ISectionCard03Props> = (args) => (
  <SectionCard03 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  data: Card03Stories.Primary.args,
}
