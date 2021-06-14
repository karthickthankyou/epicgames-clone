import React from 'react'
import white_img from '../../assets/white-bg.jpg'
import img from '../../assets/image.jpg'
import img2 from '../../assets/game.jpg'
import cyberpunk from '../../assets/cyberpunk.png'
import { Story, Meta } from '@storybook/react/types-6-0'
import HomeShowcase, { IHomeShowcaseProps } from './HomeShowcase'

export default {
  title: 'components/sections/HomeShowcase',
  component: HomeShowcase,
} as Meta

const Template: Story<IHomeShowcaseProps> = (args) => <HomeShowcase {...args} />

export const Primary = Template.bind({})
Primary.args = {
  data: [
    {
      img: img,
      logo: cyberpunk,
      title: 'NIGHT CITY CHANGES EVERY BODY',
      desc: `Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.`,
    },
    {
      img: img2,
      logo: cyberpunk,
      title: 'NIGHT CITY CHANGES EVERY BODY',
      desc: `Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.`,
    },
    {
      img: white_img,
      logo: cyberpunk,
      title: 'NIGHT CITY CHANGES EVERY BODY',
      desc: `Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.`,
    },
    {
      img: img,
      logo: cyberpunk,
      title: 'NIGHT CITY CHANGES EVERY BODY',
      desc: `Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.`,
    },
    {
      img: img2,
      logo: cyberpunk,
      title: 'NIGHT CITY CHANGES EVERY BODY',
      desc: `Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.`,
    },
    {
      img: white_img,
      logo: cyberpunk,
      title: 'NIGHT CITY CHANGES EVERY BODY',
      desc: `Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.`,
    },
  ],
}
