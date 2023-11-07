import { createBrowserRouter } from "react-router-dom";
// routes imports
import Root from "../Layout/Root";
import Errorpage from "../Components/Error/Errorpage";
import Home from "../Components/Home/Home";
import Login from "../Components/Security/Login";
import Register from "../Components/Security/Register";
import PrivateRoutes from "./PrivateRoutes";
import Aboutus from "../Components/AboutUs/Aboutus";
import Rooms from "../Components/Rooms/Rooms";
import SingleRoomDetails from "../Components/Rooms/SingleRoomDetails";
import Mybookings from "../Components/User/Mybookings";
import AddRoom from "../Components/User/AddRoom";

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
        path:"/mybookings",
        element:<PrivateRoutes><Mybookings/></PrivateRoutes>
      },
      {
        path:"/aboutus",
        element:<Aboutus/>
      },
      {
        path:"/rooms",
        element:<Rooms/>
      },
      {
        path:"/rooms/:id",
        element:<SingleRoomDetails/>
      },
      {
        path:"/addroom",
        element:<PrivateRoutes><AddRoom/></PrivateRoutes>
      }
    ],
  },
]);

export default routes;

