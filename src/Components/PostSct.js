import React, { useEffect, useState } from "react";
import axios from "axios";

const PostSct = () => {
  const [postStatus, setPostStatus] = useState("😊 Happy");
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);

  let categroy_id = "e38d85fd-16bd-4b68-9ade-1fd3c8bbdfe6"; // main category
  const AUTH_TOKEN = localStorage.getItem("token");
  const makePost = (e) => {
    e.preventDefault(e);
    const params = {
      title: postStatus,
      text: postContent,
      image_url: "string",
      category_id: categroy_id,
      disabled: "false",
    };
    //! AUTHORIZATION
    axios.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
    axios.post(process.env.REACT_APP_IP + "/posts", params).then((response) => {
      loadPosts();
    });
  };
  function loadPosts() {
    axios.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
    axios.get(process.env.REACT_APP_IP + "/posts").then((responsePost) => {
      setPosts(responsePost.data.items);
    });
  }
  //! READING POSTS
  useEffect(loadPosts, []);

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
          <form onSubmit={makePost}>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
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
            <select
              id="post-status"
              value={postStatus}
              onChange={(e) => setPostStatus(e.target.value)}
            >
              <option value="😊 Happy">😊 Happy</option>
              <option value="😥 sad">😥 Sad</option>
              <option value="😴 Sleeper">😴 Sleeper</option>
              <option value="😡 Angry">😡 Angry</option>
            </select>
            <br></br>
            <button
              className="post-button"
              type="submit"
              onClick={() => {
                const date = new Date();
                let hour = date.getHours() + " : " + date.getMinutes();
                console.log(hour);
                document.getElementById("minus").style.display = "none";
                document.getElementById("plus").style.display = "block";
                document.getElementById("post-maker").style.display = "none";
                document.getElementById("text-area").value = " ";
              }}
            >
              Post
            </button>
          </form>
        </div>
      </div>
      <div className="posts-section">
        {posts.map((e) => (
          <div className="post">
            <div className="post-user">
              <div className="post-avatar">
                <img
                  src={e.author.avatar_url}
                  alt="your avatar"
                  width={"100%"}
                ></img>
              </div>
              <div className="post-user-name">
                {e.author.name + " " + e.author.surname}
              </div>
              <div className="post-status">- {e.title}</div>
              {/* <div className="post-hour">{e.time}</div> */}
            </div>
            <div className="post-content">{e.text}</div>
            <hr></hr>
            <div className="post-reactions">
              <div className="reaction haha">
                <p id="reaction">😂</p>
              </div>
              <div className="reaction sad">
                <p id="reaction">😥 </p>
              </div>
              <div className="reaction love">
                <p id="reaction">💚</p>
              </div>
              <div className="reaction like">
                <p id="reaction">👍</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PostSct;
