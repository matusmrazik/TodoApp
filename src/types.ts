export type TodoItemStatus = 'Todo' | 'Done'

export type TodoItemData = {
  id: string
  title: string
  status: TodoItemStatus
}

export type TodoItemDetailData = TodoItemData & {
  createdAt?: Date
  doneAt?: Date
}
