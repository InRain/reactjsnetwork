import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostListContainer from "./PostList/PostListContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostListContainer
                store={props.store}/>
        </div>
    );
};
export default Profile;
