import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import ListedBook from './pages/ListedBook.jsx'
import PagesToRead from './pages/PagesToRead.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import BookDetailsPage from './pages/BookDetailsPage.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {path:'/', element:<Home></Home>,loader: () => fetch('/books.json')},
      {path:'/listedBook',element:<ListedBook></ListedBook> },
      {path:'/pageToRead',element:<PagesToRead></PagesToRead>},
      {path:'/bookDetailsPage/:id',element:<BookDetailsPage></BookDetailsPage>, loader: () => fetch('/books.json')},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
