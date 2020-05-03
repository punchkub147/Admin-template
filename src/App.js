import React from "react";
import { Provider } from "react-redux";
import Router from "./router";
import store from "./store";
import i18n from "./i18n";
import './assets/styles/main.css'

i18n.init();

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
