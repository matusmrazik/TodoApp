import { CloseCircleOutlined } from '@ant-design/icons'
import { Breadcrumb, Spin } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { Text } from '../../components/Text'
import { Page, PageHeader } from '../../containers/Page'
import { HOME_PAGE } from '../../features/routing/constants'
import { DetailPageParams } from '../../features/routing/types'
import { useTodoItem } from '../../hooks/useTodoItem'
import { DetailTable } from './DetailTable'

const TodoItem: React.FC = () => {
  const { id: itemId } = useParams<DetailPageParams>()

  const { data, loading } = useTodoItem(itemId ?? '')

  if (loading) {
    return (
      <Page horizontalAlignment="center" verticalAlignment="center">
        <Spin size="large" />
      </Page>
    )
  }
  if (!data) {
    return (
      <Page horizontalAlignment="center" verticalAlignment="center">
        <CloseCircleOutlined style={{ fontSize: 100, marginBottom: 30 }} />
        <Text size="30px" weight="bold">
          Item with this ID does not exist.
        </Text>
        <Text size="20px">
          Return to <Link to={HOME_PAGE}>home page</Link>.
        </Text>
      </Page>
    )
  }
  return (
    <Page>
      <PageHeader
        title="Task detail"
        breadcrumb={
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={HOME_PAGE}>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Task detail</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <DetailTable data={data} />
    </Page>
  )
}

export default TodoItem
