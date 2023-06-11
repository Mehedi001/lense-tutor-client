
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Instructors from "../Pages/Instructors/Instructors";
import AddClass from "../Pages/AddClass/AddClass";


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
        },
        {
            path:"/instructors",
            element: <Instructors></Instructors>
        },
        {
            path:"/addclass",
            element: <AddClass></AddClass>
        }
      ]
    },
    {
        path:"*",
        element: <Error></Error>
    }
  ]);


export default router;