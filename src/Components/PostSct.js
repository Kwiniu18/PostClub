import React, { useEffect, useState } from "react";
import axios from "axios";

const PostSct = () => {
  //! input hooks
  const [postStatus, setPostStatus] = useState("😊 Happy");
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  let categroy_id = "1a2996e6-98d5-49c4-8619-397f95645325"; // post category
  const AUTH_TOKEN = localStorage.getItem("token"); //getting token
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
  //checking post page
  const [pageNumber, setPageNumber] = useState(pageCount);
  const params = {
    page: pageNumber,
  };

  function loadPosts() {
    axios.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
    axios
      .get(process.env.REACT_APP_IP + "/posts", { params })
      .then((responsePost) => {
        let pages = responsePost.data.pages;
        setPageCount(pages);

        let postArray = responsePost.data.items.reverse();
        postArray = postArray.filter((item) => item.disabled === false);
        setPosts(postArray);
      });
  }
  // eslint-disable-next-line
  useEffect(loadPosts, [pageNumber]); //loads posts

  return (
    <div className="posts">
      <div className="post-nav">
        <div className="search-nav">
          <input type="text" id="search-nav" placeholder="search"></input>
        </div>
        <div className="nav-options">
          <i
            className="pst bi-plus-square"
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
            className="pst bi-dash-square"
            onClick={() => {
              let postmaker = document.getElementById("post-maker");
              postmaker.style.display = "none";
              document.getElementById("minus").style.display = "none";
              document.getElementById("plus").style.display = "block";
            }}
          ></i>
          <i
            className="pst bi-arrow-clockwise"
            onClick={loadPosts}
            id="refresh-btn"
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
                {e.author.avatar_url === ""
                  ? (e.author.avatar_url =
                      "https://th.bing.com/th/id/OIP.bfbNmLdRBSXVwsUOnlKNsgHaHa?pid=ImgDet&rs=1")
                  : null}
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
            </div>
            {localStorage.getItem("user_id") === e.author.id ? (
              <p
                title="delete post"
                id="bin"
                onClick={() => {
                  console.log(e.id);
                  axios.defaults.headers.common["Authorization"] =
                    "Bearer " + AUTH_TOKEN;
                  axios
                    .delete(process.env.REACT_APP_IP + "/posts?post_id=" + e.id)
                    .then(() => {
                      loadPosts();
                    });
                }}
              >
                ❌
              </p>
            ) : null}
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
      <div className="page-switcher">
        {Array.from(Array(pageCount).keys()).map((i) => {
          const pageInnerNumber = i + 1;
          return (
            <button
              className="page-switch"
              onClick={() => setPageNumber(pageInnerNumber)}
            >
              {pageInnerNumber}
            </button>
          );
        })}
        / {pageCount}
      </div>
    </div>
  );
};
export default PostSct;
