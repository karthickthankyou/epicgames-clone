import '../src/index.css'
import { MemoryRouter } from 'react-router-dom'

// addDecorator((story) => (
//   <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
// ))

// export const withMemoryRouter = (story) => (
//   <MemoryRouter>{story()}</MemoryRouter>
// )

import { addDecorator } from '@storybook/react'

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
