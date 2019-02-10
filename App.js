import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "@firebase/app";
import "@firebase/auth";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";
import Router from "./src/Router";

export default class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyBv-UIvPlVXRt432iL5wg87XGmLIOaD8ec",
      authDomain: "udemymanager-3a2d7.firebaseapp.com",
      databaseURL: "https://udemymanager-3a2d7.firebaseio.com",
      projectId: "udemymanager-3a2d7",
      storageBucket: "udemymanager-3a2d7.appspot.com",
      messagingSenderId: "399901088464"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
