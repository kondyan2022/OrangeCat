import { useCallback, useState } from 'react'
import { ToDoItem } from 'types'
import ToDoItemList from './ToDoItemList'
import AddForm from './AddForm'
import imageCat from '../assets/OrangeCat.jpg'

const startList: ToDoItem[] = [
  { id: '1', text: 'todo 1', done: false },
  { id: '2', text: 'todo 2', done: true },
  { id: '3', text: 'todo 3', done: true }
]

function App() {
  const [toDoList, setToDoList] = useState<ToDoItem[]>(startList)
  const [isAdd, setIsAdd] = useState<boolean>(false)

  const deleteItem = useCallback((id: string): void => {
    setToDoList((prev) => [...prev.filter((elem) => elem.id !== id)])
  }, [])

  const changeItem = useCallback((id: string): void => {
    setToDoList((prev) =>
      prev.map((elem) =>
        elem.id === id ? { ...elem, done: !elem.done } : elem
      )
    )
  }, [])

  const addItem = useCallback((text: string) => {
    setIsAdd(false)
    if (text) {
      setToDoList((prev) => [
        ...prev,
        { id: crypto.randomUUID(), text, done: false }
      ])
    }
  }, [])

  return (
    <div className="container mx-auto p-10">
      <div className="mb-10 ml-8  flex items-center gap-7">
        <img src={imageCat} alt="Wonderful orange cat" width={80} />
        <h1 className="text-4xl font-black text-orange-800 ">
          Happy cat ToDo list
        </h1>
      </div>
      {isAdd ? (
        <AddForm onSubmit={addItem} />
      ) : (
        <button
          className="self-end rounded-lg bg-orange-500  px-[20px] py-[12px] text-white transition-colors hover:bg-orange-700"
          onClick={() => setIsAdd(true)}
        >
          Add new Todo
        </button>
      )}
      <ul className="mt-[10px] flex w-min flex-col gap-1">
        {toDoList.map((elem) => (
          <li
            className="flex items-center gap-5 rounded-2xl border-4 border-orange-100 px-[20px] py-[5px] text-orange-700  "
            key={elem.id}
          >
            <ToDoItemList
              {...elem}
              onDelete={deleteItem}
              onChange={changeItem}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
