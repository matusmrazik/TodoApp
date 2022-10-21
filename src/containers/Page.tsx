import { Layout } from 'antd'
import styled from 'styled-components/macro'
import { Text } from '../components/Text'

const PageLayout = styled(Layout)`
  background-color: #eee;
`

const ContentWrapper = styled(PageLayout.Content)`
  padding: 0 32px;
  display: flex;
  justify-content: stretch;
`

type FlexAlignment = 'flex-start' | 'flex-end' | 'center' | 'stretch'

type ContentProps = {
  horizontalAlignment?: FlexAlignment
  verticalAlignment?: FlexAlignment
}

const Content = styled.div.withConfig<ContentProps>({
  shouldForwardProp: p => p !== 'horizontalAlignment' && p !== 'verticalAlignment'
})`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  justify-content: ${({ verticalAlignment = 'flex-start' }) => verticalAlignment};
  align-items: ${({ horizontalAlignment = 'stretch' }) => horizontalAlignment};
`

const PageHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
`

type PageHeaderProps = {
  title: string
  subTitle?: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subTitle }) => (
  <PageHeaderWrapper>
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
