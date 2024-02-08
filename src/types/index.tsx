export interface ToDoItem {
  id: string
  text: string
  done: boolean
}

export type CallBackFunction = (id: string) => void
