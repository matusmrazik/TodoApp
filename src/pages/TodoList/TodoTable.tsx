import { ExclamationCircleOutlined as EmptyIcon } from '@ant-design/icons'
import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { Text } from '../../components/Text'
import { TodosContext } from '../../TodosContext'
import { TodoItemData } from '../../types'
import { EmptyTableBanner } from './styled'
import { Todo } from './Todo'

type Props = {
  loading?: boolean
  items: TodoItemData[] | undefined
}

export const TodoTable: React.FC<Props> = ({ loading, items }) => {
  const { onRemoveItem } = React.useContext(TodosContext)

  const columns: ColumnsType<TodoItemData> = [
    {
      dataIndex: 'item',
      render: (__, rec) => <Todo id={rec.id} title={rec.title} status={rec.status} onDelete={onRemoveItem} />
    }
  ]

  if (!loading && (items === undefined || items.length === 0)) {
    return (
      <EmptyTableBanner>
        <EmptyIcon style={{ fontSize: 50, marginBottom: 10 }} />
        <Text size="20px" weight="500">
          Nothing to do
        </Text>
        <Text>Create a task above</Text>
      </EmptyTableBanner>
    )
  }

  return <Table loading={loading} columns={columns} dataSource={items} pagination={false} showHeader={false} />
}
