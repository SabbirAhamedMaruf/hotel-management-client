import { createBrowserRouter } from "react-router-dom";
// routes imports
import Root from "../Layout/Root";
import Errorpage from "../Components/Error/Errorpage";
import Home from "../Components/Home/Home";
import Login from "../Components/Security/Login";
import Register from "../Components/Security/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Components/Dashboard/Dashboard";
import Aboutus from "../Components/AboutUs/Aboutus";
import Rooms from "../Components/Rooms/Rooms";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/dashboard",
        element:<PrivateRoutes><Dashboard/></PrivateRoutes>
      },
      {
        path:"/aboutus",
        element:<Aboutus/>
      },
      {
        path:"/rooms",
        element:<Rooms/>
      }
    ],
  },
]);

export default routes;

