let messagesData = [
    {id: 0, text: "Hi!"},
    {id: 1, text: "sup!"},
    {id: 2, text: "How are you?"},
    {id: 3, text: "fine"},
]

let postData =[
    {id:0, message:'Hi, how are you', likesCnt:10 },
    {id:1, message:'Omg!!!!', likesCnt:1 },
    {id:2, message:'WTF', likesCnt:3 },
]

let dialogsData = [
    {id: 1, name: 'Vasya'},
    {id: 2, name: 'Kolia'},
    {id: 3, name: 'Sveta'},
]

let state = {
    dialogs: dialogsData,
    messages: messagesData,
    posts: postData
}

export default state;
