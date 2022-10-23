import { Page, PageHeader } from '../../containers/Page'
import { useTodoList } from '../../hooks/useTodoList'
import { AddTaskRow } from './AddTaskRow'
import { TableWrapper } from './styled'
import { TodoTable } from './TodoTable'

const TodoList: React.FC = () => {
  const { loading, items } = useTodoList()

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
