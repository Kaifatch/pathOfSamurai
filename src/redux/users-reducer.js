const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: [
    // { id: 1, photoUrl: 'https://cdn.pixabay.com/photo/2019/10/30/07/04/paint-4588860_960_720.png', followed: true, fullName: 'Alexandr', status: 'I am a Boss', location: { city: 'Minsk', country: 'Belarus' } },
    //  { id: 2, photoUrl: 'https://cdn.pixabay.com/photo/2019/10/30/07/04/paint-4588860_960_720.png', followed: false, fullName: 'Sergey', status: 'I am a Boss too', location: { city: 'Kiev', country: 'Ukraine' } },
    //  { id: 3, photoUrl: 'https://cdn.pixabay.com/photo/2019/10/30/07/04/paint-4588860_960_720.png', followed: true, fullName: 'Anton', status: 'I am a Boss too', location: { city: 'Togliatty', country: 'Russia' } }
  ]
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true};
          }
          return u;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false};
          }
          return u;
        })
      };

    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]};

    default:
      return state;
  }
  ;
};

export default usersReducer;

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});