import React from "react";

function Login() {
  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="https://interactivevision.pl/static/specjalista-social-media-niewidzialna-reka-profili-spolecznosciowych_og-1d4b71dc8174db601f38dc05442dedf5.png"
          width={"100%"}
          style={{ marginTop: "20%" }}
        ></img>
      </div>
      <div className="login-right">
        <div className="login-title">Log in</div>
        <div className="login-form">
          <input id="login" type="text" placeholder="email"></input>
          <br></br>
          <input id="login" type="password" placeholder="password"></input>
          <p id="forgot">forgot your password?</p>
          <button
            className="login-button"
            onClick={() => {
              window.location = "http://localhost:3000/postClub";
            }}
          >
            login
          </button>
          <p id="register">Dont't have account?</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
