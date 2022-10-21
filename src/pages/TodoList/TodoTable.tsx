import { ExclamationCircleOutlined as EmptyIcon } from '@ant-design/icons'
import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { Text } from '../../components/Text'
import { Todo } from '../../components/Todo'
import { TodoItemData } from '../../types'
import { EmptyTableBanner } from './styled'

type Props = {
  loading?: boolean
  items: TodoItemData[]
}

export const TodoTable: React.FC<Props> = ({ loading, items }) => {
  const columns: ColumnsType<TodoItemData> = [
    {
      dataIndex: 'item',
      render: (__, rec) => <Todo id={rec.id} title={rec.title} status={rec.status} />
    }
  ]

  if (!loading && items.length === 0) {
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
