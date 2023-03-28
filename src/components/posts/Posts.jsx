import React from "react";
import Post from "../sgpost/Post";
import "./Posts.scss";
function Posts() {
  const posts = [
    {
      id: 1,
      name: "nguyen duy hien",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,alias totam numquam ipsa exercitationem dignissimos,",
      img: "https://i.pinimg.com/originals/41/25/a6/4125a675393e5797b0414de297e49591.jpg",
    },
    {
      id: 2,
      name: " duy hien",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,alias totam numquam ipsa exercitationem dignissimos,",
      img: "https://thetotalbusiness.com/wp-content/uploads/2021/09/picasso-art.jpeg",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id}></Post>
      ))}
    </div>
  );
}

export default Posts;
