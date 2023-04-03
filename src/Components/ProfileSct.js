import React, { useState } from "react";
const ProfileSct = () => {
  const user_name =
    localStorage.getItem("name") + " " + localStorage.getItem("surname");
  const logOut = () => {
    window.location = "/login";
    localStorage.clear();
  };
  const [desc, setDesc] = useState(localStorage.getItem("description"));
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
          <i class="bi bi-bell-fill"></i>
        </div>
        <div className="pr links">
          <i class="bi bi-link-45deg"></i>
        </div>
        <div className="pr chat">
          <i class="bi bi-chat-dots-fill"></i>
        </div>
        <div className="pr profile">
          <i
            class="bi bi-person-fill"
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
