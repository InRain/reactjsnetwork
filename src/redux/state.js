const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let store = {
    getState() {
        return this._state;
    },
    _state: {
        dialogs: [
            {id: 1, name: 'Vasya'},
            {id: 2, name: 'Kolia'},
            {id: 3, name: 'Sveta'},
        ],
        messages: [
            {id: 0, text: "Hi!"},
            {id: 1, text: "sup!"},
            {id: 2, text: "How are you?"},
            {id: 3, text: "fine"},
        ],
        posts: [
            {id: 0, message: 'Hi, how are you', likesCnt: 10},
            {id: 1, message: 'Omg!!!!', likesCnt: 1},
            {id: 2, message: 'WTF', likesCnt: 3},
        ],
        newPostText: 'new post text'
    },

    renderEntireTree() {
        //this is the stub function for observer
    },

    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.newPostText,
            likesCount: 0
        };
        this._state.posts.push(newPost);
        this.renderEntireTree(this._state);
    },

    subscribe(observer) {
        this.renderEntireTree = observer;
    },

    _updateNewPostText(newText) {
        this._state.newPostText = newText;
        this.renderEntireTree(this._state);
    },

    dispatch(action){
        if(action.type === ADD_POST){
            this._addPost();
        } else if(action.type === UPDATE_NEW_POST_TEXT){
            this._updateNewPostText(action.message)
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        message: text
    }
}

export default store;
window.store = store;
