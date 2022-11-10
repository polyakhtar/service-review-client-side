import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Myreviews from "../../Pages/Myreviews/Myreviews";
import MyReviewUpdate from "../../Pages/Myreviews/MyReviewUpdate";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";
import Register from "../../Pages/Register/Register";
import ReviewInputPage from "../../Pages/ReviewInputPage/ReviewInputPage";
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
            element:<PrivateRoute><Blog></Blog></PrivateRoute>
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
                loader:({params})=>fetch(`https://wedding-photographer-assignment-server.vercel.app/services/${params.id}`)
            },
            {
            path:'/reviewinputpage/:id',
            element:<ReviewInputPage></ReviewInputPage>,
            loader:({params})=>fetch(`https://wedding-photographer-assignment-server.vercel.app/services/${params.id}`)
            },
            {
            path:'/myreviews',
            element:<PrivateRoute><Myreviews></Myreviews></PrivateRoute>,
            },
            {
                path:'/updatereview/:id',
                element:<MyReviewUpdate></MyReviewUpdate>,
                loader:({params})=>fetch(`https://wedding-photographer-assignment-server.vercel.app/myreviews/${params.id}`)
            }

        ]
    }
])