import React from "react";
import classes from './PostList.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";



const PostList = (props) => {

    let postsView = props.postList.map((elem) => {
        return (
            <Post message={elem.message}/>
        )
    });

    let newPostText = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostText.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));

    }

    return (
        <div className={classes.posts}>
            <h3>Posts</h3>
            <div className={classes.postContainer}>
                <div>
                    <textarea
                        ref={newPostText}
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
