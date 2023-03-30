import React, { useState } from "react";
import axios from "axios";
function Register() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  function register(e) {
    e.preventDefault(e);
    const params = {
      username: email,
      name: name,
      surname: surname,
      password: password,
      avatar_url: "string",
      description: "string",
    };

    axios.post("http://192.168.5.27:8000/users", params).then((response) => {
      //let token = response.data.access_token;
      console.log(response);
      window.location = "http://localhost:3000/login";
    });
  }
  return (
    <div className="login-container">
      <h1 id="register-title">Register</h1>
      <div className="register-right">
        <div className="register-form">
          <form onSubmit={register}>
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
            <button className="register-btn" type="sumbit">
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="register-left">
        <img
          alt="chinolu zdjecie nie dziala"
          src="https://interactivevision.pl/static/specjalista-social-media-niewidzialna-reka-profili-spolecznosciowych_og-1d4b71dc8174db601f38dc05442dedf5.png"
          width={"100%"}
        ></img>
      </div>
    </div>
  );
}

export default Register;
