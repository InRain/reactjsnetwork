import React from "react";
import classes from './PostList.module.css';
import Post from "./Post/Post";

const PostList = () => {
    return (

        <div className={classes.posts}>
            <h3>Posts</h3>
            <div>
                <Post message ='Hi, how are you'/>
                <Post message ="it's first post"/>
            </div>
        </div>
    );
};
export default PostList;
