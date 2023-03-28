import React from "react";

const ProfileSct = () => {
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
          Profile Name
          <div className="online-status"></div>
        </div>

        <div className="simple-dsc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>
      </div>
      <div className="profile-nav">
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
          <i class="bi bi-person-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default ProfileSct;
