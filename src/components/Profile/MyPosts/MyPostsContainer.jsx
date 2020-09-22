import React from "react";
import {
  addPostCreator,
  setNewPostTextCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPostsC";
import { connect } from "react-redux";

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let onPostAdd = () => {
//           store.dispatch(addPostCreator());
//         };

//         let onTextType = (text) => {
//           let action = setNewPostTextCreator(text);
//           store.dispatch(action);
//         };

//         return (
//           <MyPosts
//             setNewPostText={onTextType}
//             addPost={onPostAdd}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setNewPostText: (text) => {
      let action = setNewPostTextCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
