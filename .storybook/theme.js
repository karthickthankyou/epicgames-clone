import { create } from '@storybook/theming'
import image from '../src/components/assets/game.jpg'

export default create({
  base: 'dark',
  brandTitle: 'Epic clone storybook',
  brandUrl: 'https://example.com',
  brandImage: image,
  // 'https://images.unsplash.com/photo-1569949152890-7eefde49183e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80',
})
