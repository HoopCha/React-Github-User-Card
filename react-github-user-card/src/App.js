import React from 'react';
import './App.css';
import axios from 'axios';

import MyCard from './components/MyCard';
import Test from './components/Test';

class App extends React.Component {
constructor() {
  super();
    this.state = {
      mycard: [],
      followers: []
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



render(){
  return (
  <div>
    <div>
      <h1>GitHub Cards</h1>
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
      </div>
      <div>
      {this.state.followers.map(follower =>{
      return (
             <Test
             key = {follower.id}
             image = {follower.avatar_url}
             username = {follower.login}
             />
      )
      })}
      </div>
  </div>
  )
}
}
export default App;
