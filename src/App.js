// import React from "react";
import "./App.css";
import Profile from "./blocks/Profile/Profile";
import Header from "./blocks/Header/Header";
import Nav from "./blocks/Nav/Nav";
import Dialogs from "./blocks/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  dialogs={props.state.dialogs}
                  dispatch={props.dispatch}
                  // updateNewMessageText={props.updateNewMessageText}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  profile={props.state.profile}
                  dispatch={props.dispatch}
                  // updateNewPostText={props.updateNewPostText}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;