import { PlusCircleFilled as AddIcon } from '@ant-design/icons'
import { Input } from 'antd'
import { AddButton, AddTaskRowWrapper } from './styled'

export const AddTaskRow: React.FC = () => (
  <AddTaskRowWrapper>
    <Input placeholder="Enter your task" maxLength={200} />
    <AddButton icon={<AddIcon />}>Add task</AddButton>
  </AddTaskRowWrapper>
)
