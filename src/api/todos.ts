import axios from 'axios'
import { DeleteTodoItemResponse, GetTodosRequest, GetTodosResponse, TodoItemFields, GetTodoItemResponse } from './types'

// rework this into regular api call, feel free to use any open api
export const todos = (): Promise<GetTodosResponse> =>
  new Promise(res => {
    setTimeout(() => {
      res({
        records: [
          {
            id: '1',
            fields: { Title: 'Go shopping', Status: 'Todo' }
          },
          {
            id: '2',
            fields: { Title: 'Job interview', Status: 'Todo' }
          },
          {
            id: '3',
            fields: { Title: 'Prepare homework', Status: 'Todo' }
          }
        ]
      })
    }, 100)
  })

const API_KEY = ''

export const BASE_TODOS_URL = 'https://api.airtable.com/v0/app42gVI0Kr0giHuX/Todos'

export const getTodos = (params?: GetTodosRequest) =>
  axios.get<GetTodosResponse>(BASE_TODOS_URL, { data: params, headers: { Authorization: `Bearer ${API_KEY}` } })

export const getTodoItem = (id: string) =>
  axios.get<GetTodoItemResponse>(`${BASE_TODOS_URL}/${id}`, { headers: { Authorization: `Bearer ${API_KEY}` } })

export const addTodoItem = (title: string) =>
  axios.post<GetTodoItemResponse>(
    BASE_TODOS_URL,
    { fields: { Title: title, Status: 'Todo' } },
    { headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' } }
  )

export const updateTodoItem = (id: string, fields: TodoItemFields) =>
  axios.patch<GetTodoItemResponse>(
    `${BASE_TODOS_URL}/${id}`,
    { fields },
    { headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' } }
  )

export const deleteTodoItem = (id: string) =>
  axios.delete<DeleteTodoItemResponse>(`${BASE_TODOS_URL}/${id}`, { headers: { Authorization: `Bearer ${API_KEY}` } })
