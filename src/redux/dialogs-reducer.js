const SEND_MESSAGE = "SEND-MESSAGE";
const SET_NEW_MESSAGE_BODY = "SET-NEW-MESSAGE-BODY";

const dialogsReducer = (state, action) => {

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