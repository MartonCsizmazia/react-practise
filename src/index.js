import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import MyInfo from "./components/MyInfo";
import Practise from "./components/Practise";
import ToDo from "./components/ToDo";

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 */
/////////////////////////////////////////////

/*
https://www.youtube.com/watch?v=DLX62G4lc44
start the app -> http://localhost:3000/
 */

//HOL TART A VIDEÓ? : 52:00

ReactDOM.render(<div>
        <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>
        <ol>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ol>
    </div>
    ,document.getElementById("root"));

///////////////////////

function MyApp(){
    return (
     <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
    </ul>
    )
    //needs to return a single JSX element
    //it has to be a single element, next to this an ordered list will not work
}
ReactDOM.render(
    <MyApp/>,
    document.getElementById("root2"));

/////////////////////////


function MyApp3(){
    return (
        <div>
            <h1>
                Márton
            </h1>
            <p>
                little brub about myself
            </p>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
    )
    //needs to return a single JSX element
    //it has to be a single element, next to this an ordered list will not work
}
ReactDOM.render(
    <MyApp3/>,
    document.getElementById("root3"));
////////////////////////


//MyInfo is imported from the TOP, and declared in another file in components
ReactDOM.render(
    <MyInfo/>,
    document.getElementById("root3"));


////////////////////////
//App is imported from the TOP, and declared in another file in components
ReactDOM.render(
    <App/>,
    document.getElementById("root4"));

////////////////////////
//App is imported from the TOP, and declared in another file in components
ReactDOM.render(
    <Practise/>,
    document.getElementById("root5"));

ReactDOM.render(
    <ToDo/>,
    document.getElementById("root6"));








// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
