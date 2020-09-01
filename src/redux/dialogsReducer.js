const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
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
        newMessageBody: ""
    };


export const dialogsReducer = (state = initialState, action) => {
    if (action.type === SEND_MESSAGE) {
        let newMessage = {
            id: 5,
            text: state.newMessageBody,
        };
        console.log(newMessage)
        state.messages.push(newMessage);
    } else if (action.type = UPDATE_NEW_MESSAGE_BODY) {
        console.log(action);
        state.newMessageBody = action.messageText;
    }
    return state;
}

export default dialogsReducer;
