import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { useState } from 'react';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
let title = 'Object Oriented';

ReactDOM.render(
  <h1>{title}</h1>, document.getElementById('content')
);

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }

  greet() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}

const o1 = new Person('Max');
const o2 = new Student('Tina', '1st grade');
const o3 = new Student('Mark','3rd Grade');
o3.greet = ()=> console.log("I'm Special!");

o1.greet();
o2.greet();
o3.greet();



