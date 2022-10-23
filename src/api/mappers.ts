import { TodoItemData } from '../types'
import { GetTodoItemResponse, GetTodosResponse } from './types'

export const mapTodoItem = (item: GetTodoItemResponse): TodoItemData => ({
  id: item.id,
  title: item.fields.Title,
  status: item.fields.Status,
  createdAt: item.fields.CreatedAt ? new Date(item.fields.CreatedAt) : undefined,
  doneAt: item.fields.Status === 'Done' && item.fields.DoneAt ? new Date(item.fields.DoneAt) : undefined
})

export const mapTodosResponse = (response: GetTodosResponse) => response.records.map(mapTodoItem)
