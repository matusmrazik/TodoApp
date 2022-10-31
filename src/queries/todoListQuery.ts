import { useQuery } from 'react-query'
import { mapTodosResponse } from '../api/mappers'
import { getTodos } from '../api/todos'

export const TODO_LIST_QUERY_KEY = 'TodoList'

export const useTodoListQuery = () =>
  useQuery([TODO_LIST_QUERY_KEY], () => getTodos().then(res => mapTodosResponse(res.data)))
