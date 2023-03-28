import React from "react";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Stories></Stories>
      <Posts></Posts>
    </div>
  );
};
