import { useCallback, useState } from 'react'
import { addTodoItem } from '../api/todos'
import { GetTodoItemResponse } from '../api/types'
import { LoadingStatus } from '../types'

export const useAddTask = (
  value: string,
  onSuccess: (response: GetTodoItemResponse) => void,
  onFailure: () => void
) => {
  const [status, setStatus] = useState<LoadingStatus>('NotLoaded')

  const submit = useCallback(() => {
    setStatus('Loading')
    addTodoItem(value).then(
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
  }, [value, onSuccess, onFailure])

  return { status, submit }
}
