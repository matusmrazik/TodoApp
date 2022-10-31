import _ from 'lodash'
import { useMutation } from 'react-query'
import { mapTodoItem } from '../api/mappers'
import { updateTodoItem } from '../api/todos'
import { GetTodoItemResponse } from '../api/types'
import { queryClient } from '../features/queryClient'
import { TodoItemData } from '../types'
import { TODO_LIST_QUERY_KEY } from './todoListQuery'

export const MARK_AS_DONE_MUTATION = 'MarkTaskAsDone'

export const useMarkAsDoneQuery = (
  taskId: string,
  onSuccess: (response: GetTodoItemResponse) => void,
  onFailure: (error: unknown) => void
) =>
  useMutation(() => updateTodoItem(taskId, { Status: 'Done' }).then(res => res.data), {
    mutationKey: MARK_AS_DONE_MUTATION,
    onSuccess: data => {
      queryClient.setQueryData<TodoItemData[] | undefined>([TODO_LIST_QUERY_KEY], prev =>
        prev === undefined ? prev : _.map(prev, x => (x.id !== data.id ? x : { ...x, ...mapTodoItem(data) }))
      )
      onSuccess(data)
    },
    onError: onFailure
  })
