import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const PostSct = () => {
  const user_name = "Dominik Kwintal";
  const [posts, setPosts] = useState([]);
  const [like, setLike] = useState(0);
  const [sad, setSad] = useState(0);
  const [love, setLove] = useState(0);
  const [haha, setHaha] = useState(0);
  return (
    <div className="posts">
      <div className="post-nav">
        <div className="search-nav">
          <input type="text" id="search-nav" placeholder="search"></input>
        </div>
        <div className="nav-options">
          <i
            class="pst bi-plus-square"
            id="plus"
            onClick={() => {
              let postmaker = document.getElementById("post-maker");
              postmaker.style.display = "block";
              document.getElementById("minus").style.display = "block";
              document.getElementById("plus").style.display = "none";
            }}
          ></i>
          <i
            id="minus"
            style={{ display: "none" }}
            class="pst bi-dash-square"
            onClick={() => {
              let postmaker = document.getElementById("post-maker");
              postmaker.style.display = "none";
              document.getElementById("minus").style.display = "none";
              document.getElementById("plus").style.display = "block";
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
              document.getElementById("minus").style.display = "none";
              document.getElementById("plus").style.display = "block";
              let post_content = document.getElementById("text-area").value;
              let post_status = document.getElementById("post-status").value;
              document.getElementById("post-maker").style.display = "none";
              setPosts([
                {
                  name: user_name,
                  content: post_content,
                  userStatus: post_status,
                },
                ...posts,
              ]);
              document.getElementById("text-area").value = " ";
              console.log(posts);
            }}
          >
            Post
          </button>
        </div>
      </div>
      <div className="posts-section">
        {posts.map((e) => (
          <div className="post">
            <div className="post-user">
              <div className="post-avatar">
                <img
                  src="https://th.bing.com/th/id/OIP.bfbNmLdRBSXVwsUOnlKNsgHaHa?pid=ImgDet&rs=1"
                  alt="your avatar"
                  width={"100%"}
                ></img>
              </div>
              <div className="post-user-name">{user_name}</div>
              <div className="post-status">- {e.userStatus}</div>
            </div>
            <div className="post-content">{e.content}</div>

            <div className="post-reactions">
              <div className="reaction haha" title={haha}>
                <p id="reaction-haha">😂</p>
              </div>
              <div className="reaction sad" title={sad}>
                <p id="reaction-sad">😥 </p>
              </div>
              <div className="reaction love" title={love}>
                <p id="reaction-love">💚</p>
              </div>
              <div className="reaction like" title={like}>
                <p id="reaction-like">👍</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PostSct;
