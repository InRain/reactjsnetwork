import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cs9.pikabu.ru/post_img/2017/09/18/4/og_og_1505707767281929590.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>ava + descr</div>
        </div>
    );
};
export default ProfileInfo;
