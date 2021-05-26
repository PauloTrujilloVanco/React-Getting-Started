import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useState} from 'react';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{{{}}}

const render = () => {

  document.getElementById('content').innerHTML = `
  <div>
    Hello HTML
    <input />
    <pre>${(new Date).toLocaleTimeString()}</pre>
  </div>
  `
    ;

  ReactDOM.render(
    React.createElement(
      'div', null, 'Hello React',
      React.createElement('input', null),
      React.createElement('pre', null, (new Date).toLocaleTimeString()),

    ),
    document.getElementById('content2'),
  );


}

setInterval(render, 1000);






// ReactDOM.render(
//   document.getElementById('content')
// );






