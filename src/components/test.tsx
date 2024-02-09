import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should render the App', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /Happy cat ToDo list/i,
        level: 1
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('list')).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /Add new ToDo/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Wonderful orange cat/i })
    ).toBeInTheDocument()
  })
})
