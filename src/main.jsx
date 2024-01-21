import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Default from './Components/LayOut/Default.jsx'
import OrderReview from './Components/OrderReview/OrderReview.jsx'
import GrandPa from './Components/GrandPa/GrandPa.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<Default></Default>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('tShirts.json')
      },
      {
        path:'review',
        element:<OrderReview></OrderReview>
      },
      {
        path:'grandPa',
        element:<GrandPa></GrandPa>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
