import React from 'react'
import Todo from './components/Todo'
import { useTodoItems } from './hooks/useTodoItems'

function App() {
  const { items } = useTodoItems()

  return (
    <div>
      {items.map(todo => (
        <Todo key={todo.id} id={todo.id} title={todo.title} />
      ))}
    </div>
  )
}

export default App
