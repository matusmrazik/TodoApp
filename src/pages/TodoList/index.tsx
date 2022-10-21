import { Page, PageHeader } from '../../containers/Page'
import { useTodoItems } from '../../hooks/useTodoItems'
import { AddTaskRow } from './AddTaskRow'
import { TableWrapper } from './styled'
import { TodoTable } from './TodoTable'

const TodoList: React.FC = () => {
  const { loading, items } = useTodoItems()

  return (
    <Page>
      <PageHeader title="TodoApp" subTitle="A simple app to manage your tasks" />
      <TableWrapper>
        <AddTaskRow />
        <TodoTable items={items} loading={loading} />
      </TableWrapper>
    </Page>
  )
}

export default TodoList
