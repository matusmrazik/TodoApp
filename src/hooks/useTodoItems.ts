import { useEffect, useState } from 'react'
import { todos } from '../api/todos'
import { TodoItemData } from '../types'

export const useTodoItems = () => {
  const [items, setItems] = useState<TodoItemData[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    todos().then(
      data => {
        if (!mounted) return
        setItems(data)
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
