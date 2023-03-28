import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./Style/index.scss";
import "./Components/ProfileSct";
import ProfileSct from "./Components/ProfileSct";
import PostSct from "./Components/PostSct";

function App() {
  return (
    <>
      <ProfileSct />
      <PostSct />
    </>
  );
}

export default App;
