import React from 'react'
import { GetTodoItemResponse } from './api/types'
import { useTodoList } from './hooks/useTodoList'
import { LoadingStatus, TodoItemData } from './types'

type TodosContextData = {
  items: TodoItemData[] | undefined
  status: LoadingStatus
  getItem: (id: string) => TodoItemData | undefined
  requestReload: () => void
  onAddItem: (response: GetTodoItemResponse) => void
}

export const TodosContext = React.createContext<TodosContextData>({
  items: [],
  status: 'NotLoaded',
  getItem: () => undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  requestReload: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onAddItem: () => {}
})

type TodosProviderProps = {
  children?: React.ReactNode
}

export const TodosProvider: React.FC<TodosProviderProps> = ({ children }) => {
  const { items, status, requestReload, onAddItem } = useTodoList()

  const getItem = React.useCallback((id: string) => items?.find(x => x.id == id), [items])

  return (
    <TodosContext.Provider value={{ items, status, getItem, requestReload, onAddItem }}>
      {children}
    </TodosContext.Provider>
  )
}
