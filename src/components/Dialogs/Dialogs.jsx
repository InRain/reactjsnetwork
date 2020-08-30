import React from "react";
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {updateNewMessageBodyActionCreator, sendMessageActionCreator} from "../../redux/store";


const Dialogs = (props) => {

    let messagesView = props.dialogList.messages.map((elem) => {
        return (
            <Message text={elem.text}/>
        )
    });

    let dialogsView = props.dialogList.dialogs.map((elem) => {
        return (
            <DialogItem userId={elem.id} userName={elem.name}/>
        );
    });

    let messageTextRef = React.createRef();

    const messageTextChange = () =>{
        let text = messageTextRef.current.value;
        props.dispatch(updateNewMessageBodyActionCreator(text));
    }

    const sendMessage = () =>{
        props.dispatch(sendMessageActionCreator());
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {dialogsView}
                </div>

                <div className={classes.messages}>
                    {messagesView}
                    <div className={classes.newMessage}>
                        <div className={classes.newMessageHeader}>New message</div>
                        <div className={classes.newMessageControls}>
                            <div><textarea
                                ref = {messageTextRef}
                                className={classes.newMessageTextArea}
                                placeholder="enter message here"
                                onChange={messageTextChange}
                            ></textarea></div>
                            <button onClick={sendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );

};
export default Dialogs;
