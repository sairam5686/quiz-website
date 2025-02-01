import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Quiz from './pages/Quiz.jsx'

let routers = createBrowserRouter([{
  path:'/',
  element:<App/>
},{
  path:'/quiz-form',
  element:<Quiz />
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={routers}/>
  </StrictMode>,
)
