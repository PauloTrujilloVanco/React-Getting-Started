import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { useState } from 'react';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
let title = 'Template Strings';

ReactDOM.render(
  <h1>{title}</h1>, document.getElementById('content')
);

let total = Math.floor(Math.random() * 1000);

let example = `Total: $${total}`;

console.log(example);
