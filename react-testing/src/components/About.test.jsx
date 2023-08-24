// About.test.jsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import About from './About'

describe('About', () => {

  ...

  test('Input works correctly', async () => {
    render( <About/> )

    userEvent.type(screen.getByTestId("testInput"), "Testing the test")
    userEvent.click(screen.getByText("Print input"))

    expect(screen.getByText("Testing the test")).toBeInTheDocument()

    userEvent.click(screen.getByText("Print input"))
    expect(screen.queryByText("Testing the test")).not.toBeInTheDocument()
  })

})