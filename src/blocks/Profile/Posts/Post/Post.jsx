import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://www.w3schools.com/howto/img_avatar.png" />
      {props.message}&nbsp; <br/>
      <span>likes</span> {props.likeCounts}
    </div>
  );
};

export default Post;
