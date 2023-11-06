import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import Register from "../page/Register";
import Home from "../page/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element:<Home></Home>
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path:'/register',
    element:<Register></Register>
  }
]);
export default routes;
