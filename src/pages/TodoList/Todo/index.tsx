import { CheckOutlined as DoneIcon, DeleteFilled as DeleteIcon } from '@ant-design/icons'
import { Tooltip } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createDetailPageUrl } from '../../../features/routing/utils'
import { TodoItemData } from '../../../types'
import { DeleteButton, StatusButton, TodoText, TodoWrapper } from './styled'

type Props = TodoItemData

const TodoFC: React.FC<Props> = ({ id, title, status }) => {
  const navigate = useNavigate()

  const handleOnClick = React.useCallback(() => {
    const path = createDetailPageUrl(id)
    navigate(path)
  }, [id, navigate])

  return (
    <TodoWrapper>
      {status === 'Done' ? (
        <StatusButton status={status} icon={<DoneIcon />} disabled />
      ) : (
        <Tooltip title="Mark as done" placement="bottomLeft">
          <StatusButton status={status} icon={<DoneIcon />} />
        </Tooltip>
      )}
      <TodoText crossed={status === 'Done'} onClick={handleOnClick}>
        {title}
      </TodoText>
      <Tooltip title="Delete task" placement="left">
        <DeleteButton icon={<DeleteIcon />} />
      </Tooltip>
    </TodoWrapper>
  )
}

export const Todo = React.memo(TodoFC)
