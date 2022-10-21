import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { Todo } from '../../components/Todo'
import { TodoItemData } from '../../types'

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

  return <Table loading={loading} columns={columns} dataSource={items} pagination={false} showHeader={false} />
}
