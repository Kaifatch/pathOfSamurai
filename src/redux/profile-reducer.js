const ADD_POST = "ADD-POST";
const SET_NEW_POST_TEXT = "SET-NEW-POST-TEXT";

const profileReducer = (state, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;

    case SET_NEW_POST_TEXT:
      state.newPostText = action.postText;
      return state;

    default:
      return state;
  }
}

export const addPostCreator = () => ({ type: ADD_POST });

export const setNewPostTextCreator = (text) =>
  ({ type: SET_NEW_POST_TEXT, postText: text });

export default profileReducer;