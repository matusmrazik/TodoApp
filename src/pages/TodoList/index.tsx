import { Page, PageHeader } from '../../containers/Page'
import { useTodoListQuery } from '../../queries/todoListQuery'
import { AddTaskRow } from './AddTaskRow'
import { TableWrapper } from './styled'
import { TodoTable } from './TodoTable'

const TodoList: React.FC = () => {
  const { data: items, status } = useTodoListQuery()

  return (
    <Page>
      <PageHeader title="TodoApp" subTitle="A simple app to manage your tasks" />
      <TableWrapper>
        <AddTaskRow />
        <TodoTable items={items} loading={status === 'loading' || status === 'idle'} />
      </TableWrapper>
    </Page>
  )
}

export default TodoList
