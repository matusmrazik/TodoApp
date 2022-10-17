import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as routes from './features/routing/constants'

const TodoListPage = React.lazy(() => import('./pages/TodoList'))
const TodoItemPage = React.lazy(() => import('./pages/TodoItem'))
const NotFoundPage = React.lazy(() => import('./pages/NotFound'))

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.HOME_PAGE}>
        <Route
          index
          element={
            <React.Suspense fallback={<>...</>}>
              <TodoListPage />
            </React.Suspense>
          }
        />
        <Route
          path={routes.DETAIL_PAGE}
          element={
            <React.Suspense fallback={<>...</>}>
              <TodoItemPage />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
