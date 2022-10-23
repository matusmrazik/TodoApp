import React from 'react'
import { Page, PageHeader } from '../../containers/Page'
import { TodosContext } from '../../TodosContext'
import { AddTaskRow } from './AddTaskRow'
import { TableWrapper } from './styled'
import { TodoTable } from './TodoTable'

const TodoList: React.FC = () => {
  const { items, status, onAddItem } = React.useContext(TodosContext)

  return (
    <Page>
      <PageHeader title="TodoApp" subTitle="A simple app to manage your tasks" />
      <TableWrapper>
        <AddTaskRow onAdd={onAddItem} />
        <TodoTable items={items} loading={status === 'Loading' || status === 'NotLoaded'} />
      </TableWrapper>
    </Page>
  )
}

export default TodoList
