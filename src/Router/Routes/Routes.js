import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";
import Register from "../../Pages/Register/Register";
import ServiceCardDetail from "../../Pages/ServiceCardDetail/ServiceCardDetail";
import Services2 from "../../Pages/Services2/Services2";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
            path:'/services2',
            element:<Services2></Services2>
            },
            {
            path:'addservice',
            element:<PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
            path:'/blog',
            element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/servicecarddetail/:id',
                element:<ServiceCardDetail></ServiceCardDetail>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            }

        ]
    }
])