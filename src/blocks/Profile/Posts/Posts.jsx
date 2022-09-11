import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../redux/profileReducer";

const Posts = (props) => {
  // let postsData = [
  //   { id: 1, message: "Hi, whats up ", likeCount: 12 },
  //   { id: 2, message: "Its fucked up", likeCount: 14 },
  //   { id: 2, message: "Its fucked up", likeCount: 14 },
  //   { id: 2, message: "Its fucked up", likeCount: 14 },
  // ];

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCounts={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    // props.dispatch({ type: "ADD-POST" });
    props.dispatch(addPostActionCreator());
    // props.updateNewPostText("");
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
    // props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
  };

  return (
    <div className={s.postsBlock}>
      <h3>Posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default Posts;
