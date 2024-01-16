import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { FavoritesProvider } from "./Contexts/FavoriteContext/FavoriteContext.jsx";
import { ToastContainer } from "react-toastify";
import routes from "./Routes/routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <FavoritesProvider>
      <RouterProvider router={routes} />
    </FavoritesProvider>
  </React.StrictMode>
);
