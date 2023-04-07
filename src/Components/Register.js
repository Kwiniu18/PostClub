import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(
    "https://th.bing.com/th/id/OIP.bfbNmLdRBSXVwsUOnlKNsgHaHa?pid=ImgDet&rs=1"
  );
  const [profileDesc, setProfileDesc] = useState("your profile description");
  function register(e) {
    e.preventDefault(e);
    const params = {
      username: email,
      name: name,
      surname: surname,
      password: password,
      avatar_url: avatarUrl,
      description: profileDesc,
      is_admin: true,
    };
    const AUTH_TOKEN = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
    axios.post(process.env.REACT_APP_IP + "/users", params).then((response) => {
      navigate("/");
    });
  }
  return (
    <div className="login-container">
      <h1 id="register-title">Register</h1>
      <form onSubmit={register}>
        <div className="register-right">
          <div className="register-form">
            <i className="re bi-person-fill"></i>
            <input
              type="text"
              placeholder="name"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <br></br>
            <i className="re bi-person-fill"></i>
            <input
              type="text"
              placeholder="surname"
              id="sirname"
              required
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            ></input>
            <br></br>

            <i className="re bi-envelope-fill"></i>
            <input
              type="email"
              placeholder="email"
              id="re-email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br></br>
            <i className="re bi-lock-fill"></i>
            <input
              type="password"
              placeholder="password"
              id="re-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br></br>
            <button type="submit" className="register-btn">
              Register
            </button>
          </div>
        </div>
        <div className="register-left">
          <input
            type="text"
            id="sirname"
            placeholder="paste avatar url here"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
          ></input>
          <textarea
            value={profileDesc}
            onChange={(e) => setProfileDesc(e.target.value)}
            placeholder="Your profile description"
            id="desc-input"
          ></textarea>
          <br></br>
          <img
            alt="Your Avatar here"
            src={avatarUrl}
            width={"160px"}
            style={{ margin: "auto" }}
            id="avatar-display"
          ></img>
        </div>
      </form>
    </div>
  );
}

export default Register;
