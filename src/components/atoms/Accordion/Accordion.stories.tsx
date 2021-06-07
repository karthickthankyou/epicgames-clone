import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Accordion, { IAccordionProps } from './Accordion'

export default {
  title: 'components/atoms/Accordion',
  component: Accordion,
} as Meta

const Template: Story<IAccordionProps> = (args) => <Accordion {...args} />

export const Primary = Template.bind({})
Primary.args = {}
