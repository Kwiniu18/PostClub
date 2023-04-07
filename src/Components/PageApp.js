import PostSct from "./PostSct";
import ProfileSct from "./ProfileSct";
import Chat from "./Chat";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PageApp() {
  const navigate = useNavigate();
  //! checking is user log in
  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/");
    }
  });
  return (
    //!MAIN PAGE
    <>
      <PostSct />

      <ProfileSct />

      <Chat />
    </>
  );
}

export default PageApp;
