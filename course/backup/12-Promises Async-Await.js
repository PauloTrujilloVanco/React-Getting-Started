import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { useState } from 'react';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
let title = 'Promises Asyn/Await';

ReactDOM.render(
  <h1>{title}</h1>, document.getElementById('content')
);

//Fetch the Old Way
const fetchDataOld = () => {
  fetch('https://api.github.com').then(resp => {
    resp.json().then(data => {
      console.log(data);
    });
  });
};

fetchDataOld();

//Fetch Modern way
const fetchDataModern = async () => {

  const resp = await fetch('https://api.github.com');
   console.log('Iniciando peticion:');

  
  const data = await resp.json();
  console.log('Finalizando peticion:');

  console.log(data);
};

fetchDataModern();


