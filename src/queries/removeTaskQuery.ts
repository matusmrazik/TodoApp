import _ from 'lodash'
import { useMutation } from 'react-query'
import { deleteTodoItem } from '../api/todos'
import { DeleteTodoItemResponse } from '../api/types'
import { queryClient } from '../features/queryClient'
import { TodoItemData } from '../types'
import { TODO_LIST_QUERY_KEY } from './todoListQuery'

export const REMOVE_TASK_MUTATION = 'RemoveTask'

export const useRemoveTaskQuery = (
  taskId: string,
  onSuccess: (response: DeleteTodoItemResponse) => void,
  onFailure: (error: unknown) => void
) =>
  useMutation(() => deleteTodoItem(taskId).then(res => res.data), {
    mutationKey: REMOVE_TASK_MUTATION,
    onSuccess: data => {
      queryClient.setQueryData<TodoItemData[] | undefined>([TODO_LIST_QUERY_KEY], prev =>
        prev === undefined ? prev : _.reject(prev, ['id', data.id])
      )
      onSuccess(data)
    },
    onError: onFailure
  })
