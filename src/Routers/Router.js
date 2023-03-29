import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import PageApp from "../Components/PageApp";

const loginRouter = createBrowserRouter([
  {
    path: "/postClub",
    element: <PageApp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default loginRouter;
