import React from "react";
import classes from './PostList.module.css';
import Post from "./Post/Post";

const PostList = () => {
    return (

        <div>Post List
            <div className={classes.posts}>
                <Post message ='Hi, how are you'/>
                <Post message ="it's first post"/>
            </div>
        </div>
    );
};
export default PostList;
