import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Root from './Components/Root/Root';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Statistics from './Pages/Statistics/Statistics';
import DonationDetails from './Components/DonationDetails/DonationDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch('item.json'),
      },

      {
        path:'/donation',
        element:<Donation></Donation>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('item.json')
      },
      {
        path: '/donation-details/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('item.json'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
