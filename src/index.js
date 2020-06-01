import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux'
import store from './services/store/store';
import  './index.sass'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
,
    document.getElementById("root")
);