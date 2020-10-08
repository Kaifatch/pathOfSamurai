import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_PHOTO = 'SET-USER-PHOTO';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  smallPhoto: null,
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };

    case SET_USER_PHOTO:
      return {
        ...state,
        smallPhoto: action.smallPhoto
      }

    default:
      return state;
  }
  ;
};

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA,
  payload: {userId, email, login, isAuth}});
export const setUserPhoto = (smallPhoto) => ({type: SET_USER_PHOTO, smallPhoto});

export const getAuthUserData = () => (dispatch) => {
  authAPI.me()
    .then((response) => {
    if (response.data.resultCode === 0) {
      let {id, email, login} = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout()
    .then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
}


export default authReducer;