import { Todo } from '../components/Todo'
import { useTodoItems } from '../hooks/useTodoItems'

const TodoList = () => {
  const { items } = useTodoItems()

  return (
    <div>
      {items.map(todo => (
        <Todo key={todo.id} id={todo.id} title={todo.title} status={todo.status} />
      ))}
    </div>
  )
}

export default TodoList
