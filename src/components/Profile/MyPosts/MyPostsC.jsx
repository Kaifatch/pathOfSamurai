import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

class MyPosts extends React.Component {
  render() {
    let postsElements = this.props.posts.map((p) => (
      <Post message={p.message} likesCount={p.likesCount} />
    ));

    let newPostElement = React.createRef();

    let onPostAdd = () => {
      this.props.addPost();
    };

    let onTextType = () => {
      let text = newPostElement.current.value;
      this.props.setNewPostText(text);
    };

    return (
      <div className={styles.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea
              onChange={onTextType}
              ref={newPostElement}
              value={this.props.newPostText}
            />
          </div>
          <div>
            <button onClick={onPostAdd}>Add post</button>
          </div>
        </div>
        <div className={styles.posts}>{postsElements}</div>
      </div>
    );
  }
}

export default MyPosts;
