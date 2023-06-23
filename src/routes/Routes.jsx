import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";
import Home from "../Pages/Home/Home/Home";
import ProductDetails from "../SharedPages/ProductDetails/ProductDetails";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/404page/ErrorPage";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,  
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>        
      },
      {
        path: 'login',
        element:<Login></Login>
      },
      {
        path: 'register',
        element:<SignUp></SignUp>
      },      
      {
        path: 'toyDetails/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader:({params}) => fetch(`https://toy-store-server-blue.vercel.app/toys/${params.id}`)
      },
      {
        path: 'allToys',
        element: <AllToys></AllToys>,
        loader:() => fetch('https://toy-store-server-blue.vercel.app/toy')

      },
      {
        path: 'addToys',
        element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: 'myToys/:email',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,      
        loader:({params}) => fetch(`https://toy-store-server-blue.vercel.app/myToys/${params.email?.split('-').join('.')}`)
      },
      {
        path: 'blog',
        element:<Blog></Blog>
      }
    ]
  },
]);