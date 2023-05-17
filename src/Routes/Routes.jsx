import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Registration from "../Components/Pages/Registration/Registration";
import Checkout from "../Components/Checkout/Checkout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Registration></Registration>
        },
        {
          path: '/checkout/:id',
          element: <Checkout></Checkout>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;