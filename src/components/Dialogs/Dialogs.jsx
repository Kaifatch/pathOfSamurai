import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMessageBody = props.dialogsPage.newMessageBody;

  let onMessageSend = () => props.sendMessage();

  let onMessageType = (event) => {
    let body = event.target.value;
    props.setNewMessageBody(body);
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
            onChange={onMessageType}
            value={newMessageBody}
          />
        </div>
        <div>
          <button onClick={onMessageSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
