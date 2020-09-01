import React from "react";
import classes from './PostList.module.css';
import Post from "./Post/Post";

const PostList = (props) => {
    let postsView = props.posts.map((elem) => {
        return (
            <Post message={elem.message}/>
        )
    });

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updatePostText(text);
    }

    return (
        <div className={classes.posts}>
            <h3>Posts</h3>
            <div className={classes.postContainer}>
                <div>
                    <textarea
                        className={classes.postText}
                        placeholder="write your text here"
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsView}
            </div>
        </div>
    );
};
export default PostList;
