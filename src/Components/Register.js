import React, { useState } from "react";
import axios from "axios";
function Register() {
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
    };

    axios.post("http://192.168.5.22:8000/users", params).then((response) => {
      //let token = response.data.access_token;
      console.log(response);
      window.location = "http://localhost:3000/login";
    });
  }
  return (
    <div className="login-container">
      <h1 id="register-title">Register</h1>
      <form onSubmit={register}>
        <div className="register-right">
          <div className="register-form">
            <i class="re bi-person-fill"></i>
            <input
              type="text"
              placeholder="name"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <br></br>
            <i class="re bi-person-fill"></i>
            <input
              type="text"
              placeholder="surname"
              id="sirname"
              required
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            ></input>
            <br></br>

            <i class="re bi-envelope-fill"></i>
            <input
              type="email"
              placeholder="email"
              id="re-email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br></br>
            <i class="re bi-lock-fill"></i>
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
