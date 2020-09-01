const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
        posts: [
            {id: 0, message: 'Hi, how are you', likesCnt: 10},
            {id: 1, message: 'Omg!!!!', likesCnt: 1},
            {id: 2, message: 'WTF', likesCnt: 3},
        ],
        newPostText: 'new post text',
}

const  profileReducer = (state = initialState, action) =>{
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };
        state.posts.push(newPost);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }
    return state;
}

export default profileReducer;
