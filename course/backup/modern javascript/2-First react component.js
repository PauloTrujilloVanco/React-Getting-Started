import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useState} from 'react';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const Button = (props) => {
  const handleClick = () => props.onClickFunction(props.increment);
  return (
  <button onClick={handleClick}>
      +{props.increment}
  </button>)
}


const Display = (props) => {
  return (
    <div>{props.message}</div>
  );

}

const App = ( ) => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue)
  return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={5}/>
      <Button onClickFunction={incrementCounter} increment={10}/>
      <Button onClickFunction={incrementCounter} increment={100}/>
      <Display message={counter}/>
    </div>
  );
}


ReactDOM.render(
  <App/>,
  document.getElementById('content')
);






