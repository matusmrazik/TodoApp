import { PlusCircleFilled as AddIcon } from '@ant-design/icons'
import { Input, message } from 'antd'
import React from 'react'
import { useAddTaskQuery } from '../../queries/addTaskQuery'
import { AddButton, AddTaskRowWrapper } from './styled'

export const AddTaskRow: React.FC = () => {
  const [value, setValue] = React.useState('')
  const [isValid, setIsValid] = React.useState(false)

  const onSuccess = React.useCallback(() => {
    setValue('')
    setIsValid(false)
    message.info('Task created')
  }, [])

  const onFailure = React.useCallback(() => {
    message.error('Failed to create task')
  }, [])

  const { status, mutate: submit } = useAddTaskQuery(value, onSuccess, onFailure)

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
      <AddButton icon={<AddIcon />} disabled={!isValid} loading={status === 'loading'} onClick={() => submit()}>
        Add task
      </AddButton>
    </AddTaskRowWrapper>
  )
}
