import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { useState } from 'react';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
let title = 'Destructuring'

ReactDOM.render(
  <h1>{title}</h1>, document.getElementById('content')
);

const { PI, E, SQRT2 } = Math

console.log(PI, E, SQRT2);

const circle = {
  label: 'circleX',
  radius: 2,
};

const circleArea = ({ radius }, { precision = 2} = {}) =>
  (PI * radius * radius).toFixed(precision);

console.log(
  circleArea(circle, { precision: 10})
);


const [first, second,,forth] = [10,20,30,40];
console.log(first, second, forth);

const [primero, ...restOfItems] = [10,20,30,40];
console.log(primero, restOfItems);

const data = {
  temp1: '001',
  temp2: '002',
  firstName: 'Paulo',
  lastName: 'Trujillo',
}

const {temp1, temp2, ...person} = data

console.log(person);
person.firstName = 'Paulon'
console.log(data.firstName);

