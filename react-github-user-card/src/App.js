import React from 'react';
import './App.css';
import axios from 'axios';

import MyCard from './components/MyCard';
import Test from './components/Test';

import 'bootstrap/dist/css/bootstrap.min.css';
import { CardColumns } from 'react-bootstrap';

class App extends React.Component {
constructor() {
  super();
    this.state = {
      mycard: [],
      followers: [],
      userInput: ""
  };
}

componentDidMount(){
  axios
    .get('https://api.github.com/users/hoopcha')
    .then((response) => {
      console.log('data:', response)
      this.setState({mycard: response.data})
    })
    .catch(err => console.log('error'));
    axios
    .get('https://api.github.com/users/hoopcha/followers')
    .then((response) => {
      console.log('follower data:', response)
      this.setState({followers: response.data})
    })
    .catch(err => console.log('error'));
  }

  handleChanges = e => {
    this.setState({
      userInput: e.target.value
    });
  };


  fetchPeople = () => {
    axios
      .get(`https://api.github.com/users/${this.state.userInput}`)
      .then(res => {
        this.setState({
          mycard: res.data
        });
      })
      .catch(err => console.log(err));
    axios
    .get(`https://api.github.com/users/${this.state.userInput}/followers`)
    .then((response) => {
      console.log("ahhhhh", response)
      this.setState({
        followers: response.data
      });
    })
    .catch(err => console.log('error'));
  };


render(){
  return (
  <div>
    <div>
      <h1>GitHub Cards</h1>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchPeople}>Search Username</button>
      <div>
        <MyCard
        key = {this.state.mycard.created_at}
        image = {this.state.mycard.avatar_url}
        name = {this.state.mycard.name}
        username = {this.state.mycard.login}
        location = {this.state.mycard.location}
        followers = {this.state.mycard.followers}
        following = {this.state.mycard.following}
        />
      </div>
      <h1> Followers: </h1>
      </div>
      <CardColumns>
      {this.state.followers.map(follower =>{
      return (
             <Test
             key = {follower.id}
             image = {follower.avatar_url}
             username = {follower.login}
             />
      )
      })}
      </CardColumns>
  </div>
  )
}
}
export default App;
