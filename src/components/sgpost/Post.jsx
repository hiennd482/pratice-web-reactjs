import React, { useState } from "react";
import "./Post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import Comts from "../comments/Comts";
import { useTranslation } from "react-i18next";
function Post({ post }) {
  const { t } = useTranslation(["posts"]);
  const liked = false;
  const [cmt, setCmt] = useState(false);
  return (
    <div className="Post">
      <div className="container">
        <div className="user">
          <div className="userinfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>

              <span className="date">{t("time")}</span>
            </div>
          </div>
          <MoreHorizIcon></MoreHorizIcon>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? (
              <FavoriteOutlinedIcon></FavoriteOutlinedIcon>
            ) : (
              <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
            )}
            12 {t("likes")}
          </div>
          <div className="item" onClick={() => setCmt(!cmt)}>
            <TextsmsOutlinedIcon></TextsmsOutlinedIcon>
            30 {t("cmt")}
          </div>
          <div className="item">
            <ShareOutlinedIcon></ShareOutlinedIcon>2 {t("share")}
          </div>
        </div>
        {cmt && <Comts></Comts>}
      </div>
    </div>
  );
}

export default Post;
