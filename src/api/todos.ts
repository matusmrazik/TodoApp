import axios from 'axios'
import { DeleteTodoItemResponse, GetTodoItemResponse, GetTodosResponse, TodoItemEditableFields } from './types'

const API_KEY = ''

export const BASE_TODOS_URL = 'https://api.airtable.com/v0/app42gVI0Kr0giHuX/Todos'

export const getTodos = () =>
  axios.get<GetTodosResponse>(BASE_TODOS_URL, {
    params: { sort: [{ field: 'CreatedAt', direction: 'desc' }] },
    headers: { Authorization: `Bearer ${API_KEY}` }
  })

export const getTodoItem = (id: string) =>
  axios.get<GetTodoItemResponse>(`${BASE_TODOS_URL}/${id}`, { headers: { Authorization: `Bearer ${API_KEY}` } })

export const addTodoItem = (title: string) =>
  axios.post<GetTodoItemResponse>(
    BASE_TODOS_URL,
    { fields: { Title: title, Status: 'Todo' } },
    { headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' } }
  )

export const updateTodoItem = (id: string, fields: Partial<TodoItemEditableFields>) =>
  axios.patch<GetTodoItemResponse>(
    `${BASE_TODOS_URL}/${id}`,
    { fields },
    { headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' } }
  )

export const deleteTodoItem = (id: string) =>
  axios.delete<DeleteTodoItemResponse>(`${BASE_TODOS_URL}/${id}`, { headers: { Authorization: `Bearer ${API_KEY}` } })
