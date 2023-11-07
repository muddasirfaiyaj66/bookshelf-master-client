import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import Register from "../page/Register";
import Home from "../page/Home";
import AddBooks from "../page/AddBooks";
import SeeCategoryData from "../page/SeeCategoryData";
import AllBooks from "../page/AllBooks";
import DetailsBook from "../page/DetailsBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element:<Home></Home>
      },
      {
        path:'add-book',
        element:<AddBooks></AddBooks>
      },{
        path:'category-books/:category_name',
        element:<SeeCategoryData></SeeCategoryData>
      },
      {
        path:'all-book',
        element: <AllBooks></AllBooks>
      },
      {
        path:'details-book/:id',
        element:<DetailsBook></DetailsBook>
      }, {
        path:'edit-book/:id',
        element:
      }
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
