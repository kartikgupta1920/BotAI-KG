import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import Home from './Pages/Home/Home.jsx'
import History from './Pages/History/History.jsx'
import {createBrowserRouter, RouterProvider}  from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "history",
        element: <History />
      },
      {
        path: "/",
        element: <Home />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router = {router}/>
  </React.StrictMode>,
)

