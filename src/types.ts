export type TodoItemStatus = 'Todo' | 'Done'

export type TodoItemData = {
  id: string
  title: string
  status: TodoItemStatus
  createdAt?: Date
  doneAt?: Date
}
