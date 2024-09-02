import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import NotFound from './components/NotFound/NotFound'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: ':id',
        element: <NotFound />,
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>,
)
