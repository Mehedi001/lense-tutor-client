
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Registration/Registration";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            
                path:"/login",
                element: <Login></Login>  
        },
        {
            path:"/register",
            element: <Registration></Registration>
        }
      ]
    },
    {
        path:"*",
        element: <Error></Error>
    }
  ]);


export default router;