import { Tooltip } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createDetailPageUrl } from '../../../features/routing/utils'
import { TodoItemData } from '../../../types'
import { DeleteControls } from './DeleteControls'
import { StatusControls } from './StatusControls'
import { TodoText, TodoWrapper } from './styled'

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
        <StatusControls taskId={id} taskStatus={status} disabled />
      ) : (
        <Tooltip title="Mark as done" placement="bottomLeft">
          <StatusControls taskId={id} taskStatus={status} />
        </Tooltip>
      )}
      <TodoText crossed={status === 'Done'} onClick={handleOnClick}>
        {title}
      </TodoText>
      <Tooltip title="Delete task" placement="left">
        <DeleteControls taskId={id} taskStatus={status} />
      </Tooltip>
    </TodoWrapper>
  )
}

export const Todo = React.memo(TodoFC)
