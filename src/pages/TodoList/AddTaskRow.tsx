import { PlusCircleFilled as AddIcon } from '@ant-design/icons'
import { Input, message } from 'antd'
import React from 'react'
import { GetTodoItemResponse } from '../../api/types'
import { useAddTask } from '../../hooks/useAddTask'
import { useTodosContext } from '../../hooks/useTodosContext'
import { AddButton, AddTaskRowWrapper } from './styled'

export const AddTaskRow: React.FC = () => {
  const { onAddItem } = useTodosContext()

  const [value, setValue] = React.useState('')
  const [isValid, setIsValid] = React.useState(false)

  const onSuccess = React.useCallback(
    (response: GetTodoItemResponse) => {
      setValue('')
      setIsValid(false)
      message.info('Task created')
      onAddItem(response)
    },
    [onAddItem]
  )

  const onFailure = React.useCallback(() => {
    message.error('Failed to create task')
  }, [])

  const { status, submit } = useAddTask(value, onSuccess, onFailure)

  return (
    <AddTaskRowWrapper>
      <Input
        value={value}
        onChange={e => {
          setValue(e.target.value)
          setIsValid(e.target.validity.valid)
        }}
        placeholder="Enter your task (min. 3, max. 200 characters)"
        required
        minLength={3}
        maxLength={200}
      />
      <AddButton icon={<AddIcon />} disabled={!isValid} loading={status === 'Loading'} onClick={submit}>
        Add task
      </AddButton>
    </AddTaskRowWrapper>
  )
}
