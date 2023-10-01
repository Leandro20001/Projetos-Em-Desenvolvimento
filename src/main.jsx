import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../routes/App.jsx'
import './index.css'

/////importa o browser router do react////
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HpPage from '../routes/HpPage.jsx'
////////////////////

//importando as paginas/////

const router = createBrowserRouter([
  {
    path:"App",
    element:<App/>
  },
  {
    path:"Harry Potter",
    element:<HpPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
