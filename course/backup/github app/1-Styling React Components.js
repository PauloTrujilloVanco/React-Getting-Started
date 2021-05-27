import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { useState } from 'react';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

const CardList = (props) => {
  <div>
    <Card />
  </div>

};


class Card extends React.Component {
  render() {
    return (
      <div className='github-profile' style={{ margin: '1rem' }}>
        <img src='http://placehold.it/75' alt='imagen' />
        <div className='info' style={{ display: 'inline-block', marginLeft: 15 }}>
          <div className='name' style={{ fontSize: '125%' }}>Name here...</div>
          <div className='company' style={{ color: Math.random() < 0.5 ? 'blue' : 'black' }} >
            Company here...
          </div>
        </div>
      </div>
    );

  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Card />
      </div>
    )
  }
}

ReactDOM.render(
  <App title='The Github Cards App' />,
  document.getElementById('content'),
);


