import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateMessageTextActionCreator, addMessageActionCreator } from "../../redux/dialogReducer";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.dialogs.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    // props.addMessage();
    // props.dispatch({ type: "ADD-MESSAGE" });
    props.dispatch(addMessageActionCreator());
  };

  let onChangeMessage = () => {
    let text = newMessageElement.current.value;
    // props.updateNewMessageText(text);
    props.dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", messageText: text });
    let action = updateMessageTextActionCreator(text);
    props.dispatch(action); 
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea
            onChange={onChangeMessage}
            ref={newMessageElement}
            value={props.dialogs.newMessageText}
            cols="15"
            rows="1"
          />
        </div>
        <button onClick={addMessage}>Enter</button>
      </div>
    </div>
  );
};

export default Dialogs;
