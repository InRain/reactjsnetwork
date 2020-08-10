import React from "react";
import classes from './PostList.module.css';
import Post from "./Post/Post";

let postData =[
    {id:0, message:'Hi, how are you', likesCnt:10 },
    {id:1, message:'Omg!!!!', likesCnt:1 },
    {id:2, message:'WTF', likesCnt:3 },
]

let postsView = postData.map((elem) =>{
    return(
        <Post message = {elem.message}/>
    )
});

const PostList = () => {
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
