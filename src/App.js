import "bootstrap/dist/css/bootstrap.css";
import "./Style/index.scss";
import { RouterProvider } from "react-router-dom";
import loginRouter from "./Routers/Router";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "../src/Components/Login.js";
import PageApp from "../src/Components/PageApp";
import Register from "../src/Components/Register";

function App() {
  return (
    <>
      <RouterProvider router={loginRouter} />
    </>
  );
}

export default App;
