import { TodoItemStatus } from '../types'

export type GetTodosRequest = {
  maxRecords?: number
  pageSize?: number
}

export type TodoItemEditableFields = {
  Title: string
  Status: TodoItemStatus
}

export type TodoItemFields = TodoItemEditableFields & {
  DoneAt?: string
}

export type GetTodoItemResponse = {
  id: string
  createdTime?: string
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
