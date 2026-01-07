import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";
import Login from "../Page/Login";
import AuthenticationLayout from "../Layouts/AuthenticationLayout";
import Registration from "../Page/Registration";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path:'',
                    element:<Home></Home>
                },
                {
                    path:'/category/:id',
                    element:<CategoryNews></CategoryNews>,
                    loader: () => fetch('/news.json')
                },
            ]
        },
        {
            path: '/auth',
            element: <AuthenticationLayout></AuthenticationLayout>,
            children:[
                {
                    path: '/auth/login',
                    element: <Login></Login>,
                },
                {
                    path: '/auth/registration',
                    element: <Registration></Registration>,
                }
            ]
        },
        {
            path: '/news',
            element: <h1>news page</h1>
        },
        {
            path: '/*',
            element: <h1>Error Page</h1>
        }

    ]
)