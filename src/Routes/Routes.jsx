import { createBrowserRouter } from "react-router-dom";
// routes imports
import Root from "../Layout/Root";
import Errorpage from "../Components/Error/Errorpage";
import Home from "../Components/Home/Home";
import Login from "../Components/Security/Login";
import Register from "../Components/Security/Register";

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
      }
    ],
  },
]);

export default routes;

