import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import styled from 'styled-components/macro'
import { Text } from '../../components/Text'
import { TodoItemData } from '../../types'

const TableWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`

type TableDataItem = {
  description: string
  value: React.ReactNode
}

const columns: ColumnsType<TableDataItem> = [{ dataIndex: 'description' }, { dataIndex: 'value' }]

type Props = {
  data: TodoItemData
}

export const DetailTable: React.FC<Props> = ({ data }) => {
  const rows = React.useMemo<TableDataItem[]>(
    () => [
      { description: 'Task description', value: data.title },
      {
        description: 'Status',
        value: (
          <Text weight="bold" color={data.status === 'Done' ? 'green' : 'red'}>
            {data.status}
          </Text>
        )
      },
      { description: 'Created at', value: data.createdAt?.toString() ?? '-' },
      { description: 'Done at', value: data.doneAt?.toString() ?? '-' }
    ],
    [data.createdAt, data.doneAt, data.status, data.title]
  )

  return (
    <TableWrapper>
      <Table dataSource={rows} columns={columns} pagination={false} showHeader={false} />
    </TableWrapper>
  )
}
