import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const ProfileSct = () => {
  const navigate = useNavigate();
  const user_name =
    localStorage.getItem("name") + " " + localStorage.getItem("surname");
  //!Log out function
  const logOut = () => {
    navigate("/");
    localStorage.clear();
  };
  const [desc, setDesc] = useState(localStorage.getItem("description")); //getting profile description
  return (
    <div className="profile-section">
      <div className="banner-section">
        <div className="banner"></div>
        <div className="avatar">
          <img
            alt="avatar"
            src={localStorage.getItem("avatarUrl")}
            width={"100%"}
          ></img>
        </div>
      </div>
      <div className="profile-description">
        <div className="profile-name">{user_name}</div>

        <div
          className="simple-dsc"
          id="simple-dsc"
          title="Edit description"
          onClick={() => {
            document.getElementById("edit-desc").style.display = "block";
            document.getElementById("simple-dsc").style.display = "none";
          }}
        >
          {desc}
        </div>
        <div className="edit-desc" id="edit-desc" style={{ display: "none" }}>
          <textarea
            id="edit-text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button
            id="save-btn"
            onClick={() => {
              document.getElementById("edit-desc").style.display = "none";
              document.getElementById("simple-dsc").style.display = "block";
            }}
          >
            Save
          </button>
        </div>
      </div>
      <div className="profile-nav" id="profile-nav">
        <div className="pr notifi">
          <i className="bi bi-bell-fill"></i>
        </div>
        <div className="pr links">
          <i className="bi bi-link-45deg"></i>
        </div>
        <div className="pr chat">
          <i className="bi bi-chat-dots-fill"></i>
        </div>
        <div className="pr profile">
          <i
            className="bi bi-person-fill"
            onMouseOver={() => {
              let profileSettings = document.getElementById("profile-settings");
              profileSettings.style.display = "block";
              document.getElementById(
                "profile-nav"
              ).style.borderBottomRightRadius = "0";
            }}
          ></i>
        </div>
      </div>
      <div
        className="profile-settings"
        id="profile-settings"
        onMouseLeave={() => {
          let profileSettings = document.getElementById("profile-settings");
          profileSettings.style.display = "none";
          document.getElementById("profile-nav").style.borderBottomRightRadius =
            "20px";
        }}
        style={{ display: "none" }}
      >
        <p id="setting" onClick={logOut}>
          wyloguj
        </p>
        <p id="setting">ustawienia</p>
        <p id="setting">status</p>
      </div>
    </div>
  );
};

export default ProfileSct;
