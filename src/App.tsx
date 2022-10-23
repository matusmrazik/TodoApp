import 'antd/dist/antd.min.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components/macro'
import * as routes from './features/routing/constants'

const TodoListPage = React.lazy(() => import('./pages/TodoList'))
const TodoItemPage = React.lazy(() => import('./pages/TodoDetail'))
const NotFoundPage = React.lazy(() => import('./pages/NotFound'))

const GlobalStyle = createGlobalStyle`
  body, #root {
    min-height: 100vh;
  }

  body {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;

    > .ant-layout {
      flex: 1 1 auto;
    }
  }
`

const App: React.FC = () => (
  <>
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
    <GlobalStyle />
  </>
)

export default App
