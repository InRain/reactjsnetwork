import React from "react";
import {updateNewMessageBodyActionCreator, sendMessageActionCreator} from "../../redux/store";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();
    console.log(state);


    const updateMessageText = (text) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(text));
    }

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    return (
        <Dialogs
            updateMessageText={updateMessageText}
            sendMessage={sendMessage}
            dialogList={state.dialogs}
        />
    )
};
export default DialogsContainer;
