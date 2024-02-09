import { render, screen } from '@testing-library/react'

import ToDoItemList from '.'

describe('<ToDoItemList />', () => {
  const props = {
    id: '1',
    text: 'Breakfast',
    done: false,
    onDelete: (id: string) => {
      id
    },
    onChange: (id: string) => {
      id
    }
  }
  it('should render the data from props ', () => {
    const { container } = render(<ToDoItemList {...props} />)

    expect(screen.getByText(new RegExp(props.text, 'i'))).toBeInTheDocument()

    expect(container.firstChild?.nextSibling).toHaveClass(
      'size-4 cursor-pointer rounded border-2 transition-colors bg-transparent'
    )
  })

  it('should render the changed data from props ', () => {
    props.done = true
    const { container } = render(<ToDoItemList {...props} />)
    expect(container.firstChild?.nextSibling).toHaveClass(
      'size-4 cursor-pointer rounded border-2 transition-colors bg-orange-700'
    )
  })
})
