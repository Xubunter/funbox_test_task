import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './style.scss';
import './fonts/fonts.scss'

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);