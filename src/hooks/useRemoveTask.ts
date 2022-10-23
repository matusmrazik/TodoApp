import { useCallback, useState } from 'react'
import { deleteTodoItem } from '../api/todos'
import { DeleteTodoItemResponse } from '../api/types'
import { LoadingStatus } from '../types'

export const useRemoveTask = (
  taskId: string,
  onSuccess: (response: DeleteTodoItemResponse) => void,
  onFailure: () => void
) => {
  const [status, setStatus] = useState<LoadingStatus>('NotLoaded')

  const submit = useCallback(() => {
    setStatus('Loading')
    deleteTodoItem(taskId).then(
      response => {
        setStatus('Success')
        onSuccess(response.data)
      },
      error => {
        setStatus('Error')
        console.log(error)
        onFailure()
      }
    )
  }, [taskId, onSuccess, onFailure])

  return { status, submit }
}
