import React from "react";
import classes from './Profile.module.css';
import PostList from "./PostList/PostList";

const Profile = () => {
    return (
        <div>
            <img src='https://cs9.pikabu.ru/post_img/2017/09/18/4/og_og_1505707767281929590.jpg'/>
            <div>ava + descr</div>
            <PostList/>
        </div>
    );
};
export default Profile;
