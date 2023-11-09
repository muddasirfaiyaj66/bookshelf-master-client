import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import Register from "../page/Register";
import Home from "../page/Home";
import AddBooks from "../page/AddBooks";
import SeeCategoryData from "../page/SeeCategoryData";
import AllBooks from "../page/AllBooks";
import DetailsBook from "../page/DetailsBook";
import EditBook from "../page/EditBook";
import BorrowedBooks from "../page/BorrowedBooks";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../page/ErrorPage";
import ViewBook from "../page/ViewBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element:<Home></Home>
      },
      {
        path:'add-book',
        element:  <PrivateRoute>
          <AddBooks></AddBooks>
        </PrivateRoute>
      },{
        path:'category-books/:category_name',
        element:<PrivateRoute>
          <SeeCategoryData></SeeCategoryData>
        </PrivateRoute>
      },
      {
        path:'all-book',
        element: <PrivateRoute>
          <AllBooks></AllBooks>
        </PrivateRoute>
      },
      {
        path:'details-book/:id',
        element:<PrivateRoute>
          <DetailsBook></DetailsBook>
        </PrivateRoute>
      }, 
      {
        path:'edit-book/:id',
        element:<PrivateRoute>
          <EditBook></EditBook>
        </PrivateRoute>,
        loader:({params})=> 
        fetch(` https://bookshelf-master-server.vercel.app/api/v1/all-book/${params.id}`)

       
        // 
      },{
        path:'borrowed-books',
        element:<PrivateRoute>
          <BorrowedBooks></BorrowedBooks>
        </PrivateRoute>
      },
      {
        path:'read/:id',
        element:<PrivateRoute>
          <ViewBook></ViewBook>
        </PrivateRoute>
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
