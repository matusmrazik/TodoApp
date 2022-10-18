import { TodoItemData } from '../types'
import { GetTodosResponse } from './types'

export const mapTodosResponse = (response: GetTodosResponse) =>
  response.records.map((rec): TodoItemData => ({ id: rec.id, title: rec.fields.Title, status: rec.fields.Status }))
