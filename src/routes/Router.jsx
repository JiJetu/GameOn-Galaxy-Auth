import { createBrowserRouter } from "react-router-dom";
import Root from "../mainLayout/Root";
import Home from "../pages/home/Home";
import LogIn from "../auth/login/LogIn";
import Register from "../auth/register/Register";
import ServiceDetails from "../pages/home/services/serviceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../error/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/contact',
                element: <PrivateRoute><Contact></Contact></PrivateRoute>,
            },
            {
                path: '/about',
                element: <PrivateRoute><About></About></PrivateRoute>,
            },
            {
                path: '/serviceDetails/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/login',
                element: <LogIn></LogIn>,
            },
            {
                path: '/register',
                element:<Register></Register>,
            },
        ]
    },
]);

export default router;