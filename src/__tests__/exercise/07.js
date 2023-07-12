// testing with context and a custom render method
// http://localhost:3000/easy-button

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {ThemeProvider} from '../../components/theme'
import EasyButton from '../../components/easy-button'

const Wrapper = ({children}) => <ThemeProvider>{children}</ThemeProvider>

test('renders with the light styles for the light theme', () => {
  render(<EasyButton>Easy</EasyButton>, {wrapper: Wrapper})
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})
