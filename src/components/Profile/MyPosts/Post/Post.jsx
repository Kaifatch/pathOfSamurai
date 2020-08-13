import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://cdn.pixabay.com/photo/2019/10/30/07/04/paint-4588860_960_720.png" />
      {props.message}
      <div>
        <span className={styles.likesCount}>{props.likesCount} Like</span>
      </div>
    </div>
  );
};

export default Post;
