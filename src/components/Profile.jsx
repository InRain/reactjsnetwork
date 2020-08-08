import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <img src='https://cs9.pikabu.ru/post_img/2017/09/18/4/og_og_1505707767281929590.jpg'/>
            <div>ava + descr</div>
            <div>My posts
                <div>New post</div>
                <div className={classes.posts}>
                    <div className={classes.postItem}>post1</div>
                    <div>post2</div>
                </div>
            </div>
        </div>
    );
};
export default Profile;
