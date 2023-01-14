import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../Blog/Blog";
import Staticties from "../Staticties/Staticties";
import Topics from "../Topics/Topics";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h1>Error 404 Page not Found</h1>,
    children: [
      {
        path: "/topics",
        element: <Topics></Topics>,
      },
      {
        path: "/staticties",
        element: <Staticties></Staticties>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;