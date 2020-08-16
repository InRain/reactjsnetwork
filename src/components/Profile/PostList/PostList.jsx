import React from "react";
import classes from './PostList.module.css';
import Post from "./Post/Post";


const PostList = (props) => {

    let postsView = props.postList.posts.map((elem) =>{
        return(
            <Post message = {elem.message}/>
        )
    });

    let newPostText = React.createRef();
    let addPost = () => {
        let text = newPostText.current.value;
        props.addPost(text);
    }

    return (
        <div className={classes.posts}>
            <h3>Posts</h3>
            <div className={classes.postContainer}>
                <div >
                    <textarea ref={newPostText} className={classes.postText} placeholder="write your text here"></textarea>
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
