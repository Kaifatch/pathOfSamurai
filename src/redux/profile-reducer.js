const ADD_POST = "ADD-POST";
const SET_NEW_POST_TEXT = "SET-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE"

let initialState = {
  profile: null,
  posts: [
    {
      id: 1,
      message: "Hi, how are you?",
      likesCount: 15
    },
    {
      id: 2,
      message: "It's my first post",
      likesCount: 23
    },
    {
      id: 3,
      message: "blabla",
      likesCount: 23
    },
    {
      id: 4,
      message: "dada",
      likesCount: 23
    },
  ],
  newPostText: ""
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:

      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case SET_NEW_POST_TEXT:

      return {
        ...state,
        newPostText: action.postText
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    default:
      return state;
  }
}

export const addPost = () => ({ type: ADD_POST });

export const setNewPostText = (text) =>
  ({ type: SET_NEW_POST_TEXT, postText: text });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;