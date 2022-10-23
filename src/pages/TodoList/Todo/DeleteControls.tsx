import { DeleteFilled as DeleteIcon, ExclamationCircleOutlined } from '@ant-design/icons'
import { message, Modal } from 'antd'
import React from 'react'
import { DeleteTodoItemResponse } from '../../../api/types'
import { Text } from '../../../components/Text'
import { useRemoveTask } from '../../../hooks/useRemoveTask'
import { TodoItemStatus } from '../../../types'
import { DeleteButton } from './styled'

type Props = {
  taskId: string
  taskStatus: TodoItemStatus
  onDelete?: (response: DeleteTodoItemResponse) => void
}

export const DeleteControls: React.FC<Props> = ({ taskId, taskStatus, onDelete }) => {
  const onSuccess = React.useCallback(
    (response: DeleteTodoItemResponse) => {
      message.info('Task removed')
      if (onDelete) {
        onDelete(response)
      }
    },
    [onDelete]
  )

  const onFailure = React.useCallback(() => {
    message.error('Failed to remove task')
  }, [])

  const { status: removeStatus, submit } = useRemoveTask(taskId, onSuccess, onFailure)

  const openModal = React.useCallback(() => {
    Modal.confirm({
      title: 'Remove task?',
      icon: <ExclamationCircleOutlined />,
      content: (
        <>
          <Text>Are you sure you want to delete this task?</Text>
          {taskStatus !== 'Done' && <Text weight="bold">The task is not done.</Text>}
        </>
      ),
      okText: 'Yes',
      cancelText: 'No',
      onOk: submit
    })
  }, [taskStatus, submit])

  return <DeleteButton icon={<DeleteIcon />} loading={removeStatus === 'Loading'} onClick={openModal} />
}
