import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useState} from 'react';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//{{}}  Nested block scopes
{
  var hiddenHello = 'Hola Mundirijillo!!'
}

const sum = (a, b) => {
  var result = a + b;
  return result;
}

const arreglo = ['perro', 'gato' , 'ave'];
console.log(arreglo);
arreglo[0] = 'conejo';
console.log(arreglo);

const person = {
  firstName: 'Paul',
  lastName: 'Trujillo',
};

person['lastName'] = 'Trujirijillo';
console.log(person);


ReactDOM.render(
  <h1>
    {hiddenHello + ' : ' + sum(5, 5) }
  </h1>,
  document.getElementById('content')
);


for (let index = 0; index < 10; index++) {
  console.log(index);
}
console.log('Outside: ' + index);






