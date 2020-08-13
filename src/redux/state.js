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

  getState() {
    return this._state;
  },

  addPost() {
    let newPost = {
      id: "5",
      message: this._state.profilePage.newPostText,
      likesCount: "0"
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  sendMessage() {
    let newMessage = {
      id: "6",
      message: this._state.dialogsPage.newMessageText
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },

  setNewPostText(postText) {
    this._state.profilePage.newPostText = postText;
    this._callSubscriber(this._state);
  },

  setNewMessageText(messageText) {
    this._state.dialogsPage.newMessageText = messageText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }

}

export default store;