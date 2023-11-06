import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        children: [
            {
                
                index: true,
                
            },
            {
                path:'login',
                element:<Login></Login>
            }
        ]
    }

])
export default routes;