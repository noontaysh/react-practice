import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.content__header}>
        <img src="https://cdn.pixabay.com/photo/2016/04/06/08/50/gears-1311171__340.jpg" />
      </div>
      <div className={s.content__author}>
        <img src="https://www.w3schools.com/howto/img_avatar.png" />
      </div>
    </div>
  );
};

export default ProfileInfo;
