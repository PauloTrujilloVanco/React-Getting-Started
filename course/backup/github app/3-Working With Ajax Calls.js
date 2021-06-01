import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
// import { useState } from 'react';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//// GitHub usernames: gaearon, sophiebits, patux, dayraaAlvarez, paulotrujillo
reportWebVitals();

const testData = [
  { name: "Paulo Trujillo", avatar_url: "https://avatars.githubusercontent.com/u/4239850?v=4", company: "@Vanco", id: "4239850" },
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook", id: "78257856" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu", id: "28931973" },
  { name: "Dayra Alvarez", avatar_url: "https://avatars3.githubusercontent.com/u/37418870?v=4", company: "Facebook", id: "37418870" },
];

const CardList = (props) => {
  return (
    <div>
      { props.profiles.map(profile => <Card {...profile} key={profile.id} />)}
    </div>
  );
};

class Card extends React.Component {
  render() {
    const profile = this.props
    return (
      <div className='github-profile'>
        <img src={profile.avatar_url} alt='imagen' />
        <div className='info'>
          <div className='name'> {profile.name} </div>
          <div className='company'>{profile.company}</div>
        </div>
      </div>
    );

  }
}

class Form extends React.Component {
  state = { userName: '' };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await
      axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });
    this.setState({ userName: '' });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text'
          value={this.state.userName}
          placeholder='Github Username:'
          onChange={event => this.setState({ userName: event.target.value })}
          required />
        <button>Add Card</button>
      </form>
    );
  }
}

class App extends React.Component {

  state = {
    profiles: [],
    //profiles: testData,

  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
    //console.log('App', profileData);
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

ReactDOM.render(
  <App title='The Github Cards App' />,
  document.getElementById('content'),
);
