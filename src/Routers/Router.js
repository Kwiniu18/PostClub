import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import PageApp from "../Components/PageApp";
import Register from "../Components/Register";

const loginRouter = createBrowserRouter([
  {
    path: "/postClub",
    element: <PageApp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/register",
    element: <Register />,
  },
]);
export default loginRouter;
