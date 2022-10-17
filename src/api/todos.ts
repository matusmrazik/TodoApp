import { TodoItemData } from '../types'

// rework this into regular api call, feel free to use any open api
export const todos = (): Promise<TodoItemData[]> =>
  new Promise(res => {
    setTimeout(() => {
      res([
        {
          id: '1',
          title: 'Go shopping'
        },
        {
          id: '2',
          title: 'Job interview'
        },
        {
          id: '3',
          title: 'Prepare homework'
        }
      ])
    }, 100)
  })
