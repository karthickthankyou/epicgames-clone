import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import GroupCard03, { IGroupCard03Props } from './GroupCard03'

export default {
  title: 'components/cards/GroupCard03',
  component: GroupCard03,
} as Meta

const Template: Story<IGroupCard03Props> = (args) => <GroupCard03 {...args} />

export const Primary = Template.bind({})
Primary.args = {
  groupTitle: 'New Releases',
}
