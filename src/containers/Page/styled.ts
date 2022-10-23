import { Layout } from 'antd'
import styled from 'styled-components/macro'
import { ContentProps } from './types'

export const PageLayout = styled(Layout)`
  background-color: #eee;
`

export const ContentWrapper = styled(PageLayout.Content)`
  padding: 0 32px;
  display: flex;
  justify-content: stretch;
`

export const Content = styled.div.withConfig<ContentProps>({
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

export const PageHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
`
