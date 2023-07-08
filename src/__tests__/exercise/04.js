// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', async () => {
  const user = userEvent.setup()
  const username = 'Some User Name'
  const password = 'secretPassword'

  const mockOnSubmit = jest.fn()
  render(<Login onSubmit={mockOnSubmit} />)

  await user.type(screen.getByLabelText(/username/i), username)
  await user.type(screen.getByLabelText(/password/i), password)
  await user.click(screen.getByRole('button', {name: /submit/i}))

  expect(mockOnSubmit).toHaveBeenCalledWith({username, password})
  expect(mockOnSubmit).toHaveBeenCalledTimes(1)
})
