import React, { useState } from "react";

function Chat() {
  const [msg, setMsg] = useState([]);
  const friends = [
    {
      friend_id: 1,
      avatar_id:
        "https://www.samconveyancing.co.uk/userfiles/images/M3-QIR6GH.png",
    },
    {
      friend_id: 2,
      avatar_id:
        "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
    },
    {
      friend_id: 3,
      avatar_id:
        "https://uploads-ssl.webflow.com/5e95471ed56b94bd8e14bde6/5ebb7855246215caa927b0b0_user%20feedback%20icons-21.png",
    },
    {
      friend_id: 4,
      avatar_id:
        "https://ptandler.github.io/vuepress-theme-single-page-sections/dummy-person.svg",
    },
  ];

  return (
    <div className="chat-container">
      <div className="chat-friends">
        {friends.map((e) => (
          <div clasName="friend">
            <img
              alt="avatar not wczytywanie"
              src={e.avatar_id}
              width={"100%"}
              style={{ marginTop: "5%", marginLeft: "5px" }}
            ></img>
          </div>
        ))}
      </div>
      <div className="chat-chat">
        <div className="chat-bar">Your friend</div>
        <div className="chat-messages">
          {msg.map((e) => (
            <div className="chat-pop">{e.content}</div>
          ))}
        </div>
        <div className="chat-nav">
          <input id="input-msg" type="text"></input>
          <i
            className="msg bi-arrow-right-circle-fill"
            onClick={() => {
              let message = document.getElementById("input-msg").value;
              setMsg([
                ...msg,
                {
                  content: message,
                },
              ]);
              console.log(msg);
              document.getElementById("input-msg").value = " ";
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Chat;
