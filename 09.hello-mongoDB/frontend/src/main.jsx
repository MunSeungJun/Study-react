import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App, { Loader as AppLoader} from './routes/App.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    loader:AppLoader
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
