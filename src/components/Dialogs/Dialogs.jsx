import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink activeClassName={props.isActive ? classes.active : ''}
                     to={'/dialogs/' + props.userId}>{props.userName}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return(
        <div className={classes.message}>{props.text}</div>
    );

}

const Dialogs = () => {
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    <DialogItem userId={'1'} userName={'Vasya'} isActive={true}/>
                    <DialogItem userId={'2'} userName={'Kolia'} isActive={false}/>
                    <DialogItem userId={'3'} userName={'Sveta'} isActive={false}/>
                </div>

                <div className={classes.messages}>
                    <Message text="Hi!"/>
                    <Message text="Is there anyone?"/>
                </div>
            </div>
        </div>
    );

};
export default Dialogs;
