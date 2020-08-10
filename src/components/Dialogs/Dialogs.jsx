import React from "react";
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


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

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {dialogsView}
                </div>

                <div className={classes.messages}>
                    {messagesView}
                </div>
            </div>
        </div>
    );

};
export default Dialogs;
