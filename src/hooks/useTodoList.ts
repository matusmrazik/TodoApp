import { useEffect, useState } from 'react'
import { mapTodosResponse } from '../api/mappers'
import { getTodos } from '../api/todos'
import { TodoItemData } from '../types'

export const useTodoList = () => {
  const [items, setItems] = useState<TodoItemData[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    getTodos().then(
      data => {
        if (!mounted) return
        setItems(mapTodosResponse(data.data))
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
  }, [])

  return { loading, items }
}
