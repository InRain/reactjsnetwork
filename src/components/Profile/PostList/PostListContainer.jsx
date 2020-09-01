import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";
import PostList from "./PostList";


const PostListContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));

    }

    return (
        <PostList
            updatePostText={onPostChange}
            addPost={addPost}
            posts={state.profile.posts}
            newPostText={state.profile.newPostText}
        />
    );
};
export default PostListContainer;
