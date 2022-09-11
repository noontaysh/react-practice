import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sideBarReducer from "./sideBarReducer";

let store = {
  _state: {
    profile: {
      postsData: [
        { id: 1, message: "Hi, whats up ", likeCount: 12 },
        { id: 2, message: "Its fucked up", likeCount: 14 },
        { id: 2, message: "Its fucked up", likeCount: 14 },
        { id: 2, message: "Its fucked up", likeCount: 14 },
      ],
      newPostText: "dsdsd",
    },

    dialogs: {
      dialogsData: [
        { id: 1, name: "Johnny" },
        { id: 2, name: "John" },
        { id: 3, name: "JohNny" },
        { id: 4, name: "JOHNNY" },
        { id: 5, name: "JOHN" },
      ],

      messagesData: [
        { id: 1, message: "Hey!" },
        { id: 2, message: "Whats up" },
        { id: 3, message: "grwm" },
        { id: 4, message: "JOHNNY" },
        { id: 5, message: "JOHN" },
      ],
      newMessageText: "dsds",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("sds");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer pattern
  },
  dispatch(action) {
    // type obj
    // { type: 'ADD-POST' }
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogReducer(this._state.dialogs, action);
    this._state.sidebar = sideBarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;

// store - OOP

// addPost() {
//   let newPost = {
//     id: 5,
//     message: this._state.profile.newPostText,
//     likeCount: 0,
//   };
//   this._state.profile.postsData.push(newPost);
//   this._state.profile.newPostText = ''
//   this._callSubscriber(this._state)
// },
// updateNewPostText(newText) {
//   this._state.profile.newPostText = newText
//   this._callSubscriber(this._state)
// },
// addMessage() {
//   let newMessage = {
//     id: 6,
//     message: this._state.dialogs.newMessageText
//   }
//   this._state.dialogs.messagesData.push(newMessage)
//   this._state.dialogs.newMessageText = ''
//   this._callSubscriber(this._state)
// },
// updateNewMessageText(messageText) {
//   this._state.dialogs.newMessageText = messageText
//   this._callSubscriber(this._state)
// },

// if (action.type === ADD_POST) {
//   let newPost = {
//     id: 5,
//     message: this._state.profile.newPostText,
//     likeCount: 0,
//   };
//   this._state.profile.postsData.push(newPost);
//   this._state.profile.newPostText = "";
//   this._callSubscriber(this._state);
// } else if (action.type === UPDATE_NEW_POST_TEXT) {
//   this._state.profile.newPostText = action.newText;
//   this._callSubscriber(this._state);
// } else if (action.type === ADD_MESSAGE) {
//   let newMessage = {
//     id: 6,
//     message: this._state.dialogs.newMessageText,
//   };
//   this._state.dialogs.messagesData.push(newMessage);
//   this._state.dialogs.newMessageText = "";
//   this._callSubscriber(this._state);
// } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
//   this._state.dialogs.newMessageText = action.messageText;
//   this._callSubscriber(this._state);
// }
