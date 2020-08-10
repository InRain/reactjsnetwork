import React from "react";
import classes from './PostList.module.css';
import Post from "./Post/Post";


const PostList = (props) => {

    let postsView = props.postList.posts.map((elem) =>{
        return(
            <Post message = {elem.message}/>
        )
    });

    return (
        <div className={classes.posts}>
            <h3>Posts</h3>
            <div>
                {postsView}
            </div>
        </div>
    );
};
export default PostList;
