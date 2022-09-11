import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <Posts
        posts={props.profile.postsData}
        newPostText={props.profile.newPostText}
        dispatch={props.dispatch}
        // updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
