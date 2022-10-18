import { TodoItemStatus } from '../types'

export type GetTodosRequest = {
  maxRecords?: number
  pageSize?: number
}

export type TodoItemFields = {
  Title: string
  Status: TodoItemStatus
}

export type GetTodoItemResponse = {
  id: string
  createdTime?: Date
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
