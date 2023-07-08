// form testing
// http://localhost:3000/login

import * as React from 'react'
import faker from 'faker'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

function buildLoginForm(overrides) {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...overrides,
  }
}
test('submitting the form calls onSubmit with username and password', async () => {
  const user = userEvent.setup()
  const {username, password} = buildLoginForm()

  const mockOnSubmit = jest.fn()
  render(<Login onSubmit={mockOnSubmit} />)

  await user.type(screen.getByLabelText(/username/i), username)
  await user.type(screen.getByLabelText(/password/i), password)
  await user.click(screen.getByRole('button', {name: /submit/i}))

  expect(mockOnSubmit).toHaveBeenCalledWith({username, password})
  expect(mockOnSubmit).toHaveBeenCalledTimes(1)
})
