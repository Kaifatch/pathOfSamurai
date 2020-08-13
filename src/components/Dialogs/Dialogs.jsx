import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageActionCreator,
  setNewMessageTextActionCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  let sendMessage = () => props.dispatch(sendMessageActionCreator());

  let newMessageElement = React.createRef();

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = setNewMessageTextActionCreator(text);
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
        <div>
          {messagesElements}
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.dialogsPage.newMessageText}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
