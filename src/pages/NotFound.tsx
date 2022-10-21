import { CloseCircleOutlined } from '@ant-design/icons'
import { Text } from '../components/Text'
import { Page } from '../containers/Page'
import { HOME_PAGE } from '../features/routing/constants'

const NotFound: React.FC = () => (
  <Page horizontalAlignment="center" verticalAlignment="center">
    <CloseCircleOutlined style={{ fontSize: 100, marginBottom: 30 }} />
    <Text size="30px" weight="bold">
      Oops, this is not a valid page.
    </Text>
    <Text size="20px">
      Return to <a href={HOME_PAGE}>home page</a>.
    </Text>
  </Page>
)

export default NotFound
