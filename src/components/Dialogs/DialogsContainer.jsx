import React from "react";
import {
  sendMessageCreator,
  setNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onMessageSend = () => props.store.dispatch(sendMessageCreator());

  let onMessageType = (body) => {
    props.store.dispatch(setNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      setNewMessageBody={onMessageType}
      sendMessage={onMessageSend}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
