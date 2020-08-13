const ADD_POST = "ADD-POST";
const SET_NEW_POST_TEXT = "SET-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const SET_NEW_MESSAGE_TEXT = "SET-NEW-MESSAGE-TEXT";


let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: "1",
          message: "Hi, how are you?",
          likesCount: "15"
        },
        {
          id: "2",
          message: "It's my first post",
          likesCount: "23"
        },
        {
          id: "3",
          message: "blabla",
          likesCount: "23"
        },
        {
          id: "4",
          message: "dada",
          likesCount: "23"
        },
      ],
      newPostText: ""
    },
    dialogsPage: {
      dialogs: [
        {
          id: "1",
          name: "Dimych"
        },
        {
          id: "2",
          name: "Andrey"
        },
        {
          id: "3",
          name: "Sveta"
        },
        {
          id: "4",
          name: "Sasha"
        },
        {
          id: "5",
          name: "Victor"
        },
        {
          id: "6",
          name: "Valera"
        },
      ],
      messages: [
        {
          id: "1",
          message: "Hi"
        },
        {
          id: "2",
          message: "How is your it-kamasutra?"
        },
        {
          id: "3",
          message: "Yo"
        },
        {
          id: "4",
          message: "Yo"
        },
        {
          id: "5",
          message: "Yo"
        },
      ],
      newMessageText: ""
    },
    sidebar: {
      friends: [
        {
          id: "1",
          name: "Andrew",
          avatar: "https://cdn.pixabay.com/photo/2019/10/30/07/04/paint-4588860_960_720.png"
        },
        {
          id: "2",
          name: "Sasha",
          avatar: "https://cdn.pixabay.com/photo/2019/10/30/07/04/paint-4588860_960_720.png"
        },
        {
          id: "3",
          name: "Sveta",
          avatar: "https://cdn.pixabay.com/photo/2019/10/30/07/04/paint-4588860_960_720.png"
        },
      ]
    }
  },

  _callSubscriber() {
    console.log('no subscribers(observers)')
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: "5",
        message: this._state.profilePage.newPostText,
        likesCount: "0"
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === SET_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.postText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: "6",
        message: this._state.dialogsPage.newMessageText
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === SET_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.messageText;
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const setNewPostTextActionCreator = (text) =>
  ({ type: SET_NEW_POST_TEXT, postText: text });

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const setNewMessageTextActionCreator = (text) =>
  ({ type: SET_NEW_MESSAGE_TEXT, messageText: text });

export default store;