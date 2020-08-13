import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  setNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let sendMessage = () => props.dispatch(sendMessageCreator());

  let newMessageBody = props.dialogsPage.newMessageBody;

  let onMessageChange = (event) => {
    let body = event.target.value;
    let action = setNewMessageBodyCreator(body);
    props.dispatch(action);
  };

  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={styles.dialogs}>
      <ul className={styles.dialogsItems}>{dialogsElements}</ul>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            placeholder="Enter your message"
            onChange={onMessageChange}
            value={newMessageBody}
          />
        </div>
        <div>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
