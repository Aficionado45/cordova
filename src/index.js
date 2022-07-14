import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "cordova_script";
import { Auth0Provider } from "@auth0/auth0-react";

document.addEventListener(
  "deviceready",
  () => {
    ReactDOM.render(
      <React.StrictMode>
        <Auth0Provider
         domain="dev-z313-qbx.us.auth0.com"
         clientId="xrGshabZtBaDtQxkwGsx6A43A2Fa4P9Q"
         redirectUri={window.location.origin}>
          <div>
            <App cordovaWork={true} />
          </div>
        </Auth0Provider>
      </React.StrictMode>,
      document.getElementById("root")
    );
  },
  false
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
