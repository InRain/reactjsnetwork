import React from "react";
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


let dialogsData = [
    {id: 1, name: 'Vasya'},
    {id: 2, name: 'Kolia'},
    {id: 3, name: 'Sveta'},
]

let messagesData = [
    {id: 0, text: "Hi!"},
    {id: 1, text: "sup!"},
    {id: 2, text: "How are you?"},
    {id: 3, text: "fine"},
]

let messagesView = messagesData.map((elem) => {
    return (
        <Message text={elem.text}/>
    )
});

let dialogsView = dialogsData.map((elem) => {
    return (
        <DialogItem userId={elem.id} userName={elem.name}/>
    );
});




const Dialogs = () => {
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
