import { Button } from 'antd'
import styled, { css } from 'styled-components/macro'
import { StatusButtonProps, TodoTextProps } from './types'

export const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > *:not(:first-child) {
    margin-left: 20px;
  }
`

export const TodoText = styled.div<TodoTextProps>`
  width: 100%;
  line-height: 1.5;
  font-size: 16px;
  ${({ crossed }) => (crossed ? 'text-decoration: line-through;' : '')}
  cursor: pointer;
`

export const DeleteButton = styled(Button)`
  background-color: #b00;
  border-color: #a00;
  color: #fff;
  border-radius: 4px;
  font-size: 18px;
  height: 40px;
  width: 50px;
  font-weight: bold;

  &:hover,
  &:focus {
    background-color: #900;
    border-color: #800;
    color: #eee;
  }

  &:active {
    background-color: #700;
    border-color: #600;
    color: #ddd;
  }
`

const statusButtonMixin = css<StatusButtonProps>`
  border-radius: 8px;
  border-width: 3px;
  width: 36px;
  height: 32px;

  > * {
    font-size: 22px;
    font-weight: 900;
  }
`

export const StatusButton = styled(Button)`
  ${statusButtonMixin}

  &, &:focus {
    background-color: #fff;
    border-color: #d00;
    color: #fff;
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:focus,
  &:disabled:active {
    background-color: #fff;
    border-color: #080;
    color: #080;
  }

  &:hover {
    background-color: #fff;
    border-color: rgba(0, 128, 0, 0.3);
    color: rgba(0, 128, 0, 0.3);
  }

  &:active {
    background-color: #fff;
    border-color: rgba(0, 128, 0, 0.7);
    color: rgba(0, 128, 0, 0.7);
  }
`
