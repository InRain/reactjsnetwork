import React from "react";
import classes from './Profile.module.css';
import PostList from "./PostList/PostList";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostList
                postList={props.posts}
                dispatch={props.dispatch}/>
        </div>
    );
};
export default Profile;
