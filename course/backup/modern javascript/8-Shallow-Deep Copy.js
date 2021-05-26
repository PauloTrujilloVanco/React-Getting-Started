import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { useState } from 'react';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
let title = 'Shallow/Deep Copy'

ReactDOM.render(
  <h1>{title}</h1>, document.getElementById('content')
);

//Shallow Copy
let person = {
  firstName: 'Paulo',
  lastName: 'Trujillo',
  address: {
    street: 'Los Alpes 1419',
    city: 'GDL',
    state: 'JAL',
    country: 'MX',
  },
};

//Using Object Assign
//let copiedPerson = Object.assign({}, person);

//Using destructuring
let copiedPerson = {...person};


console.log(person);

copiedPerson.firstName = 'Juan Paulosss';  //Disconnected
copiedPerson.address.city = 'Guanatos'; //Connected

console.log(copiedPerson);

//Deep Copy
let deepCopiedPerson = JSON.parse(JSON.stringify(person));

console.log(person);

deepCopiedPerson.firstName = 'Max';
deepCopiedPerson.lastName = 'Powell';
deepCopiedPerson.address.city = 'NY';

console.log(deepCopiedPerson);
