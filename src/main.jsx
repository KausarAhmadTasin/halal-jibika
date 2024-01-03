import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes.jsx";
import { FavoritesProvider } from "./Contexts/FavoriteContext/FavoriteContext.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <FavoritesProvider>
      <RouterProvider router={routes} />
    </FavoritesProvider>
  </React.StrictMode>
);
