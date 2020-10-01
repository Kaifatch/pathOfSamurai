const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_PHOTO = 'SET-USER-PHOTO'

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
        ...action.data,
        isAuth: true
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

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });
export const setUserPhoto = (smallPhoto) => ({ type: SET_USER_PHOTO, smallPhoto });


export default authReducer;