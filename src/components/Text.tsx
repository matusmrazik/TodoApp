import styled from 'styled-components/macro'

type TextProps = {
  size?: string
  weight?: string
  color?: string
}

const StyledText = styled.div<TextProps>`
  ${({ size }) => (size ? `font-size: ${size};` : '')}
  ${({ weight }) => (weight ? `font-weight: ${weight};` : '')}
  ${({ color }) => (color ? `color: ${color};` : '')}
`

type Props = TextProps & {
  className?: string
  children?: React.ReactNode
}

export const Text: React.FC<Props> = ({ className, children, ...textProps }) => (
  <StyledText className={className} {...textProps}>
    {children}
  </StyledText>
)
