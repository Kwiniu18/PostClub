import React from "react";

const ProfileSct = () => {
  const user_name = "Dominik Kwintal";

  return (
    <div className="profile-section">
      <div className="banner-section">
        <div className="banner"></div>
        <div className="avatar">
          <img
            alt="avatar"
            src="https://th.bing.com/th/id/OIP.bfbNmLdRBSXVwsUOnlKNsgHaHa?pid=ImgDet&rs=1"
            width={"100%"}
          ></img>
        </div>
      </div>
      <div className="profile-description">
        <div className="profile-name">
          {user_name}
          <div className="online-status"></div>
        </div>

        <div className="simple-dsc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
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
        <p id="setting">wyloguj</p>
        <p id="setting">ustawienia</p>
        <p id="setting">status</p>
      </div>
    </div>
  );
};

export default ProfileSct;
