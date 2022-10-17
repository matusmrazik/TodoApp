import React from 'react'
import { TodoItemData } from '../types'

type Props = TodoItemData

class Todo extends React.PureComponent<Props> {
  handleOnClick() {
    window.location.href = '/detail'
  }

  render() {
    return (
      <div>
        <div onClick={this.handleOnClick}>{this.props.title}</div>
      </div>
    )
  }
}

export default Todo
