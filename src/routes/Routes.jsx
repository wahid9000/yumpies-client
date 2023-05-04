import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ChefsRecipe from "../pages/chefsRecipe/ChefsRecipe";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/Error/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://yumpies-server.vercel.app/chefs')
            },
            {
                path: '/chefs/:id',
                element: <PrivateRoute><ChefsRecipe></ChefsRecipe></PrivateRoute>,
                loader: ({params}) => fetch(`https://yumpies-server.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]

        
    }
])

export default router;