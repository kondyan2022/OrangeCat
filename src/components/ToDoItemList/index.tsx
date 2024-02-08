import React, { memo } from 'react'
import { CallBackFunction, ToDoItem } from 'types'

interface ToDoItemProps extends ToDoItem {
  onDelete: CallBackFunction
  onChange: CallBackFunction
}

const ToDoItemList = memo(function ToDoItemList({
  id,
  text,
  done,
  onDelete,
  onChange
}: ToDoItemProps) {
  const handleDeleteItem = () => {
    onDelete(id)
  }
  const handleChangeDone = () => {
    onChange(id)
  }

  return (
    <>
      <span className="min-w-[400px]">{`${text}`}</span>
      <span
        className={`size-4 cursor-pointer rounded border-2 transition-colors ${
          done ? 'bg-orange-700' : 'bg-transparent'
        }`}
        onClick={handleChangeDone}
      ></span>
      <button
        type="button"
        onClick={handleDeleteItem}
        className="rounded border-orange-500 px-[5px] transition-colors hover:bg-orange-700 hover:text-white  "
      >
        Delete
      </button>
    </>
  )
})

export default ToDoItemList
