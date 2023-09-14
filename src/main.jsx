import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contact from '../routes/contact.jsx'
import './index.css'

/////importa o browser router do react////
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
////////////////////

//importando as paginas/////

const router = createBrowserRouter([
  {
    path:"App",
    element:<App/>
  },


  {
    path:"Contact",
    element:<Contact/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
