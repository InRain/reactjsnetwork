import React from "react";
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            <div className={classes.dialogItem}>
                <img className={classes.avatarSmall}
                     src='https://avatars.mds.yandex.net/get-pdb/236760/58f09216-82b4-4af1-aa8f-8d6ca359c823/s375'/>
                <span className={classes.dialog}>
                    <NavLink to={'/dialogs/' + props.userId}>{props.userName}</NavLink>
                </span>

            </div>

        </div>
    );

};
export default DialogItem;
