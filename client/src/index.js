import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import {AuthProvider} from "./context/auth"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
<AuthProvider>
<App />
</AuthProvider>
);