// import React from "react";
import { sendMessage, setNewMessageBody } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().dialogsPage;

//         let onMessageSend = () => store.dispatch(sendMessageCreator());

//         let onMessageType = (body) => {
//           store.dispatch(setNewMessageBodyCreator(body));
//         };
//         return (
//           <Dialogs
//             setNewMessageBody={onMessageType}
//             sendMessage={onMessageSend}
//             dialogsPage={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     setNewMessageBody: (body) => {
//       dispatch(setNewMessageBodyCreator(body));
//     },
//     sendMessage: () => {
//       dispatch(sendMessageCreator());
//     },
//   };
// };

const DialogsContainer = connect(mapStateToProps, {
  setNewMessageBody,
  sendMessage,
})(Dialogs);

export default DialogsContainer;
