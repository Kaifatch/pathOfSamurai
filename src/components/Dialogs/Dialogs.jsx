import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

let Dialogs = ({sendMessage, dialogsPage}) => {

  let addNewMessage = (values) => {
    sendMessage(values.newMessageBody)
  };

  let dialogsElements = dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id}/>
  ));

  let messagesElements = dialogsPage.messages.map((m) => (
    <Message message={m.message} key={m.id}/>
  ));

  return (
    <div className={styles.dialogs}>
      <ul className={styles.dialogsItems}>{dialogsElements}</ul>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <AddMessageForm onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};


export default Dialogs;
