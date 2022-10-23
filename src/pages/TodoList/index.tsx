import React from 'react'
import { Page, PageHeader } from '../../containers/Page'
import { useTodosContext } from '../../hooks/useTodosContext'
import { AddTaskRow } from './AddTaskRow'
import { TableWrapper } from './styled'
import { TodoTable } from './TodoTable'

const TodoList: React.FC = () => {
  const { items, status } = useTodosContext()

  return (
    <Page>
      <PageHeader title="TodoApp" subTitle="A simple app to manage your tasks" />
      <TableWrapper>
        <AddTaskRow />
        <TodoTable items={items} loading={status === 'Loading' || status === 'NotLoaded'} />
      </TableWrapper>
    </Page>
  )
}

export default TodoList
