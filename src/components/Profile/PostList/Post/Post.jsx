import React from "react";
import classes from './Post.module..css';

const Post = (props) => {
    return (
        <div className={classes.postItem}>
            <table border="1" width="100%">
                <tr>
                    <td className="avatar">

                    </td>
                    <td className="postText">
                        <div className="textarea">
                            <textarea value={props.message}></textarea>
                        </div>
                        <div className='postButtons'>
                            <button id='like'>Like</button>
                            <button id='comment'>comment</button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
};
export default Post;
