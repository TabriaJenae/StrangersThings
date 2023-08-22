import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Home from './components/Home.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login-Logout.jsx';



const router = createBrowserRouter([
  {
    path : '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <login />
  }
  {
    path : '/register',
    element: <Register />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)

