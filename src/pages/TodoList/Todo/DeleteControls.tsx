import { DeleteFilled as DeleteIcon, ExclamationCircleOutlined } from '@ant-design/icons'
import { message, Modal } from 'antd'
import React from 'react'
import { Text } from '../../../components/Text'
import { useRemoveTaskQuery } from '../../../queries/removeTaskQuery'
import { TodoItemStatus } from '../../../types'
import { DeleteButton } from './styled'

type Props = {
  taskId: string
  taskStatus: TodoItemStatus
}

export const DeleteControls: React.FC<Props> = ({ taskId, taskStatus }) => {
  const onSuccess = React.useCallback(() => {
    message.info('Task removed')
  }, [])

  const onFailure = React.useCallback(() => {
    message.error('Failed to remove task')
  }, [])

  const { status: removeStatus, mutate: submit } = useRemoveTaskQuery(taskId, onSuccess, onFailure)

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
      onOk: () => submit()
    })
  }, [taskStatus, submit])

  return <DeleteButton icon={<DeleteIcon />} loading={removeStatus === 'loading'} onClick={openModal} />
}
