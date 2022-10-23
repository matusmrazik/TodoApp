import { useCallback, useEffect, useState } from 'react'
import { mapTodoItem, mapTodosResponse } from '../api/mappers'
import { getTodos } from '../api/todos'
import { GetTodoItemResponse } from '../api/types'
import { LoadingStatus, TodoItemData } from '../types'

export const useTodoList = () => {
  const [items, setItems] = useState<TodoItemData[]>()
  const [status, setStatus] = useState<LoadingStatus>('NotLoaded')

  useEffect(() => {
    if (status !== 'NotLoaded') return

    setStatus('Loading')
    getTodos().then(
      response => {
        setItems(mapTodosResponse(response.data))
        setStatus('Success')
      },
      error => {
        console.log(error)
        setStatus('Error')
      }
    )
  }, [status])

  const requestReload = useCallback(() => {
    setStatus('NotLoaded')
  }, [])

  const onAddItem = useCallback((response: GetTodoItemResponse) => {
    setItems(prev => (prev === undefined ? [mapTodoItem(response)] : [mapTodoItem(response), ...prev]))
  }, [])

  return { status, items, requestReload, onAddItem }
}
