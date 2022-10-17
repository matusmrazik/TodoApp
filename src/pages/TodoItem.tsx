import React from 'react'
import { useParams } from 'react-router-dom'

const TodoItem = () => {
  const params = useParams<{ id: string }>()

  return <>{params.id}</>
}

export default TodoItem
