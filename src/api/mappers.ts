import { TodoItemData, TodoItemDetailData } from '../types'
import { GetTodoItemResponse, GetTodosResponse } from './types'

export const mapTodoItem = (item: GetTodoItemResponse): TodoItemData => ({
  id: item.id,
  title: item.fields.Title,
  status: item.fields.Status
})

export const mapTodoItemResponse = (item: GetTodoItemResponse): TodoItemDetailData => ({
  ...mapTodoItem(item),
  createdAt: item.createdTime ? new Date(item.createdTime) : undefined,
  doneAt: item.fields.Status === 'Done' && item.fields.DoneAt ? new Date(item.fields.DoneAt) : undefined
})

export const mapTodosResponse = (response: GetTodosResponse) => response.records.map(mapTodoItem)
