import React from 'react'
import { createDetailPageUrl } from '../features/routing/utils'
import { TodoItemData } from '../types'

type Props = TodoItemData

export class Todo extends React.PureComponent<Props> {
  handleOnClick = () => {
    const path = createDetailPageUrl(this.props.id)
    console.log(path)
    window.location.href = path
  }

  render() {
    return (
      <div>
        <div onClick={this.handleOnClick}>{this.props.title}</div>
      </div>
    )
  }
}
