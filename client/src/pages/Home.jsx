import React from "react";
import { posts } from "../data";
import MainCard from "../components/MainCard";
import "../styles/index.css";

const Home = () => {
  return (
    <div className="home">
      {posts.map((post) => (
        <MainCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
