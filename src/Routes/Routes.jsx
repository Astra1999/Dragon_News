import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";
import Login from "../Page/Login";
import AuthenticationLayout from "../Layouts/AuthenticationLayout";
import Registration from "../Page/Registration";
import NewsDetails from "../Page/NewsDetails";
import PrivetRoute from "../Provider/PrivetRoute";
import Loader from "../Page/Loader";

export const router = createBrowserRouter(

    
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: '',
                    element: <Home></Home>
                },
                {
                    path: '/category/:id',
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch('/news.json'),
                    hydrateFallbackElement: <Loader></Loader>
                },
            ]
        },
        {
            path: '/auth',
            element: <AuthenticationLayout></AuthenticationLayout>,
            children: [
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
            path: '/news-details/:id',
            element: (<PrivetRoute>
                <NewsDetails></NewsDetails>
            </PrivetRoute>),
            loader: () => fetch('/news.json'),
            hydrateFallbackElement: <Loader></Loader>
            
        },
        {
            path: '/*',
            element: <h1>Error Page</h1>
        }

    ]
)