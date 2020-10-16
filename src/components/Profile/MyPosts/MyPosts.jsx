import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm/AddPostForm";

const MyPosts = ({posts, addPost}) => {
  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount}/>
  ));

  let addNewPost = (value) => {
    addPost(value.newPostText)
  }

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <AddPostForm onSubmit={addNewPost}/>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
