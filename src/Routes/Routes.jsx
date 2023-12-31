import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BrandProductDetails from "../Pages/BrandProductDetails/BrandProductDetails";
import SingleProducts from "../Pages/SingleProducts/SingleProducts";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/techBrand.json"),
      },
      {
        path: "/addProducts",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:brandName/:id",
        element: (
          <PrivateRoute>
            <SingleProducts></SingleProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://technology-brand-kmb6k88ol-md-hasibuzzamans-projects.vercel.app/products/${params.brandName}/${params.id}`
          ),
      },
      {
        path: "/products/:brandName",
        element: <BrandProductDetails></BrandProductDetails>,
        loader: ({ params }) =>
          fetch(
            ` https://technology-brand-kmb6k88ol-md-hasibuzzamans-projects.vercel.app/products/${params.brandName}`
          ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            ` https://technology-brand-kmb6k88ol-md-hasibuzzamans-projects.vercel.app/user`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/products/updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://technology-brand-kmb6k88ol-md-hasibuzzamans-projects.vercel.app/products/updateProduct/${params.id}`
          ),
      },
    ],
  },
]);
export default myRouter;
