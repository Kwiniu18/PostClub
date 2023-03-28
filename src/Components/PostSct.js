import React, { useState } from "react";

const PostSct = () => {
  const postsList = [
    {
      name: "Dominik",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etLorem ipsum dolor sit ametconsectetur adipiscing elit sed do eiusmod tempor incididunt utlabore et dolore magna aliquaLorem ipsum dolor sit amet, consecteturadipiscing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliqua dolore magna aliqua",
      userStatus: " 😂 get laught",
    },
    {
      name: "Stanisław",
      content: " Lorem ipsum dolor sit amet",
      userStatus: " 😴 sleeper",
    },
  ];
  const [posts, setPosts] = useState(postsList);

  console.log(posts);

  return (
    <div className="posts">
      <div className="post-nav">
        <div className="search-nav">
          <input type="text" id="search-nav" placeholder="search"></input>
        </div>
        <div className="nav-options">
          <i
            class="pst bi-plus-square"
            onClick={() => {
              let postmaker = document.getElementById("post-maker");
              if (postmaker.style.display == "none") {
                postmaker.style.display = "block";
              } else {
                postmaker.style.display = "none";
              }
            }}
          ></i>
        </div>
        <div className="post-maker" id="post-maker" style={{ display: "none" }}>
          <textarea
            id="text-area"
            type="text"
            placeholder="Write something . . ."
            style={{
              width: "40%",
              padding: "10px",
              height: "100px",
              marginTop: "40px",
              textAlign: "none",
            }}
          ></textarea>
          <br></br>
          <select id="post-status">
            <option value="😊 Happy">😊 Happy</option>
            <option value="😥 sad">😥 Sad</option>
            <option value="😴 Sleeper">😴 Sleeper</option>
            <option value="😡 Angry">😡 Angry</option>
          </select>
          <br></br>
          <button
            className="post-button"
            onClick={() => {
              let post_content = document.getElementById("text-area").value;
              let post_status = document.getElementById("post-status").value;

              postsList.push({
                name: "Dominik",
                content: post_content,
                userStatus: post_status,
              });

              console.log(postsList);
            }}
          >
            Post
          </button>
        </div>
      </div>
      <div className="posts-section">
        {postsList.map((e) => (
          <div className="post">
            <div className="post-user">
              <div className="post-avatar">
                <img
                  src="https://th.bing.com/th/id/OIP.bfbNmLdRBSXVwsUOnlKNsgHaHa?pid=ImgDet&rs=1"
                  width={"100%"}
                ></img>
              </div>
              <div className="post-user-name">{e.name}</div>
              <div className="post-status">- {e.userStatus}</div>
            </div>
            <div className="post-content">{e.content}</div>

            <div className="post-reactions">
              <div className="reaction haha">😂</div>
              <div className="reaction sad">😥</div>
              <div className="reaction love">💚</div>
              <div className="reaction like">👍</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PostSct;
