import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { useState } from 'react';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
let title = 'Object Literals'

ReactDOM.render(
  <h1>
    {title}
  </h1>,
  document.getElementById('content')
);

const mystery = 'answer';
const inversOfPI = 1 / Math.PI;


const obj = {
  p1: 10,
  p2: 20,
  f1() { },
  f2: () => { },
  [mystery]: 42,
  inversOfPI,
};

console.log('mystery:', mystery);
console.log('obj.mystery:', obj.mystery);
console.log('obj.answer:', obj.answer);
console.log('inversOfPI:', obj.inversOfPI);


