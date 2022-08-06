import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import combinedReducer from "./redux/products/index";
import thunk from "redux-thunk";
import {createTheme, MuiThemeProvider} from "@material-ui/core";

const composeEnchanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
 combinedReducer,
 composeEnchanser(applyMiddleware(thunk))
);
const theme = createTheme({
 palette: {
  primary: {
   main: "#61D5DF",
   contrastText: "#fff",
  },
  secondary: {
   main: "#49547D",
  },
 },
});
ReactDOM.render(
 <React.StrictMode>
  <MuiThemeProvider theme={theme}>
   <Provider store={store}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
   </Provider>
  </MuiThemeProvider>
 </React.StrictMode>,

 document.getElementById("root")
);
