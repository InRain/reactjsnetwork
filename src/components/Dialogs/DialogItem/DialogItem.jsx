import React from "react";
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink activeClassName={props.isActive ? classes.active : ''}
                     to={'/dialogs/' + props.userId}>{props.userName}</NavLink>
        </div>
    );

};
export default DialogItem;
