import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import OutlineButton, { IOutlineButtonProps } from './OutlineButton'

export default {
  title: 'components/atoms/OutlineButton',
  component: OutlineButton,
} as Meta

const Template: Story<IOutlineButtonProps> = (args) => (
  <OutlineButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  buttonText: 'Hello World',
}
