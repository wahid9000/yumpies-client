import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ChefsRecipe from "../pages/chefsRecipe/ChefsRecipe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chefs')
            },
            {
                path: '/recipes/:id',
                element: <ChefsRecipe></ChefsRecipe>,
                loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
            }
        ]

        
    }
])

export default router;