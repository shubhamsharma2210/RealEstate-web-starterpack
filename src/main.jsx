import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-313aduargi60qsxc.us.auth0.com"
      clientId="WeurL1a9xrzeCADHNon75sc8Yxt9g7zT"
      authorizationParams={{ redirect_uri: "http://localhost:5173" }}
      audience="http://localhost:7000"
      scope="openid profile email"
    >
      
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
