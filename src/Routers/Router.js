import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import PageApp from "../Components/PageApp";
import Register from "../Components/Register";
import PageNotFound from "../Components/PageNotFound";

const loginRouter = createBrowserRouter([
  {
    path: "/postClub",
    element: <PageApp />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
export default loginRouter;
