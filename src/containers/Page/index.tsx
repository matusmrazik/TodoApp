import { Text } from '../../components/Text'
import { Content, ContentWrapper, PageHeaderWrapper, PageLayout } from './styled'
import { ContentProps } from './types'

type PageHeaderProps = {
  title: string
  subTitle?: string
  breadcrumb?: React.ReactNode
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subTitle, breadcrumb }) => (
  <PageHeaderWrapper>
    {breadcrumb}
    <Text size="40px" weight="bold">
      {title}
    </Text>
    {subTitle && <Text size="16px">{subTitle}</Text>}
  </PageHeaderWrapper>
)

type Props = ContentProps & {
  children?: React.ReactNode
}

export const Page: React.FC<Props> = ({ children, horizontalAlignment, verticalAlignment }) => (
  <PageLayout>
    <ContentWrapper>
      <Content horizontalAlignment={horizontalAlignment} verticalAlignment={verticalAlignment}>
        {children}
      </Content>
    </ContentWrapper>
  </PageLayout>
)
