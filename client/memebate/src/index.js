import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Redux
// import { Provider } from "react-redux";
// import store from "./redux/store";

// const store = createStore(rootReducer);

ReactDOM.render(
  // <Provider store={store}>
  <Auth0Provider
    domain="dev-p5tvvska.us.auth0.com"
    clientId="W2BRBhJLb19kRyibIw5wW7G4qp7IrTPi"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  // </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
