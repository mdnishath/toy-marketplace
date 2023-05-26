import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import Error from "../components/Shared/Error";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivetRoute from "./PrivetRoute";
import PublicRoute from "./PublicRoute";
import AddToy from "../pages/AddToy";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/MyToys";
import Blog from "../pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(`https://toy-marketplace-server-lime.vercel.app/toys`),
      },
      {
        path: "/add-toy",
        element: (
          <PrivetRoute>
            <AddToy />
          </PrivetRoute>
        ),
      },
      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      { path: "all-toys", element: <AllToys /> },
      {
        path: "my-toys",
        element: (
          <PrivetRoute>
            <MyToys />
          </PrivetRoute>
        ),
      },
      { path: "signup", element: <Signup /> },
      { path: "blog", element: <Blog /> },
    ],
  },
]);
