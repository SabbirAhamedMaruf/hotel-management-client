import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider";
import Notification from "./Hooks/Notification";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Notification>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </Notification>
  </React.StrictMode>
);
