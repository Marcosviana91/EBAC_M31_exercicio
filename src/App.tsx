import { Provider } from 'react-redux'
import { store } from './store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import OtherPage from './pages/OtherPage'

import EstiloGlobal from './styles'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <OtherPage />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
