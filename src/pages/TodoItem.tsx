import { useParams } from 'react-router-dom'

const TodoItem: React.FC = () => {
  const params = useParams<{ id: string }>()

  return <>{params.id}</>
}

export default TodoItem
