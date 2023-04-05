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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Login />,
  },
]);
export default loginRouter;
