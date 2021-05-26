import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState } from 'react';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
let title = ' Arrow functions () => {}'

ReactDOM.render(
  <h1>
    {title}
  </h1>,
  document.getElementById('content')
);

const launcher = () => {

  console.log(this);

  const testerObj = {
    func1: function () {
      console.log('func1', this);

    },

    func2: () => {
      console.log('func2', this);
    },
  };

  testerObj.func1();
  testerObj.func2();

};

launcher();





