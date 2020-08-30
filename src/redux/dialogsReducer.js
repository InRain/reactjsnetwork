const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

export const dialogsReducer = (state, action) => {
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
