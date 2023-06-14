
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
import UpdateClass from "../Pages/UpdateClass/UpdateClass";
import ClassList from "../Pages/ClassList/ClassList";
import AddedToCart from "../Pages/AddedtoCart/AddedToCart";
import ManageUser from "../Pages/Home/ManageUser/ManageUser";
import ReviewClass from "../Pages/ReviewClass/ReviewClass";
import PrivateRoute from "./PrivateRoutes";






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
        },
        {
          path:"/classlist/:id",
          element: <PrivateRoute><ClassList></ClassList></PrivateRoute>,
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/class/${params.id}`)
          }
        },
        
        
      ]
    },
    {
        path:"*",
        element: <Error></Error>
    },
    {
        path:"dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path:'addclass',
                element: <PrivateRoute><AddClass></AddClass></PrivateRoute>
            },
            {
                path:'myclass',
                element: <PrivateRoute><MyClass></MyClass></PrivateRoute>
            },
            {
              path:"cart",
              element: <PrivateRoute><AddedToCart></AddedToCart></PrivateRoute>
            },
            
            {
              path: "updateClass/:id",
              element: <PrivateRoute><UpdateClass></UpdateClass></PrivateRoute>,
              loader: async ({ params }) => {
                return fetch(`http://localhost:5000/class/${params.id}`)
              }
            },
            {
              path:"manageUser",
              element: <PrivateRoute><ManageUser></ManageUser></PrivateRoute>
            },
            {
              path:"reviewClass",
              element: <PrivateRoute><ReviewClass></ReviewClass></PrivateRoute>
            }
            
        ]
    }
  ]);


export default router;