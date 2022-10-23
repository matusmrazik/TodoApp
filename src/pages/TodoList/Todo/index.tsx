import { CheckOutlined as DoneIcon } from '@ant-design/icons'
import { Tooltip } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DeleteTodoItemResponse } from '../../../api/types'
import { createDetailPageUrl } from '../../../features/routing/utils'
import { TodoItemData } from '../../../types'
import { DeleteControls } from './DeleteControls'
import { StatusButton, TodoText, TodoWrapper } from './styled'

type Props = TodoItemData & {
  onDelete?: (response: DeleteTodoItemResponse) => void
}

const TodoFC: React.FC<Props> = ({ id, title, status, onDelete }) => {
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
        <DeleteControls taskId={id} taskStatus={status} onDelete={onDelete} />
      </Tooltip>
    </TodoWrapper>
  )
}

export const Todo = React.memo(TodoFC)
