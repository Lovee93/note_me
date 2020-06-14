import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import './App.css';

const initialState = {
  isLoggedIn: false,
  route: 'SignIn',
  user: {
    id:'',
    firstname: '',
    lastname: '',
    email: '',
    joined:''
  },
  notes: ''
}

class App extends Component {
  
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.user.id,
        firstname: data.user.firstname,
        lastname: data.user.lastname,
        email: data.user.email,
        joined: data.user.joined
      },
      notes: data.notes
    })
  }

  loadNotes = (user_id) => {
    fetch(`https://still-bastion-77945.herokuapp.com/note_me/${user_id}`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'} 
    })
    .then(response => response.json())
    .then(data => {
      if(data){
        this.setState({
          notes: data.notes
        })
      }
    })
  }

  onRouteChange = (route) => {
    if(route === 'signin') {
      this.setState(initialState)
    }
    else if(route === 'home'){
      this.setState({isLoggedIn: true})
    } 
      this.setState({route: route})
  }

  render() {

    const { isLoggedIn, route, user, notes } = this.state;

    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Grand+Hotel&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Amaranth&display=swap" rel="stylesheet" />
          <header className="App-header">
            <Navigation onRouteChange={this.onRouteChange} isLoggedIn={isLoggedIn}/> 
            {
              !isLoggedIn ? 
                <div className="body">
                  { 
                    route === 'register' ? 
                      <Register onRouteChange={this.onRouteChange} /> : 
                      <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
                  }           
                  <h1 className="heading">Note Down your Ideas Today</h1>
                </div> : 
              <div className="home">
                <Home user={user} notes={notes} loadNotes={this.loadNotes} />
              </div>
            }
          </header>
          <div className="footer">
          </div>
      </div>
    );
  }
}

export default App;
