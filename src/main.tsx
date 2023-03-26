import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalContext from './contexts'
import PostList from './screens/PostList'
import { GlobalStyles } from './themes/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalContext>
      <GlobalStyles />
      <PostList />
    </GlobalContext>
  </React.StrictMode>,
)
