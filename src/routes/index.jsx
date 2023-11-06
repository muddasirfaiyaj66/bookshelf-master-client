import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import Register from "../page/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
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
