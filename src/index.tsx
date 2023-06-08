import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {GoogleOAuthProvider} from "@react-oauth/google";

ReactDOM.render(
    <BrowserRouter>
        <GoogleOAuthProvider clientId="392102598352-1p0p7al4qbboh7ce91fddashq95s1jm4.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
    </BrowserRouter>, document.getElementById('root'));
