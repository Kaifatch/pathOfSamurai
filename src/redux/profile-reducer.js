import {profileAPI, usersAPI} from "../api/api";
import {setUserPhoto} from "./auth-reducer";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";
const DELETE_POST = "DELETE-POST"

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
  status: ""
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:

      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost]
      };

    case SET_USER_PROFILE:

      return {
        ...state,
        profile: action.profile
      }

    case SET_USER_STATUS:

      return {
        ...state,
        status: action.status
      }

    case DELETE_POST:
      return {...state, posts: state.posts.filter(p => p.id != action.postId)}

    default:
      return state;
  }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});

export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);

  dispatch(setUserProfile(response.data));
  dispatch(setUserPhoto(response.data.photos.small));
}

export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);

  dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status))
  }
}

export default profileReducer;