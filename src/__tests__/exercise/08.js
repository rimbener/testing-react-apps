// testing custom hooks
// http://localhost:3000/counter-hook

import {fireEvent, render, screen} from '@testing-library/react'
import useCounter from '../../components/use-counter'

function TestComponent() {
  const {count, increment, decrement} = useCounter()

  return (
    <div>
      <div>Current count: {count}</div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
test('exposes the count and increment/decrement functions', () => {
  render(<TestComponent />)
  const increment = screen.getByRole('button', {name: /increment/i})
  const decrement = screen.getByRole('button', {name: /decrement/i})
  const message = screen.getByText(/current count/i)
  
  expect(message).toHaveTextContent('Current count: 0')
  fireEvent.click(increment)
  fireEvent.click(increment)
  expect(screen.getByText(/count/i)).toHaveTextContent('Current count: 2')

  fireEvent.click(decrement)
  expect(screen.getByText(/count/i)).toHaveTextContent('Current count: 1')
})
