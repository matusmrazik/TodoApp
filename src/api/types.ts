import { TodoItemStatus } from '../types'

export type TodoItemEditableFields = {
  Title: string
  Status: TodoItemStatus
}

export type TodoItemFields = TodoItemEditableFields & {
  CreatedAt?: string
  DoneAt?: string
}

export type GetTodoItemResponse = {
  id: string
  fields: TodoItemFields
}

export type GetTodosResponse = {
  records: GetTodoItemResponse[]
  offset?: string
}

export type DeleteTodoItemResponse = {
  id: string
  deleted: boolean
}
