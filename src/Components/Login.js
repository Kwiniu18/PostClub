import React, { useState } from "react";
import axios, { AxiosError } from "axios";

function Login() {
  function getToken(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append("username", email);
    params.append("password", password);

    axios.post("http://192.168.5.22:8000/token", params).then((response) => {
      //let token = response.data.access_token;
      console.log(response.data.access_token);
      localStorage.setItem("token", response.data.access_token);
      setTimeout(() => (window.location = "/postClub"), 3000);
    });
    setTimeout(() => {
      console.log("storage" + localStorage.getItem("token")); //null
      const AUTH_TOKEN = localStorage.getItem("token");
      if (AxiosError) {
        document.getElementById("error").style.display = "block";
      } else {
        document.getElementById("error").style.display = "none";
      }
      axios.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
      // console.log(axios.get("http://192.168.5.22:8000/me"));
      let user_data = axios.get("http://192.168.5.22:8000/me");
      user_data.then((user_info) => {
        localStorage.setItem("name", user_info.data.name);
        localStorage.setItem("surname", user_info.data.surname);
        localStorage.setItem("username", user_info.data.username);
        localStorage.setItem("avatarUrl", user_info.data.avatar_url);
        localStorage.setItem("description", user_info.data.description);
      });
    }, 2000);
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
            <p id="error">wrong username or password</p>
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
