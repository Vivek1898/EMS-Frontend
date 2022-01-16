// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App/App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';



//import createStore 
//CreateSTore method used to create the store
//import middleware
//applyMiddleware fuc used to apply thunk
//thunk provide communication b/w action =>reducer =>component
//pass reducer to store
//use store using Provideer
//Provider gives store available to component

import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer";
import thunk from "redux-thunk";


const store=createStore(reducer,applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
   </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
