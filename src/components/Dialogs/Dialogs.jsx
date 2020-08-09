import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    <div className={classes.dialog + ' ' +classes.active}>
                       <NavLink to="/dialogs/1">Vasya</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to="/dialogs/2">Oleg</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to="/dialogs/3">Evan</NavLink>
                    </div>
                </div>

                <div className={classes.messages}>
                    <div className={classes.message}>Hi</div>
                    <div className={classes.message}>>How are you</div>
                    <div className={classes.message}>>azaza</div>
                </div>
            </div>
        </div>
    );

};
export default Dialogs;
