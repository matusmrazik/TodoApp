import _ from 'lodash'
import React from 'react'
import { DeleteTodoItemResponse, GetTodoItemResponse } from './api/types'
import { useTodoList } from './hooks/useTodoList'
import { LoadingStatus, TodoItemData } from './types'

type TodosContextData = {
  items: TodoItemData[] | undefined
  status: LoadingStatus
  getItem: (id: string) => TodoItemData | undefined
  requestReload: () => void
  onAddItem: (response: GetTodoItemResponse) => void
  onRemoveItem: (response: DeleteTodoItemResponse) => void
  onUpdateItem: (response: GetTodoItemResponse) => void
}

export const TodosContext = React.createContext<TodosContextData>({
  items: [],
  status: 'NotLoaded',
  getItem: () => undefined,
  requestReload: _.noop,
  onAddItem: _.noop,
  onRemoveItem: _.noop,
  onUpdateItem: _.noop
})

type TodosProviderProps = {
  children?: React.ReactNode
}

export const TodosProvider: React.FC<TodosProviderProps> = ({ children }) => {
  const { items, status, requestReload, onAddItem, onRemoveItem, onUpdateItem } = useTodoList()

  const getItem = React.useCallback((id: string) => _.find(items, x => x.id == id), [items])

  return (
    <TodosContext.Provider value={{ items, status, getItem, requestReload, onAddItem, onRemoveItem, onUpdateItem }}>
      {children}
    </TodosContext.Provider>
  )
}
