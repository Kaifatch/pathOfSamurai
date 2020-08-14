const SEND_MESSAGE = "SEND-MESSAGE";
const SET_NEW_MESSAGE_BODY = "SET-NEW-MESSAGE-BODY";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Dimych"
    },
    {
      id: 2,
      name: "Andrey"
    },
    {
      id: 3,
      name: "Sveta"
    },
    {
      id: 4,
      name: "Sasha"
    },
    {
      id: 5,
      name: "Victor"
    },
    {
      id: 6,
      name: "Valera"
    },
  ],
  messages: [
    {
      id: 1,
      message: "Hi"
    },
    {
      id: 2,
      message: "How is your it-kamasutra?"
    },
    {
      id: 3,
      message: "Yo"
    },
    {
      id: 4,
      message: "Yo"
    },
    {
      id: 5,
      message: "Yo"
    },
  ],
  newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.messages.push({ id: 6, message: body });
      state.newMessageBody = "";
      return state;

    case SET_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const setNewMessageBodyCreator = (body) =>
  ({ type: SET_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;