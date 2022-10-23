import { useEffect, useState } from 'react'
import { mapTodoItemResponse } from '../api/mappers'
import { getTodoItem } from '../api/todos'
import { TodoItemData } from '../types'

export const useTodoItem = (itemId: string) => {
  const [data, setData] = useState<TodoItemData>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    getTodoItem(itemId).then(
      data => {
        if (!mounted) return
        setData(mapTodoItemResponse(data.data))
        setLoading(false)
      },
      err => {
        if (!mounted) return
        console.log(err)
        setLoading(false)
      }
    )
    return () => {
      mounted = false
    }
  }, [itemId])

  return { loading, data }
}
