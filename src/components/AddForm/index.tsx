import { ChangeEvent, SyntheticEvent, useId, useState } from 'react'

interface AddFormProps {
  onSubmit: (text: string) => void
}

const AddForm = ({ onSubmit }: AddFormProps) => {
  const [text, setText] = useState<string>('')
  const uid = useId()

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    onSubmit(text)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <form className="flex gap-2 p-2 " onSubmit={handleSubmit}>
      <label htmlFor={uid} className="self-baseline pt-1 text-orange-700">
        Enter ToDo text:
      </label>
      <input
        className="min-w-[300px] rounded-lg border-2 border-orange-500 px-2  text-orange-700 outline-orange-500"
        id={uid}
        value={text}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
      />
      <button
        className="self-end rounded-lg bg-orange-500 px-[20px] py-1 text-white transition-colors hover:bg-orange-700"
        type="submit"
      >
        Ok
      </button>
    </form>
  )
}

export default AddForm
