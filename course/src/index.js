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
  { name: "Paulo Trujillo", avatar_url: "https://avatars.githubusercontent.com/u/4239850?v=4", company: "@Vanco" },
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Dayra Alvarez", avatar_url: "https://avatars3.githubusercontent.com/u/37418870?v=4", company: "Facebook" },
];

const CardList = (props) => {
  return (
    <div>
      { testData.map(profile => <Card {...profile} />) }
    </div>
  );
};

class Card extends React.Component {
  render() {
    const profile = this.props
    return (
      <div className='github-profile' style={{ margin: '1rem' }}>
        <img src={profile.avatar_url} alt='imagen' height='120rem' />
        <div className='info' style={{ display: 'inline-block', marginLeft: 15 }}>
          <div className='name' style={{ fontSize: '125%' }}> {profile.name} </div>
          <div className='company'>{profile.company}</div>
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
        <CardList />
      </div>
    );
  }
}

ReactDOM.render(
  <App title='The Github Cards App' />,
  document.getElementById('content'),
);
