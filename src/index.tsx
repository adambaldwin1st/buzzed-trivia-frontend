import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {GoogleOAuthProvider} from "@react-oauth/google";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <BrowserRouter>
        <GoogleOAuthProvider clientId="392102598352-1p0p7al4qbboh7ce91fddashq95s1jm4.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
    </BrowserRouter>);
