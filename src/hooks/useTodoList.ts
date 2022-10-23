import _ from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import { mapTodoItem, mapTodosResponse } from '../api/mappers'
import { getTodos } from '../api/todos'
import { DeleteTodoItemResponse, GetTodoItemResponse } from '../api/types'
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

  const onAddItem = useCallback((response: GetTodoItemResponse) => {
    setItems(prev => (prev === undefined ? [mapTodoItem(response)] : [mapTodoItem(response), ...prev]))
  }, [])

  const onRemoveItem = useCallback((response: DeleteTodoItemResponse) => {
    setItems(prev => (prev === undefined ? prev : _.reject(prev, ['id', response.id])))
  }, [])

  const onUpdateItem = useCallback((response: GetTodoItemResponse) => {
    setItems(prev =>
      prev === undefined ? prev : _.map(prev, x => (x.id !== response.id ? x : { ...x, ...mapTodoItem(response) }))
    )
  }, [])

  return { status, items, onAddItem, onRemoveItem, onUpdateItem }
}
