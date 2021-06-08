import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import EarlyAccess, { IEarlyAccessProps } from './EarlyAccess'

export default {
  title: 'components/atoms/EarlyAccess',
  component: EarlyAccess,
} as Meta

const Template: Story<IEarlyAccessProps> = (args) => <EarlyAccess {...args} />

export const Primary = Template.bind({})
Primary.args = {}
