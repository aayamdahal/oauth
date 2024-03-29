import React from "react";
import { useLocation } from "react-router-dom";
import { posts } from "../data";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const post = posts.find((eachPost) => eachPost.id.toString() === path);

  return (
    <div className="post">
      <img src={post.img} alt="" className="post-img" />
      <h1 className="post-title">{post.title}</h1>
      <p className="desc">{post.desc}</p>
      <p className="long-desc">{post.longDesc}</p>
    </div>
  );
};

export default Post;
