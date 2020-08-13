import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostCreator,
  setNewPostTextCreator,
} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  let addPost = () => props.dispatch(addPostCreator());

  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = setNewPostTextCreator(text);
    props.dispatch(action);
  };

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
