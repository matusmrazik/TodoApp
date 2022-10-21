import { CheckOutlined as DoneIcon, DeleteFilled as DeleteIcon } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'
import { createDetailPageUrl } from '../features/routing/utils'
import { TodoItemData, TodoItemStatus } from '../types'

const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > *:not(:first-child) {
    margin-left: 20px;
  }
`

type TodoTextProps = {
  crossed: boolean
}

const TodoText = styled.div<TodoTextProps>`
  width: 100%;
  line-height: 1.5;
  font-size: 16px;
  ${({ crossed }) => (crossed ? 'text-decoration: line-through;' : '')}
  cursor: pointer;
`

const DeleteButton = styled(Button)`
  background-color: #b00;
  border-color: #a00;
  color: #fff;
  border-radius: 4px;
  font-size: 18px;
  height: 40px;
  width: 50px;
  font-weight: bold;

  &:hover,
  &:focus {
    background-color: #900;
    border-color: #800;
    color: #eee;
  }

  &:active {
    background-color: #700;
    border-color: #600;
    color: #ddd;
  }
`

type StatusButtonProps = {
  status: TodoItemStatus
}

const statusButtonMixin = css<StatusButtonProps>`
  border-radius: 8px;
  border-width: 3px;
  width: 36px;
  height: 32px;

  > * {
    font-size: 22px;
    font-weight: 900;
  }
`

const StatusButton = styled(Button)`
  ${statusButtonMixin}

  &, &:focus {
    background-color: #fff;
    border-color: #d00;
    color: #fff;
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:focus,
  &:disabled:active {
    background-color: #fff;
    border-color: #080;
    color: #080;
  }

  &:hover {
    background-color: #fff;
    border-color: rgba(0, 128, 0, 0.3);
    color: rgba(0, 128, 0, 0.3);
  }

  &:active {
    background-color: #fff;
    border-color: rgba(0, 128, 0, 0.7);
    color: rgba(0, 128, 0, 0.7);
  }
`

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
