import React from 'react'

import Home from './Pages/Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>

  },
  {
    path:'/Register',
    element:<Register/>
  },
  {
    path:'/login',
    element:<Login/>
  }
])
const App = () => {
  return (
    <RouterProvider router ={router}/>

  )
}

export default App
