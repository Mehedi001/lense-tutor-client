
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
import Dashboard from "../Pages/Dashboard/Dashboard";
import Classes from "../Pages/Classes/Classes";
import MyClass from "../Pages/MyClass/MyClass";


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
            path:"/classes",
            element: <Classes></Classes>
        }
      ]
    },
    {
        path:"*",
        element: <Error></Error>
    },
    {
        path:"/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path:'addclass',
                element: <AddClass></AddClass>
            },
            {
                path:'myclass',
                element: <MyClass></MyClass>
            }
        ]
    }
  ]);


export default router;