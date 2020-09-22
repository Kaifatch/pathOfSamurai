import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

class Dialogs extends React.Component {
  render() {
    let newMessageBody = this.props.dialogsPage.newMessageBody;

    let onMessageSend = () => this.props.sendMessage();

    let onMessageType = (event) => {
      let body = event.target.value;
      this.props.setNewMessageBody(body);
    };

    let dialogsElements = this.props.dialogsPage.dialogs.map((d) => (
      <DialogItem name={d.name} key={d.id} id={d.id} />
    ));

    let messagesElements = this.props.dialogsPage.messages.map((m) => (
      <Message message={m.message} key={m.id} />
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
  }
}

export default Dialogs;
