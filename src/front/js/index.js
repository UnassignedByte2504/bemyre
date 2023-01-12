//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import globalReducer from "./state/index";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { SocketProvider } from "./state/socketContext";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";
// const isLogged = useSelector((state) => state.user.isLogged)
const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

//render your react application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SocketProvider>
      <Provider store={store}>
        <Layout/>
      </Provider>
    </SocketProvider>
   </React.StrictMode>
);
