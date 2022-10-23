import { CheckOutlined as DoneIcon, ExclamationCircleOutlined } from '@ant-design/icons'
import { message, Modal } from 'antd'
import React from 'react'
import { GetTodoItemResponse } from '../../../api/types'
import { Text } from '../../../components/Text'
import { useMarkAsDone } from '../../../hooks/useMarkAsDone'
import { TodoItemStatus } from '../../../types'
import { StatusButton } from './styled'

type Props = {
  taskId: string
  taskStatus: TodoItemStatus
  disabled?: boolean
  onStatusUpdate?: (response: GetTodoItemResponse) => void
}

export const StatusControls: React.FC<Props> = ({ taskId, taskStatus, disabled, onStatusUpdate }) => {
  const onSuccess = React.useCallback(
    (response: GetTodoItemResponse) => {
      message.info('Task marked as done')
      if (onStatusUpdate) {
        onStatusUpdate(response)
      }
    },
    [onStatusUpdate]
  )

  const onFailure = React.useCallback(() => {
    message.error('Failed to mark task as done')
  }, [])

  const { status: updateStatus, submit } = useMarkAsDone(taskId, onSuccess, onFailure)

  const openModal = React.useCallback(() => {
    Modal.confirm({
      title: 'Mark as done?',
      icon: <ExclamationCircleOutlined />,
      content: (
        <>
          <Text>Mark this task as done?</Text>
          <Text>This action cannot be reversed.</Text>
        </>
      ),
      okText: 'Yes',
      cancelText: 'No',
      onOk: submit
    })
  }, [submit])

  return (
    <StatusButton
      status={taskStatus}
      icon={<DoneIcon />}
      disabled={disabled}
      loading={updateStatus === 'Loading'}
      onClick={openModal}
    />
  )
}
