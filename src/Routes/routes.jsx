import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Jobs from "../Pages/Jobs/Jobs";
import Signup from "../Pages/Signup/Signup";
import NotFound from "../Components/Notfound/NotFound";
import Login from "../Pages/Login/Login";
import Favorite from "../Pages/Favorite/Favorite";
import Jobdetails from "../Components/JobDetails/Jobdetails";
import axios from "axios";
import PostJob from "../Components/PostJob/PostJob";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => axios.get("http://localhost:9000/jobs"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/post",
        element: <PostJob />,
      },
      {
        path: "/jobs/:id",
        element: <Jobdetails />,
        loader: ({ params }) =>
          axios.get(`http://localhost:9000/jobs/${params.id}`),
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
