import React, { useState } from "react";
import axios from "axios";
function Login() {
  function getToken(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append("username", email);
    params.append("password", password);

    axios.post("http://192.168.5.27:8000/token", params).then((response) => {
      //let token = response.data.access_token;
      console.log(response.data.access_token);
      window.location = "/postClub";
    });
  }
  function newAccount() {
    window.location = "/login/register";
  }

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          alt="chinolu zdjecie nie dziala"
          src="https://interactivevision.pl/static/specjalista-social-media-niewidzialna-reka-profili-spolecznosciowych_og-1d4b71dc8174db601f38dc05442dedf5.png"
          width={"100%"}
          style={{ marginTop: "20%" }}
        ></img>
      </div>
      <div className="login-right">
        <div className="login-title">Log in</div>
        <div className="login-form">
          <form onSubmit={getToken}>
            <input
              id="login"
              type="text"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br></br>

            <input
              id="login2"
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <p id="forgot">forgot your password?</p>
            <button type="submit" className="login-button">
              login
            </button>
            <p id="register" onClick={newAccount}>
              Dont't have account?{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
