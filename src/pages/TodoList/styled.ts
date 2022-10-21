import { Button } from 'antd'
import styled from 'styled-components/macro'

export const TableWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`

export const AddTaskRowWrapper = styled.div`
  display: flex;
  align-items: stretch;
  margin: 10px 0 40px 0;

  > *:not(:first-child) {
    margin-left: 20px;
  }
`

export const AddButton = styled(Button)`
  background-color: #0a0;
  border-color: #090;
  color: #fff;
  font-size: 18px;
  height: 40px;
  font-weight: bold;

  &&:hover,
  &&:focus {
    background-color: #080;
    border-color: #070;
    color: #eee;
  }

  &&:active {
    background-color: #060;
    border-color: #050;
    color: #ddd;
  }
`
