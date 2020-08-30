import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
        newPostText: 'new post text',
        newMessageBody: ""
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
    _sendMessage() {
        let newMessage = {
            id: 5,
            text: this._state.newMessageBody,
        };
        console.log(newMessage)
        this._state.messages.push(newMessage);
        this.renderEntireTree(this._state);
    },

    subscribe(observer) {
        this.renderEntireTree = observer;
    },

    _updateNewPostText(newText) {
        this._state.newPostText = newText;
        this.renderEntireTree(this._state);
    },
    _updateNewMessageBody(newBody) {
        this._state.newMessageBody = newBody;
        this.renderEntireTree(this._state);
    },

    dispatch(action) {
        this._state = profileReducer(this._state, action);
        this._state = dialogsReducer(this._state, action);
        this.renderEntireTree(this._state);
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

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyActionCreator = (messageText) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        messageText: messageText
    }
}

export default store;
window.store = store;
