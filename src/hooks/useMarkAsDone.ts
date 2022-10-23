import { useCallback, useState } from 'react'
import { updateTodoItem } from '../api/todos'
import { GetTodoItemResponse } from '../api/types'
import { LoadingStatus } from '../types'

export const useMarkAsDone = (
  taskId: string,
  onSuccess: (response: GetTodoItemResponse) => void,
  onFailure: () => void
) => {
  const [status, setStatus] = useState<LoadingStatus>('NotLoaded')

  const submit = useCallback(() => {
    setStatus('Loading')
    updateTodoItem(taskId, { Status: 'Done' }).then(
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
