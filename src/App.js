import "bootstrap/dist/css/bootstrap.css";
import "./Style/index.scss";
import { RouterProvider } from "react-router-dom";
import loginRouter from "./Routers/Router";

function App() {
  return (
    <>
      <RouterProvider router={loginRouter} />
    </>
  );
}

export default App;
