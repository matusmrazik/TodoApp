import { useMutation } from 'react-query'
import { mapTodoItem } from '../api/mappers'
import { addTodoItem } from '../api/todos'
import { GetTodoItemResponse } from '../api/types'
import { queryClient } from '../features/queryClient'
import { TodoItemData } from '../types'
import { TODO_LIST_QUERY_KEY } from './todoListQuery'

export const ADD_TASK_MUTATION = 'AddTask'

export const useAddTaskQuery = (
  taskDescription: string,
  onSuccess: (response: GetTodoItemResponse) => void,
  onFailure: (error: unknown) => void
) =>
  useMutation(() => addTodoItem(taskDescription).then(res => res.data), {
    mutationKey: ADD_TASK_MUTATION,
    onSuccess: data => {
      queryClient.setQueryData<TodoItemData[] | undefined>([TODO_LIST_QUERY_KEY], prev =>
        prev === undefined ? [mapTodoItem(data)] : [mapTodoItem(data), ...prev]
      )
      onSuccess(data)
    },
    onError: onFailure
  })
