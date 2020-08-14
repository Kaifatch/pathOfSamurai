import React from "react";
import {
  addPostCreator,
  setNewPostTextCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let onPostAdd = () => {
    props.store.dispatch(addPostCreator());
  };

  let onTextType = (text) => {
    let action = setNewPostTextCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      setNewPostText={onTextType}
      addPost={onPostAdd}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
