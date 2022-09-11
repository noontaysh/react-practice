import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
// import { rendererEntireTree } from './render';
// import { addMessage, addPost, updateNewMessageText, updateNewPostText, subscribe } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rendererEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        // addMessage={store.addMessage.bind(store)}
        // updateNewPostText={store.updateNewPostText.bind(store)}
        // updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </React.StrictMode>
  );
};
rendererEntireTree(store.getState());

store.subscribe(rendererEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
