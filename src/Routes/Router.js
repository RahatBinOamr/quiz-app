import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import Quiz from "../component/Quiz";
import Result from "../component/Result";
import Main from "../Main/Main";
import Blog from "../Shared/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
export default router;
